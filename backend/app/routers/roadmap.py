from fastapi import APIRouter, Depends, HTTPException
from typing import List
from pymongo.database import Database

from app import schemas, utils
from app.database import get_db

router = APIRouter(prefix="/roadmap", tags=["Roadmap"])


@router.get("/", response_model=List[schemas.Topic])
def get_dsa_roadmap(db: Database = Depends(get_db)):
    """
    Fetch complete DSA roadmap
    """
    collection = db["questions"]
    topic_wise_questions = {topic.value: [] for topic in schemas.Topics}
    # print(topic_wise_questions)
    docs = collection.find()
    for doc in docs:
        doc["id"] = str(doc.pop("_id"))
        question = schemas.Question(**doc)
        topic_wise_questions[question.topic].append(question)

    grouped_questions = []
    for topic, questions in topic_wise_questions.items():
        if questions:
            grouped_questions.append(schemas.Topic(name=topic, questions=questions))

    return grouped_questions


@router.get("/{topic}")
def get_topic_roadmap(topic: str, db: Database = Depends(get_db)):
    """Fetch roadmap for a topic

    Args:
        topic (str): must be one of the following -
        [array, hashing, two_pointers, sliding_window, sorting, string, stack, queue, binary_search, linked_list, recursion, tree, heap, backtracking, trie, graph, adv_graph, dp_1d, dp_2d, greedy, intervals, math, bit]
    """
    if topic not in schemas.Topics.__members__:
        raise HTTPException(status_code=404, detail="Topic NOT found")

    pre_requisites = utils.get_topic_prerequisites(topic)[::-1]
    pre_requisites = [schemas.Topics[pre_req] for pre_req in pre_requisites]

    collection = db["questions"]
    grouped_questions = []
    docs = collection.find({"topic": schemas.Topics[topic].value})
    for doc in docs:
        doc["id"] = str(doc.pop("_id"))
        question = schemas.Question(**doc)
        grouped_questions.append(question)

    return {"pre_requisites": pre_requisites, "questions": grouped_questions}