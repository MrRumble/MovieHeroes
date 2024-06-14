from lib.link import Link
import pandas as pd

class LinkRepository:
    def __init__(self, db):
        self.db = db

    def to_tmdb_id(self, id):
        connection = self.db["links"]
        rows = connection.find()
        links = []
        for row in rows:
            link = Link(row["movieId"], row["tmdbId"])
            links.append(link)
        df = pd.DataFrame.from_records([link.__dict__ for link in links])
        tmdb_id = df.loc[df['id'] == id, 'tmdbId'].item()
        return tmdb_id
        
    def to_movieId(self, id):
        connection = self.db["links"]
        rows = connection.find()
        links = []
        for row in rows:
            link = Link(row["movieId"], row["tmdbId"])
            links.append(link)
        df = pd.DataFrame.from_records([link.__dict__ for link in links])
        movie_id = df.loc[df['tmdbId'] == id, 'id'].item()
        return movie_id 
    