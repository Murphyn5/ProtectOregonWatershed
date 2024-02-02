from datetime import datetime
from app.models import db, environment, SCHEMA, CommunityEvent
from sqlalchemy.sql import text

def seed_community_events():

    community_event1 = CommunityEvent(
        title="PUBLIC PROTEST",
        days="Saturdays",
        dates="",
        times="11:00 AM to 1:00 PM",
        location="WALDPORT Hwy 101 and 34",
        description="Our chance to make some noise and build community support!",
        link="",
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow(),
    )

    community_event2 = CommunityEvent(
        title="Drinking Water Protection",
        days="Tuesday",
        dates="Feb. 6, 2024",
        times="12:00 pm to 4:30 pm",
        location="OCCC Newport Campus",
        description="These workshops are designed for communities to collaborate with fellow drinking water providers, local governments, conservation practitioners, land managers, and funding partners. In-person and virtual options available.",
        link="https://www.oregon.gov/deq/wq/programs/pages/water-protection-workshops.aspx",
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow(),
    )

    community_event3 = CommunityEvent(
        title="Caring For Our Water",
        days="Wednesdays",
        dates="Feb 28, Mar 6, Mar 13, Mar 20",
        times="6-7:30 pm",
        location="OCCC Waldport Campus",
        description="Drinking water comes from our faucets but how does it get there? When we look at water, it looks clean, but is it? Come join us for a 4 session class and find answers to these water related questions.  Let’s look at the how our daily choices and the corporate world impacts the around water.",
        link="https://www.oregon.gov/deq/wq/programs/pages/water-protection-workshops.aspx",
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow(),
    )


    # Add seed data to the database session
    db.session.add_all([community_event1, community_event2, community_event3])

    # Commit the changes to the database
    db.session.commit()

def undo_community_events():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.community_events RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM community_events"))

    db.session.commit()
from app.models import db, Community_Event, environment, SCHEMA
from sqlalchemy.sql import text

def seed_community_events():
    event1 = Community_Event(
        id = 1,
        dates = "SATURDAYS",
        times = "11:00 AM",
        location = "Location: WALDPORT Hwy 101 and 34",
        title = "Protect Oregon Watersheds",
        description = "Our chance to make some noise and build community support!"
    )
    event2 = Community_Event(
        id = 2,
        dates = "Tuesday",
        times = "Feb. 6, 2024",
        location = "Location: OCCC Newport Campus",
        title = "Drinking Water Protection",
        description = "These workshops are designed for communities to collaborate with fellow drinking water providers, local governments, conservation practitioners, land managers, and funding partners. In-person and virtual options available."
    )
    event3 = Community_Event(
        id = 3,
        dates = "Wednesdays",
        times = "6-7:30 PM",
        location = "Location: OCCC Waldport Campus",
        title = "Caring For Our Water",
        description = "Drinking water comes from our faucets but how does it get there? When we look at water, it looks clean, but is it? Come join us for a 4 session class and find answers to these water related questions.  Let’s look at the how our daily choices and the corporate world impacts the around water."
    )

    all_community_events = [event1, event2, event3]
    _ = [db.session.add(event) for event in all_community_events]
    db.session.commit()

def undo_community_events():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.community_events RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM community_events"))
        
    db.session.commit()