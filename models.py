# from app import DB as db

# class User(db.Model):
#     # Unique ID from users google account
#     googleId = db.Column(db.String(120), unique=True,
#                          nullable=False, primary_key=True)
#     # email = DB.Column(DB.String(120), unique=True, nullable=False)
#     # imageUrl = DB.Column(DB.String(520), nullable=True)
#     # givenName = DB.Column(DB.String(120), nullable=False)  # First name
#     # familyName = DB.Column(DB.String(120), nullable=False)  # Last name

#     # age = DB.Column(DB.Integer, nullable=True)
#     # gender = DB.Column(DB.String(1), nullable=True)
#     # weight = DB.Column(DB.Integer, nullable=True)
#     # height = DB.Column(DB.Integer, nullable=True)

#     def __repr__(self):
#         return '<User %r>' % self.googleId
