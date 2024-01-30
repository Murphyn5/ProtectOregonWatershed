from datetime import datetime
from app.models import db, environment, SCHEMA, Documentary
from sqlalchemy.sql import text

def seed_documentaries():

    documentary1 = Documentary(
        title = "A Testimony: Beaver Creek Residents Unite!",
        source = "Willow Kasner",
        description = "A story about Beaver Creek residents",
        link = "https://www.youtube.com/watch?v=zyBP1BHMEAg",
        created_at = datetime.utcnow(),
        updated_at = datetime.utcnow(),
    )

    documentary2 = Documentary(
        title = "Siletz Gorge to the Valley of the Giants",
        source = "Lincoln County Community Rights",
        description = "15 minute tour through our beautiful Siletz Gorge",
        link = "https://www.youtube.com/watch?v=RtF1gMBVm94",
        created_at = datetime.utcnow(),
        updated_at = datetime.utcnow(),
    )

    documentary3 = Documentary(
        title = "Valley of the Giants: Coast Range’s gift of intact Old Growth Forest",
        source = "Lincoln County Community Rights",
        description = "Tour through  the forest",
        link = "https://www.youtube.com/watch?v=e_ww0H0Xx10",
        created_at = datetime.utcnow(),
        updated_at = datetime.utcnow(),
    )

    documentary4 = Documentary(
        title = "Big Creek Tour 3 minutes on aerial spraying",
        source = "Lincoln County Community Rights1",
        description = "Newport water is from Big Creek- how much has been sprayed?",
        link = "https://www.youtube.com/watch?v=LQ3ccOwn054",
        created_at = datetime.utcnow(),
        updated_at = datetime.utcnow(),
    )

    documentary5 = Documentary(
        title = "Sample Documentary 1",
        source = "Sample Source 1",
        description = "A sample documentary about a fascinating topic.",
        link = "https://example.com/documentary1",
        created_at = datetime.utcnow(),
        updated_at = datetime.utcnow(),
    )

    documentary6 = Documentary(
        title = "Sample Documentary 1",
        source = "Sample Source 1",
        description = "A sample documentary about a fascinating topic.",
        link = "https://example.com/documentary1",
        created_at = datetime.utcnow(),
        updated_at = datetime.utcnow(),
    )

    documentary7 = Documentary(
        title = "Sample Documentary 1",
        source = "Sample Source 1",
        description = "A sample documentary about a fascinating topic.",
        link = "https://example.com/documentary1",
        created_at = datetime.utcnow(),
        updated_at = datetime.utcnow(),
    )

    documentary8 = Documentary(
        title = "Sample Documentary 1",
        source = "Sample Source 1",
        description = "A sample documentary about a fascinating topic.",
        link = "https://example.com/documentary1",
        created_at = datetime.utcnow(),
        updated_at = datetime.utcnow(),
    )

    documentary9 = Documentary(
        title = "Sample Documentary 1",
        source = "Sample Source 1",
        description = "A sample documentary about a fascinating topic.",
        link = "https://example.com/documentary1",
        created_at = datetime.utcnow(),
        updated_at = datetime.utcnow(),
    )


    # Add seed data to the database session
    db.session.add_all([documentary1, documentary2, documentary3, documentary4, documentary5, documentary6, documentary7, documentary8, documentary9])

    # Commit the changes to the database
    db.session.commit()

def undo_documentaries():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.documentaries RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM documentaries"))

    db.session.commit()
