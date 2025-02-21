from pymongo import MongoClient

from app.config import settings

uri = f"mongodb+srv://{settings.DB_USERNAME}:{settings.DB_PASSWORD}@hootcode.xbtkj.mongodb.net/?retryWrites=true&w=majority&appName=HootCode"


def get_db():
    client = MongoClient(uri)
    db = client[settings.DB_NAME]
    try:
        yield db
    finally:
        client.close()