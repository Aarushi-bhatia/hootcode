from fastapi import APIRouter

router = APIRouter(prefix="/question", tags=["Questions"])

@router.get("/")
def get_question():
    return "testing"