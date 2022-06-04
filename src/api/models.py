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
    #IMAGEN DE USUARIO??

    
    def serialize(self):        
        return {
                "id": self.id,
                "email": self.email,
            }
            
class Usertype(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    user_id = db.relationship('User', backref='usertype')

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    project_id= db.Column(db.Integer, db.ForeignKey('project.id'))
    #llave foranea de title, concept, user_id

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    title = db.Column(db.String(80), nullable=False)
    concept = db.Column(db.String(120), nullable=False) 
    desired_capital = db.Column(db.Integer, nullable=False)
    raised_capital = db.Column(db.Integer)
    invested_capital = db.Column(db.Integer)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    category = db.relationship("Category")
    deadline= db.Column(db.Date)
    loans= db.Column(db.Integer, nullable=False)
    business_plan= db.Column(db.Text, nullable=False)
    patent= db.Column(db.Boolean, nullable=False, default=False)
    terms= db.Column(db.Boolean, nullable=False, default=False)
    project_files= db.Column(db.String(120))
    project_picture= db.Column(db.String(120))
    investment_capacity=db.Column(db.String(120))
    views= db.Column(db.Integer) 

    def serialize(self): 
        return{
            "id": self.id,
            "title": self.title,
            "concept": self.concept,
            "desired_capital": self.desired_capital,
            "raised_capital": self.raised_capital,
            "invested_capital":self.invested_capital,
            "category_id":self.category_id,
            "deadline":self.deadline,
            "loans":self.loans,
            "business_plan":self.business_plan,
            "patent":self.patent,
            "terms":self.terms,
            "project_files":self.project_files,
            "project_picture":self.project_picture,
            "investment_capacity":self.investment_capacity,
            "views":self.views,
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    
    def serialize(self):
        return{
        "id": self.id,
        "name": self.name
        }
