from app.database.database import Base
from app.database.database import engine

import app.models.goal


def init_database() -> None:
    Base.metadata.create_all(bind=engine)