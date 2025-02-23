from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pymongo.database import Database

from app.database import get_db
from app.routers import owlie, question, roadmap, auth

ORIGINS = ["*"]
app = FastAPI()

app.add_middleware(
    CORSMiddleware, allow_origins=ORIGINS, allow_credentials=True, allow_methods=["*"], allow_headers=["*"]
)

app.include_router(roadmap.router)
app.include_router(owlie.router)
app.include_router(question.router)
app.include_router(auth.router)


@app.get("/")
async def root():
    return {"message": "root route is working"}


@app.get("/test-db")
async def test_db(db: Database = Depends(get_db)):
    try:
        # Try accessing a collection (change 'test_collection' as needed)
        collection = db["questions"]
        document_count = collection.count_documents({})
        return {"status": "success", "document_count": document_count}
    except Exception as e:
        return {"status": "error", "message": str(e)}