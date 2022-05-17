from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80),  nullable=False)
    is_premium = db.Column(db.Boolean(), nullable=False, default=False) 
    country = db.Column(db.String(80),  nullable=False)
    name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120))
    user_type = db.Column(db.Integer, db.ForeignKey('usertype.id'), nullable=False ) # debo definir lo que esta dentro de este objeto??
    investor_type = db.Column(db.Boolean(), nullable=False, default=False) 
    
    def serialize(self):        
        return {
                "id": self.id,
                "email": self.email,
            }
            
class Usertype(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_type = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    user_id = db.relationship('User', backref='usertype')