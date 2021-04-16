from app import DB

class User(DB.Model):
    # Unique ID from users google account
    googleId = DB.Column(DB.String(120), unique=True,
                         nullable=False, primary_key=True)
    email = DB.Column(DB.String(120), unique=True, nullable=False)
    imageUrl = DB.Column(DB.String(250), nullable=True)
    givenName = DB.Column(DB.String(120), nullable=False)  # First name
    familyName = DB.Column(DB.String(120), nullable=False)  # Last name
    # Automatically made to null values in db
    age = DB.Column(DB.String(4), nullable=True)
    gender = DB.Column(DB.String(15), nullable=True)
    weight = DB.Column(DB.String(4), nullable=True)
    height = DB.Column(DB.String(4), nullable=True)
    
    def __repr__(self):
        return '<User %r>' % self.googleId

class Social(DB.models):
    # Unique ID from users google account
    googleId = DB.Column(DB.String(120), unique=True,
                         nullable=False, primary_key=True)
    email = DB.Column(DB.String(120), unique=True, nullable=False)
    imageUrl = DB.Column(DB.String(250), nullable=True)
    givenName = DB.Column(DB.String(120), nullable=False)  # First name
    familyName = DB.Column(DB.String(120), nullable=False)  # Last name
    # Automatically made to null values in db
    post = DB.Column(DB.String(300), unique=False, nullable=True)
    date = DB.Column(DB.DateTime, unique=False, nullable=True)
    
    def __repr__(self):
        return '<User %r>' % self.googleId
