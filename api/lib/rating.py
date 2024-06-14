class Rating:
    def __init__(self, userId, movieId, rating):
        self.userId = userId 
        self.movieId = movieId 
        self.rating = rating

    def __eq__(self, other):
        return self.__dict__ == other.__dict__

    def __repr__(self):
        return f"Rating({self.userId}, {self.movieId}, {self.rating})"
    