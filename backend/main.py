from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="ZIMUT Contact API",
    version="1.0.0"
)

origins = [
    "http://localhost:3000",
    "https://zimut.com.ar",
    "https://www.zimut.com.ar"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactPayload(BaseModel):
    name: str
    email: EmailStr
    company: str | None = None
    message: str


@app.post("/contact")
async def contact(payload: ContactPayload):
    # TODO: plug this into email, database or Slack in production.
    print("New ZIMUT contact:", payload.model_dump())
    return {"status": "ok"}
