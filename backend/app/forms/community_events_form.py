from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Length


class CommunityEventForm(FlaskForm):
    dates = StringField("Dates", validators=[DataRequired(), Length(max=255)])
    times = StringField("Times", validators=[DataRequired(), Length(max=255)])
    location = StringField("Location", validators=[DataRequired(), Length(max=255)])
    title = StringField("Title", validators=[DataRequired(), Length(max=255)])
    description = TextAreaField(
        "Description", validators=[DataRequired(), Length(max=1000)]
    )
