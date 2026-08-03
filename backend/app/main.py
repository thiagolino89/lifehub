from fastapi import FastAPI

from app.database.init_db import init_database

init_database()

app = FastAPI(
    title="LifeHub API",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "LifeHub API",
    }