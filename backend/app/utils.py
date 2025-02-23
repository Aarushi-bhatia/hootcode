from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

prerequisite_graph = {
    "array": [],
    "hashing": ["array"],
    "two_pointers": ["array"],
    "sliding_window": ["array", "two_pointers"],
    "string": ["array"],
    "stack": ["array"],
    "queue": ["array"],
    "binary_search": ["array"],
    "linked_list": ["array"],
    "tree": ["binary_search"],
    "heap": ["binary_search", "tree"],
    "backtracking": [],
    "trie": ["string"],
    "graph": ["backtracking", "tree"],
    "adv_graph": ["graph"],
    "dp_1d": ["array"],
    "dp_2d": ["dp_1d", "array"],
    "greedy": ["array", "sorting"],
    "intervals": ["array", "sorting"],
    "math": [],
    "bit": ["math"],
}


def get_topic_prerequisites(topic: str, prereqs: list = []) -> list:
    direct_prereqs = prerequisite_graph.get(topic)

    for pre in direct_prereqs:
        if pre not in prereqs:
            prereqs.append(pre)
            get_topic_prerequisites(pre, prereqs)

    return prereqs


def hash(password: str):
    return pwd_context.hash(password)


def verify(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)