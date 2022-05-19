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
    user_type = db.Column(db.Integer, db.ForeignKey('usertype.id'), nullable=False ) 
    investor_type = db.Column(db.Boolean(), nullable=False, default=False) 
    
    def serialize(self):        
        return {
                "id": self.id,
                "email": self.email,
            }
            
class Usertype(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    user_id = db.relationship('User', backref='usertype')

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    concept = db.Column(db.String(120), nullable=False) #saber cual es el maximo??
    desired_capital = db.Column(db.Integer, nullable=False)
    raised_capital = db.Column(db.Integer)
    invested_capital = db.Column(db.Integer)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    #los espacios que falten por Jose

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    category = db.relationship('Project', backref='category')

