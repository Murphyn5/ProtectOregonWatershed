from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class Noap(db.Model, UserMixin):
    __tablename__ = "noaps"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    operation_name = db.Column(db.String, nullable=False)
    report_filed = db.Column(db.DateTime, nullable=False)
    fully_implemented_written_plan = db.Column(db.DateTime)
    available_to_spray_start = db.Column(db.DateTime)
    available_to_spray_end = db.Column(db.DateTime)
    permit_link = db.Column(db.String, nullable=False)
    ferns_link = db.Column(db.String, nullable=False)
    coordinates = db.Column(db.String)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())

    def to_dict(self):
        return {
            'id': self.id,
            'operation_name': self.operation_name,
            'report_filed': self.report_filed.isoformat() if self.report_filed else None,
            'fully_implemented_written_plan': self.fully_implemented_written_plan.isoformat() if self.fully_implemented_written_plan else None,
            'available_to_spray_start': self.available_to_spray_start.isoformat() if self.available_to_spray_start else None,
            'available_to_spray_end': self.available_to_spray_end.isoformat() if self.available_to_spray_end else None,
            'permit_link': self.permit_link,
            'ferns_link': self.ferns_link,
            'coordinates': self.coordinates,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,
        }
