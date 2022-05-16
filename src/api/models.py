from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Investors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80),  nullable=False)
    is_premium = db.Column(db.Boolean(), nullable=False)
    pais = db.Column(db.String(80),  nullable=False)
    nombre = db.Column(db.String(120))

    def __repr__(self):
        return f'<Investors {self.email}>'
    
    def serialize(self):        
        return {
                "id": self.id,
                "email": self.email,
                # do not serialize the password, its a security breach
            }

class Entrepreneurs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80),  nullable=False)
    is_premium = db.Column(db.Boolean(), nullable=False)
    pais = db.Column(db.String(80),  nullable=False)
    nombre = db.Column(db.String(120))

    def __repr__(self):
        return f'<Entrepreneurs {self.email}>'

    def serialize(self):        
        return {
                "id": self.id,
                "email": self.email,
                # do not serialize the password, its a security breach
            }

class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80),  nullable=False)
    pais = db.Column(db.String(80),  nullable=False)
    nombre = db.Column(db.String(120))

    def __repr__(self):
        return f'<Admin {self.email}>'

    def serialize(self):        
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
