from fastapi import FastAPI, File, UploadFile
from pathlib import Path
from datetime import datetime
from greenie import chat

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

@app.post("/upload-file/")
async def upload_file(file: UploadFile = File(...)):
    # Create a directory to save the uploaded files
    path = 'uploads/'
    upload_dir = Path(path)
    upload_dir.mkdir(parents=True, exist_ok=True)

    # Save the file to the upload directory
    file_path = path + str(file.filename)
    content = await file.read()
    with open(file_path, "wb") as f:
        f.write(content)

    return {"filename": file.filename}

