class ActionProvider {
    
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleQuestion(question) {
    try {
      const response = await fetch(`/api/ask/${question}`);
      const answer = await response.json();
      const message = this.createChatBotMessage(answer);
      this.addMessageToState(message);
    } catch (error) {
      console.error(error);
    }
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
