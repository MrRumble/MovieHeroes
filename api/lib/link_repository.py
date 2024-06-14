import time
from lib.link import Link
import pandas as pd

class LinkRepository:
    def __init__(self, db):
        self.db = db

    def to_tmdb_id(self, id, link_db):
        rows = link_db.find()
        for row in rows:
            if int(row["movieId"]) == id:
                return row["tmdbId"]
        
    def to_movieId(self, id, link_db):
        rows = link_db.find()
        for row in rows:
            if int(row["tmdbId"]) == id:
                return row["movieId"]
    