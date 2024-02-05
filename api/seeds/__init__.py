from flask.cli import AppGroup
from api.seeds.users import seed_users, undo_users
from api.seeds.noaps import seed_noaps, undo_noaps
from api.seeds.articles import seed_articles, undo_articles
from api.seeds.article_images import seed_article_images, undo_article_images
from api.seeds.meetings import seed_meetings, undo_meetings
from api.seeds.meeting_images import seed_meeting_images, undo_meeting_images
from api.seeds.community_events import seed_community_events, undo_community_events
from api.seeds.community_event_images import seed_community_event_images, undo_community_event_images
from api.seeds.documentaries import seed_documentaries, undo_documentaries
from api.seeds.documentary_images import seed_documentary_images, undo_documentary_images

from api.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_documentary_images()
        undo_meeting_images()
        undo_community_event_images()
        undo_article_images()
        undo_users()
        undo_noaps()
        undo_articles()
        undo_meetings()
        undo_community_events()
        undo_documentaries()
    seed_users()
    seed_noaps()
    seed_articles()
    seed_meetings()
    seed_community_events()
    seed_documentaries()
    seed_documentary_images()
    seed_article_images()
    seed_community_event_images()
    seed_meeting_images()
    # Add other seed functions here


# Creates the `flask seed undo` commandd
@seed_commands.command('undo')
def undo():
    undo_documentary_images()
    undo_meeting_images()
    undo_community_event_images()
    undo_article_images()
    undo_users()
    undo_noaps()
    undo_articles()
    undo_meetings()
    undo_community_events()
    undo_documentaries()
    # Add other undo functions here
