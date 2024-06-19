from .movie_recommendations import find_similar_movies, create_matrix
from lib.rating_repository import RatingRepository
import pandas as pd
from lib.database_connection import get_db
import time

def recommend_movies_for_user(user_id, X, user_mapper, movie_mapper, movie_inv_mapper, k=10):
    print('1')
    db = get_db()
    print('2')
    links = db['links']
    print('3')
    rating_repo = RatingRepository(db)
    print('4')
    all_ratings = rating_repo.all_ratings() #slow here
    print('5')
    ratings_df = all_ratings[all_ratings['userId'] == user_id]
    print('6')
    top_rated_df = ratings_df[ratings_df['rating'] == 5]
    print('7')
    most_recent_top_5 = top_rated_df.head(1) #Reduced to find similar movies to just 1, to improve speed (for now)
    print('8')
    most_recent_top_5_list = most_recent_top_5['movieId'].tolist()
    print(most_recent_top_5_list, "MOST RECENT ")

    movies_list = []
    for movie in most_recent_top_5_list:
        found_movie = links.find_one({"movieId": movie})
        tmdb_found_movie_id = found_movie['tmdbId']
        
        # Measure time for find_similar_movies
        start_time = time.time()
        similar_ids = find_similar_movies(tmdb_found_movie_id, db, movie_mapper, movie_inv_mapper, X, k=10)
        end_time = time.time()
        
        execution_time = end_time - start_time
        print(f"Time taken for find_similar_movies for movieId {movie}: {execution_time} seconds")
        
        movies_list.append(similar_ids)
    
    flattened_list = [item for sublist in movies_list for item in sublist]
    print(flattened_list)
    return flattened_list

# TODO Refactor to include cases where no 5 star ratings
# TODO Think about the case when zero ratings. Do we want 
# to recommend based off less than 4 star rating
# TODO ORDER flattened_list MOVIE_IDs in order of vote_average
# TODO WRITE logic to make sure flattened_list doesn't include duplicate movie_ids
