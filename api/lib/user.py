class User:
    def __init__(self, full_name, email, password, _id=None):
        self.id = _id
        self.full_name = full_name
        self.email = email
        self.password = password
    
    def __repr__(self):
        return f"User({self.id}, {self.full_name}, {self.email}, {self.password})"

    def __eq__(self, other):
        return self.__dict__ == other.__dict__