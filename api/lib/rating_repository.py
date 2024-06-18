from lib.rating import Rating
import pandas as pd

class RatingRepository:
    def __init__(self, db):
        self.db = db

    def all_ratings(self):
        connection = self.db["ratings"]
        rows = connection.find()
        ratings = []
        for row in rows:
            rating = Rating(row["userId"], row["movieId"], row["rating"])
            ratings.append(rating)
        df = pd.DataFrame.from_records([rating.__dict__ for rating in ratings])
        return df
    
