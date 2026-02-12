from sqlalchemy.orm import declaractive_base

Base = declaractive_base()

from sqlalchemy import Column, String, Float, Integer, DateTime, ForeignKey
from sqlalchemy.sql import func
from .base import Base

class Image(Base):
    __tablename__ = "images"

    id = Column(String, primary_key=True)  # uuid later
    filename = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Detection(Base):
    __tablename__ = "detections"

    id = Column(Integer, primary_key=True, autoincrement=True)
    image_id = Column(String, ForeignKey("images.id"), nullable=False)
    class_name = Column(String, nullable=False)
    confidence = Column(Float, nullable=False)
    x1 = Column(Float, nullable=False)
    y1 = Column(Float, nullable=False)
    x2 = Column(Float, nullable=False)
    y2 = Column(Float, nullable=False)
