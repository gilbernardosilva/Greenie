from llama_index import SimpleDirectoryReader
from llama_index.node_parser import SimpleNodeParser

from llama_index import GPTVectorStoreIndex

from llama_index import LLMPredictor, PromptHelper, ServiceContext
from langchain import OpenAI

from llama_index import StorageContext, load_index_from_storage


def build_service_context(model, max_input_size=4096, max_output_size=256, max_chunk_overlap=20):
    # define LLM
    llm_predictor = LLMPredictor(llm=OpenAI(temperature=0, model_name=model))

    # set maximum input size
    max_input_size = max_input_size
    # set number of output tokens
    num_output = max_output_size
    # set maximum chunk overlap
    max_chunk_overlap = 20
    prompt_helper = PromptHelper(max_input_size, num_output, max_chunk_overlap)
    service_context = ServiceContext.from_defaults(llm_predictor=llm_predictor, prompt_helper=prompt_helper)    
    return service_context


def build__index():
    # load docs
    documents = SimpleDirectoryReader('data').load_data()

    # create node objects from docs
    parser = SimpleNodeParser()
    nodes = parser.get_nodes_from_documents(documents)

    # set up llm service context
    service_context = build_service_context("gpt-3.5-turbo")
    
    # create an index from nodes and llm
    # index = GPTVectorStoreIndex.from_documents(documents, service_context=service_context)
    index = GPTVectorStoreIndex(nodes, service_context=service_context)
    
    # save index locally
    index.storage_context.persist()
    # index.save_to_disk('index-turbo.json')


def load_index(model="gpt-3.5-turbo"):
    sc = build_service_context(model)
    # index = GPTVectorStoreIndex.load_from_disk("index.json", service_context=sc)
    
    # rebuild storage context
    storage_context = StorageContext.from_defaults(persist_dir="./storage")
    # load index
    
    index = load_index_from_storage(storage_context, service_context=sc)

    return index


def chat():
    index = load_index()
    # response = index.query("how will hardlevel inform the terminal if it needs to decrease or increase the hours of heating?")
    # print (response)

    query_engine = index.as_query_engine()
    response = query_engine.query("How will hardlevel inform the terminal if it needs to decrease or increase the hours of heating?")
    print(response)
    response = query_engine.query("Quantos capacitors sao necessarios para montar o pcb?")
    print(response)
    
if __name__ == '__main__':
    # build__index()
    chat()
