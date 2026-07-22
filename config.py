from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    APP_NAME = os.getenv("APP_NAME", "Senseii v2")

    HOST = os.getenv("HOST", "0.0.0.0")
    PORT = int(os.getenv("PORT", 8000))

    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

    DEFAULT_VOICE = os.getenv("DEFAULT_VOICE", "ada")
    DEFAULT_ACCENT = os.getenv("DEFAULT_ACCENT", "nigerian")

settings = Settings()
