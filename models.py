'''
database table models
'''
# pylint: disable=E1101, C0413, W1508, R0903, W0603

from app import DB
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class User(DB.Model):
    '''
    User table definition
    '''
    __tablename__ = 'user'
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


class Social(DB.Model):
    '''
    Social table definition
    '''
    __tablename__ = 'social'
    
    # SQLAlchemy ORM requires a PK, can be "bypassed" but one column for the ORM must 
    # behave like a PK: 
    # https://docs.sqlalchemy.org/en/13/faq/ormconfiguration.html#how-do-i-map-a-table-that-has-no-primary-key
    
    # The upside is that SQLAlchemy automatically turns on autoincrement, so we can ignore the PK entirely 
    # to try establish a relationship with the "users" table
    post_id=DB.Column(DB.Integer, unique=True, nullable=False, primary_key=True)
    # Unique ID from users google account
    googleId = DB.Column(DB.String(120), ForeignKey('user.googleId'))
    # Automatically made to null values in db
    username = DB.Column(DB.String(300), unique=False, nullable=True)
    url = DB.Column(DB.String(300), unique=False, nullable=True)
    post = DB.Column(DB.String(300), unique=False, nullable=True)
    date = DB.Column(DB.DateTime, unique=False, nullable=True)
    
    def __repr__(self):
        return '<Social %r>' % self.googleId

class FavoriteWorkout(DB.Model):
    __tablename__ = 'favoriteworkout'
    workout_id=DB.Column(DB.Integer, unique=True, nullable=False, primary_key=True)
    googleId = DB.Column(DB.String(120), ForeignKey('user.googleId'))
    name = DB.Column(DB.String(300), unique=True, nullable=False)
    desc = DB.Column(DB.String(500), unique=True, nullable=False)
    muscle_group = DB.Column(DB.String(100), unique=True, nullable=False)
    equipment_name = DB.Column(DB.String(120), unique=True, nullable=False)
    def __repr__(self):
        return '<FavoriteWorkout %r>' % self.googleId

class FavoriteMeal(DB.Model):
    __tablename__ = 'favoritemeal'
    meal_id=DB.Column(DB.Integer, unique=True, nullable=False, primary_key=True)
    googleId = DB.Column(DB.String(120), ForeignKey('user.googleId'))
    link = DB.Column(DB.String(500), unique=True, nullable=False)
    image = DB.Column(DB.String(500), unique=True, nullable=False)
    label = DB.Column(DB.String(500), unique=True, nullable=False)
    def __repr__(self):
        return '<FavoriteMeal %r>' % self.googleId