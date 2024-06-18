class User:
    def __init__(self, full_name, email, password, _id=None, userId =None, userRating = [], avatar = ""):
        self.id = _id
        self.full_name = full_name
        self.email = email
        self.password = password
        self.userId = userId
        self.userRating = userRating
        self.avatar = avatar


    
    def __repr__(self):
        return f"User({self.id}, {self.full_name}, {self.email}, {self.password}, {self.userId}, {self.avatar}, {self.userRating})"

    def __eq__(self, other):
        return self.__dict__ == other.__dict__
    