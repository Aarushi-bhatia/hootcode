# 🦉 HootCode

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Website](https://img.shields.io/badge/Website-Visit-blue)](https://hootcode.vercel.app)

A dynamic platform offering AI guidance, Code Review, and Interactive Learning Path—revolutionizing how you master coding with confidence.

![HootCode Banner](https://github.com/Aarushi-bhatia/hootcode/blob/main/frontend/public/codelaptop.png)

## 🌟 Features

### 🤖 AI-Powered Learning Assistant (Owlie)
- **Smart Hints**: Get contextual hints for problem-solving without complete solutions
- **Code Review**: Receive optimization suggestions and best practices
- **Personalized Guidance**: AI-powered learning recommendations

### 💻 Interactive Code Editor
- **Multi-language Support**: Write and run code in Python, C++, and Java
- **Real-time Execution**: Test your code instantly
- **Syntax Highlighting**: Built with Monaco Editor for a professional coding experience

### 🗺️ Learning Roadmap
- **Structured Learning Paths**: Follow guided paths to master programming
- **Progress Tracking**: Monitor your learning journey
- **Interactive Exercises**: Practice what you learn

### 👤 User Profiles
- **Progress Dashboard**: Track your coding journey
- **Achievement System**: Earn badges and track milestones
- **Learning Analytics**: Visualize your growth

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (Frontend)
- Python 3.10+ (Backend)
- MongoDB Database
- Poetry (Python package manager)

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies using Poetry
poetry install

# Start the FastAPI server
poetry run uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

The backend API will be available at `http://localhost:8000`

### API Documentation
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 🛠️ Tech Stack

### Frontend
- React 19.0
- Vite 6.1
- TailwindCSS 4.0
- Monaco Editor
- React Router DOM 7.2

### Backend
- FastAPI
- MongoDB
- Poetry
- Qwen AI Model (for code assistance)

## 🏗️ Project Structure

```
hootcode/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeEditor/
│   │   │   ├── HomePage/
│   │   │   ├── Navbar/
│   │   │   └── RoadMap/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── backend/
    ├── app/
    │   ├── routers/
    │   ├── database.py
    │   ├── owlie_model.py
    │   └── main.py
    └── pyproject.toml
```

## 🤝 Contributing

We welcome contributions to HootCode! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Links

- [Website](https://hootcode.vercel.app)
- [Documentation](https://github.com/Aarushi-bhatia/hootcode/wiki)
- [Report Bug](https://github.com/Aarushi-bhatia/hootcode/issues)
- [Request Feature](https://github.com/Aarushi-bhatia/hootcode/issues)

## 👥 Author

- **Kanak Tanwar** - [@KanakOS01](https://github.com/kanakOS01)
- **Aarushi Bhatia** - [@Aarushi-bhatia](https://github.com/Aarushi-bhatia)

## 🙏 Acknowledgments

- The amazing open-source community
- [Qwen AI](https://github.com/QwenLM/Qwen) for the code assistance model
- All contributors who help make HootCode better

---

<p align="center">Made with ❤️ by Kanak Tanwar & Aarushi Bhatia</p>
