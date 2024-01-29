from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class Community_Event(db.Model, UserMixin):
    __tablename__ = "community_events"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    dates = db.Column(db.String, nullable=False)
    times = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())

    community_event_images = db.relationship(
        "Community_Event_Image", cascade="all, delete", back_populates="community_event")

    def to_dict(self):
        return {
            "id": self.id,
            "dates": self.dates,
            "times": self.times,
            "location": self.location,
            "title": self.title,
            "description": self.description,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }
