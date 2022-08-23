from typing import Optional
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
GENERIC_IMAGE = 'https://www.gannett-cdn.com/-mm-/333c1271c2393e4d5375c5f38ce5fedd5ad275a2/c=0-122-2400-1478/local/-/media/2018/02/20/FortCollins/FortCollins/636547403869424188-FTC0220-StreetDogCoalition001.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp'

class Pet(db.Model):
    ''' list of pets '''
    __tablename__ = 'pets'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.Text, nullable=False)
    species = db.Column(db.Text, nullable = False)
    photo_address = db.Column(db.Text)
    age = db.Columndb.Column(db.Integer)
    notes = db.Column(db.Text)
    availability = db.Column(db.Boolean, nullable=False, default=True)
    def image_url(self):
        return self.photo_address or GENERIC_IMAGE

def connect_db(app):
    """ connects app to models database"""
    db.app = app
    db.init_app(app)