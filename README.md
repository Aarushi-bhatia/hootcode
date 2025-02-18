# Hootcode

## **Hootcode - FastAPI Backend**

### **Requirements**
Make sure you have the following installed before running the backend:

- Python 3.10+  
- [Poetry](https://python-poetry.org/docs/#installation)  
- PostgreSQL (or any other database if configured)  
- Docker (optional, for containerized deployment)


### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/hootcode.git
cd hootcode/backend
```

### **2. Install Dependencies**
```bash
poetry install
```

This installs all dependencies listed in `pyproject.toml`.

### **3. Start the FastAPI Server**
```bash
poetry run uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```
The server will now be running at:  
🔗 **http://localhost:8000**

### **4. Access the API Docs**
FastAPI provides interactive documentation:  

- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)  
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)  


### **5. Linting and Formatting**
To maintain code quality, use:
```bash
poetry run black .
poetry run isort .
```
