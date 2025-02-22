from fastapi import APIRouter
from app.owlie_model import Owlie

router = APIRouter(prefix="/owlie", tags=["Owlie"])


@router.post("/hints")
def get_ai_hints(question: str, user_code: str):
    """
    Returns hints to solve the problem based on the user's code
    """
    owlie = Owlie("Qwen/Qwen2.5-Coder-0.5B-Instruct")
    prompt = (
        f"Problem Description:\n{question}\n\n"
        f"User Attempt:\n{user_code}\n\n"
        "Provide hints to help the user solve the problem, but do not give the entire solution."
    )

    response = owlie.infer(prompt)
    return {"hints": response}


@router.post("/review")
def get_ai_review(question: str, user_code: str):
    """
    Returns review/optimization to solve the problem based on the user's code
    """
    owlie = Owlie("Qwen/Qwen2.5-Coder-0.5B-Instruct")
    prompt = (
        f"Problem Description:\n{question}\n\n"
        f"User Attempt:\n{user_code}\n\n"
        "This solution is correct. Review the solution and check if there can be optimizations."
    )

    response = owlie.infer(prompt)
    return {"review": response}