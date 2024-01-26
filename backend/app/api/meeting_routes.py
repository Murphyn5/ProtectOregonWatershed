from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from .auth_routes import validation_errors_to_error_messages
from app.models import db, Meeting
from datetime import datetime
from app.forms.meetings_form import MeetingForm

meeting_routes = Blueprint("meetings", __name__)

# CREATE NEW MEETING
@meeting_routes.route("/", methods=["POST"])
@login_required
def create_new_meeting():
    form = Meeting()
    form["csrf_token"].data = request.cookies["csrf_token"]
    data = request.get_json()
    if form.validate_on_submit():
        new_meeting = Meeting(
            title=data["title"],
            meeting_date=data["meeting_date"],
            description=data["description"],
            link=data["link"],
            updated_at=datetime.utcnow(),
            created_at=datetime.utcnow(),
        )
        db.session.add(new_meeting)
        db.session.commit()
        new_meeting = new_meeting.to_dict()
        return new_meeting
    if form.errors:
        return {
            "message": "Validation error",
            "statusCode": 400,
            "errors": validation_errors_to_error_messages(form.errors),
        }, 400


# GET ALL MEETINGS
@meeting_routes.route("/")
def get_meetings():
    meetings = Meeting.query.all()
    meetings_to_return = []

    for meeting in meetings:
        meeting_dict = meeting.to_dict()
        meetings_to_return.append(meeting_dict)

    return {"meetings": {meeting_dict["id"]: meeting_dict for meeting_dict in meetings_to_return}}


# UPDATE MEETING
@meeting_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_meeting(id):
    meeting = Meeting.query.get(id)
    if not meeting:
        return {
            "errors": ["error: Meeting couldn't be found"],
            "status_code": 404,
        }, 404
    data = request.get_json()
    # dt = datetime.strptime(data["date_time"], "%Y-%m-%d %H:%M:%S")
    form = MeetingForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        meeting.title = (data["title"],)
        meeting.meeting_date = (data["meeting_date"],)
        meeting.description = (data["description"],)
        meeting.link = (data["link"],)
        meeting.updated_at = (datetime.utcnow(),)
        db.session.commit()
        meeting_dict = meeting.to_dict()
        return meeting_dict, 200
    if form.errors:
        return {
            "message": "Validation error",
            "statusCode": 400,
            "errors": validation_errors_to_error_messages(form.errors),
        }, 400


# DELETE A MEETING
@meeting_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_meeting(id):
    meeting = Meeting.query.get(id)

    if not meeting:
        return {"errors": "error: Meeting couldn't be found", "status_code": 404}, 404

    db.session.delete(meeting)
    db.session.commit()
    return {"message": "Successfully deleted", "status_code": 200}
