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
    longevity = db.Column(db.Date()) 
    inversor_type = db.Column(db.String(120), default=None) 
    acepted_conditions = db.Column(db.Boolean(),nullable=False, default=False)
    projects = db.relationship('Project', backref='user') 
    favorites = db.relationship('Favorites', backref='user')
    


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
            "longevity":self.longevity,
            "favorites":list(map(lambda favorite: favorite.serialize(),self.favorites)),
            "sended_messages":list(map(lambda message: message.serialize(),self.enviados)),
            "received_messages":list(map(lambda message: message.serialize(),self.recibidos))        
        }
            
class Usertype(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    user_id = db.relationship('User', backref='usertype')

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    project_id= db.Column(db.Integer, db.ForeignKey('project.id'))
    
    def serialize(self):        
                return {
                "id": self.id,
                "user_id": self.user_id,
                "project_id": self.project_id,
            }

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    title = db.Column(db.String(80), nullable=False)
    concept = db.Column(db.String(120), nullable=False) 
    desired_capital = db.Column(db.Integer, nullable=False)
    raised_capital = db.Column(db.Integer, default=0)
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
            "missing_capital":self.desired_capital-self.invested_capital,
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
            "user":self.user.serialize()
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    def serialize(self):
        return{
        "id": self.id,
        "name": self.name
        }

class Mensajes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id=project_id= db.Column(db.Integer, db.ForeignKey("project.id"))
    sender_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    receiver_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    text= db.Column(db.Text, nullable=False)
    subject = db.Column(db.String(120), nullable=False)
    readed=db.Column(db.Boolean(), nullable=False, default=False)
    sender = db.relationship('User',foreign_keys=[sender_id], backref="enviados")
    receiver = db.relationship('User',foreign_keys=[receiver_id], backref="recibidos")
    def serialize(self):
        return{
        "id": self.id,
        "project_id":self.project_id,
        "emisor": self.sender_id,
        "subject":self.subject,
        "receptor": self.receiver_id,
        "text":self.text,
        "readed":self.readed
        }

