from fastapi import FastAPI
from datetime import datetime
from app.greenie import chat

app = FastAPI()

@app.get("/day", tags=["Dates"])
def get_day_of_week():
    """
    Get the current day of weeks
    """
    return datetime.now().strftime("%A")

@app.get("/ask/{question}", tags=["Questions"])
async def get_asnwer(question: str):
    """
    Get an answer for a question
    """
    return chat(question)
