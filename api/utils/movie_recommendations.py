"""
Find similar movies using KNN
"""
import pandas as pd
from utils.create_matrix import create_matrix
from sklearn.neighbors import NearestNeighbors
from lib.movie_repository import MovieRepository
from lib.movie import Movie 
from lib.database_connection import get_db
from lib.link_repository import LinkRepository


def find_similar_movies(movie_id, X, k, metric='cosine', show_distance=False):

	neighbour_ids = []

	db = get_db()

	movie_id = LinkRepository(db).to_movieId(movie_id)

	movie_ind = movie_mapper[movie_id]
	movie_vec = X[movie_ind]
	k+=1
	kNN = NearestNeighbors(n_neighbors=k, algorithm="brute", metric=metric)
	kNN.fit(X)
	movie_vec = movie_vec.reshape(1,-1)
	neighbour = kNN.kneighbors(movie_vec, return_distance=show_distance)
	for i in range(0,k):
		n = neighbour.item(i)
		neighbour_ids.append(LinkRepository(db).to_tmdb_id(movie_inv_mapper[n]))
	neighbour_ids.pop(0)
	return neighbour_ids

# db = get_db()
# movies_db = MovieRepository(db)
# all_movies = movies_db.find_all()
# movies = pd.DataFrame.from_records([movie.__dict__ for movie in all_movies])
# links = pd.read_csv("../ml-latest-small/links.csv") 
# ratings = pd.read_csv("../ml-latest-small/ratings.csv")

# X, user_mapper, movie_mapper, user_inv_mapper, movie_inv_mapper = create_matrix(ratings)



# movie_titles = dict(zip(movies['movieId'], movies['title']))


# movie_id = links.loc[links['tmdbId'] == 238, 'movieId'].item()


# similar_ids = find_similar_movies(movie_id, X, k=10)
# movie_title = movie_titles[movie_id]

# print(f"Since you watched {movie_title}")
# for i in similar_ids:
# 	print(movie_titles[i])



