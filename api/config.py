import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # SQLAlchemy 1.4 no longer supports url strings that start with 'postgres'
    # (only 'postgresql') but heroku's postgres add-on automatically sets the
    # url in the hidden config vars to start with postgres.
    # so the connection uri must be updated here (for production)/
    SQLALCHEMY_DATABASE_URI = os.environ.get('POSTGRES_URL').replace("postgres://", "postgresql://") + '?options=endpoint%3Dep-super-recipe-a4vtgpyz-pooler'

    SQLALCHEMY_ECHO = True
