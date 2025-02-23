from fastapi import Depends, status, HTTPException
from fastapi.security import OAuth2PasswordBearer
from datetime import datetime, timedelta, timezone
import jwt
from pymongo.database import Database

from app.config import settings
from app import schemas, database

SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES = settings.ACCESS_TOKEN_EXPIRE_MINUTES


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, ALGORITHM)


def verify_access_token(token: str, credentials_exception: HTTPException):
    try: 
        payload = jwt.decode(token, SECRET_KEY, ALGORITHM)
        id = payload.get("email")

        if id is None:
            raise credentials_exception
        token_data = schemas.TokenData(id=id)
    except jwt.PyJWTError:
        raise credentials_exception
    
    return token_data


def get_current_user(token: str = Depends(oauth2_scheme), db: Database = Depends(database.get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail=f"Could not authenticate user",
        headers={'WWW-Authenticate': "Bearer"},
    )

    token_data = verify_access_token(token, credentials_exception)
    user = db["users"].find_one({"email": token_data.id})

    if not user:
        raise credentials_exception
    return user
