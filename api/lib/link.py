class Link:
    def __init__(self, id, tmdbId):
        self.id = id 
        self.tmdbId = tmdbId

    def __eq__(self, other):
        return self.__dict__ == other.__dict__

    def __repr__(self):
        return f"Link({self.id}, {self.tmdbId})"
    
