from lib.rating import Rating
import pandas as pd
import time

class RatingRepository:
    def __init__(self, db):
        self.db = db

    def all_ratings(self):
        connection = self.db["ratings"]
        rows = connection.find()
        ratings = []
        for row in rows:
            rating = Rating(row["userId"], row["movieId"], row["rating"], row["timestamp"])
            ratings.append(rating)
        df = pd.DataFrame.from_records([rating.__dict__ for rating in ratings])
        return df

    def add_rating(self, userId, movieId, rating):
        connection = self.db["ratings"]
        rating = Rating(userId, movieId, rating, time.time()).__dict__
        connection.insert_one(rating)

    def update_rating(self, rating, new_rating):
        connection = self.db["ratings"]
        connection.update_one(rating, new_rating)
