import time
from lib.link import Link
import pandas as pd

class LinkRepository:
    def __init__(self, db):
        self.db = db

    def to_tmdb_id(self, id, link_db):
        rows = link_db.find_one({"movieId": int(id)})
        # for row in rows:
        #     if int(row["movieId"]) == id:
        return rows["tmdbId"]
        
    def to_movieId(self, id, link_db):
        rows = link_db.find_one({"tmdbId": int(id)})
        # for row in rows:
        #     if int(row["movieId"]) == id:
        return rows["movieId"]
    