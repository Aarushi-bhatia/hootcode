from datetime import datetime
from enum import Enum
from typing import List
from pydantic import BaseModel


class Question(BaseModel):
    question_id: int
    title: str
    description: str
    difficulty: str
    topic: str
    tags: List[str]
    constraints: str
    examples: List[dict]
    created_at: datetime


class Topic(BaseModel):
    name: str
    questions: List[Question]


class Topics(Enum):
    array = "Array"
    hashing = "Hashing"
    two_pointers = "Two Pointers"
    sliding_window = "Sliding Window"
    sorting = "Sorting"
    string = "String"
    stack = "Stack"
    queue = "Queue"
    binary_search = "Binary Search"
    linked_list = "Linked List"
    tree = "Trees"
    heap = "Heap / Priority Queue"
    backtracking = "Backtracking"
    trie = "Tries"
    graph = "Graphs"
    adv_graph = "Advanced Graphs"
    dp_1d = "1D Dynamic Programming"
    dp_2d = "2D Dynamic Programming"
    greedy = "Greedy"
    intervals = "Intervals"
    math = "Math"
    bit = "Bit Manipulation"