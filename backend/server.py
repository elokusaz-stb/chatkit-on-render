from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or specify your frontend domain once deployed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

openai = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

@app.post("/api/chatkit/session")
def create_chatkit_session():
    session = openai.chatkit.sessions.create({
        "workflow": {"id": os.environ.get("CHATKIT_WORKFLOW_ID")}
    })
    return {"client_secret": session.client_secret}
