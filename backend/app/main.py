from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import owlie, question, roadmap

ORIGINS = ["*"]
app = FastAPI()

app.add_middleware(
    CORSMiddleware, allow_origins=ORIGINS, allow_credentials=True, allow_methods=["*"], allow_headers=["*"]
)


@app.get("/")
def root():
    return {"message": "root route is working"}