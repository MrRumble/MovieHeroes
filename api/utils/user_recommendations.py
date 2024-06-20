from .movie_recommendations import find_similar_movies, create_matrix
from lib.rating_repository import RatingRepository
import pandas as pd
from lib.database_connection import get_db
import time

def recommend_movies_for_user(user_id, X, user_mapper, movie_mapper, movie_inv_mapper, k=10):
    
    db = get_db()

    links = db['links']

    rating_repo = RatingRepository(db)

    all_ratings = rating_repo.all_ratings() #slow here

    ratings_df = all_ratings[all_ratings['userId'] == user_id]

    if ratings_df.empty: #This is for the case when the user has not rated any films yet
        return []

    top_rated_df = ratings_df[(ratings_df['rating'] == 5) | (ratings_df['rating'] == 4)]

    if top_rated_df.empty: #This is for the case when the user has rated films, but none at 4 or 5 star.
        return []

    most_recent_top_5 = top_rated_df.head(5) #Reduced to find similar movies to just 1, to improve speed (for now)

    most_recent_top_5_list = most_recent_top_5['movieId'].tolist()

    movies_set = set()
    for movie in most_recent_top_5_list:
        found_movie = links.find_one({"movieId": movie})
        tmdb_found_movie_id = found_movie['tmdbId']
        
        # Measure time for find_similar_movies
        start_time = time.time()
        similar_ids = find_similar_movies(tmdb_found_movie_id, db, movie_mapper, movie_inv_mapper, X, k=10)
        end_time = time.time()
        
        execution_time = end_time - start_time
        print(f"Time taken for find_similar_movies for movieId {movie}: {execution_time} seconds")
        

    
        movies_set.update(similar_ids)
    return list(movies_set)



# TODO ORDER flattened_list MOVIE_IDs in order of vote_average

