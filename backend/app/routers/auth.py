from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from pymongo.database import Database

from app import oauth2, schemas, database, utils

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register", response_model=schemas.Token)
async def register(user: schemas.UserRegister, db: Database = Depends(database.get_db)):
    user_email = user.email.lower()

    existing_user = db["users"].find_one({"email": user_email})
    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User already registered")
    
    user.password = utils.hash(user.password)
    user_data = {
        "name": user.name,
        "email": user_email,
        "password": user.password,
    }
    print(user_data)
    db["users"].insert_one(user_data)

    token = oauth2.create_access_token({"email": user_email})
    return {"access_token": token, "token_type": "bearer"}


@router.post("/login", response_model=schemas.Token)
async def login(user_credentials: OAuth2PasswordRequestForm = Depends(), db: Database = Depends(database.get_db)):
    print(user_credentials)
    user_email = user_credentials.username.lower()

    user = db["users"].find_one({"email": user_email})
    
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Credentials")
    if not utils.verify(user_credentials.password, user["password"]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Credentials")
    
    token = oauth2.create_access_token({"email": user_email})
    return {"access_token": token, "token_type": "bearer"}