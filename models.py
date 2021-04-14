from app import DB

class User(DB.Model):
    googleId=DB.Column(DB.String, unique=True, nullable=False,primary_key=True) # Unique ID from users google account
    email = DB.Column(DB.String(120), unique=True, nullable=False)
    imageUrl=DB.Column(DB.String(120),nullable=True)
    givenName=DB.Column(DB.String(120),nullable=False) # First name
    familyName=DB.Column(DB.String(120),nullable=False) # Last name
    
    