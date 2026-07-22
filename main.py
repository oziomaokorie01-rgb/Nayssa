from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "app": settings.APP_NAME,
        "status": "running",
        "version": "2.0.0"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
