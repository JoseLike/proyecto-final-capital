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
    is_company = db.Column(db.Boolean(), default=False) 
    profile_picture = db.Column(db.String(120))
    user_longevity = db.Column(db.Date()) 
    inversor_type = db.Column(db.String(120), default=None) 
    acepted_conditions = db.Column(db.Boolean(),nullable=False, default=False)

    
    def serialize(self):        
                return {
                "id": self.id,
                "email": self.email,
                "is_premium":self.is_premium,
                "country":self.country,
                "name":self.name,
                "last_name":self.last_name,
                "user_type":self.user_type,
                "inversor_type":self.inversor_type,
                "acepted_conditions":self.acepted_conditions,
                "is_company":self.is_company,
                "profile_picture":self.profile_picture,
                "user_longevity":self.user_longevity

            }
            
class Usertype(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    user_id = db.relationship('User', backref='usertype')

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id= db.Column(db.Integer, db.ForeignKey('project.id'))
    #user_id

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    concept = db.Column(db.String(120), nullable=False) #saber cual es el maximo??
    desired_capital = db.Column(db.Integer, nullable=False)
    raised_capital = db.Column(db.Integer)
    invested_capital = db.Column(db.Integer)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    deadline= db.Column(db.Date)
    loans= db.Column(db.Integer, nullable=False)
    business_plan= db.Column(db.Text, nullable=False)
    patent= db.Column(db.Boolean(), nullable=False, default=False)
    terms= db.Column(db.Boolean(), nullable=False, default=False)
    project_files= db.Column(db.String())
    project_picture= db.Column(db.String())
    investment_capacity:(db.Integer)
    views= db.Column(db.Integer) 

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    category = db.relationship('Project', backref='category')

