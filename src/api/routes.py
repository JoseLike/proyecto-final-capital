"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Project
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity

api = Blueprint('api', __name__)



@api.route('/register', methods=["POST"])
def create_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    body_country = request.json.get("country")
    body_name = request.json.get("name")
    body_last_name = request.json.get("last_name")
    body_user_type = request.json.get("user_type")
    body_inversor_type = request.json.geet("inversor_type")
    if body_email and body_password and body_country and body_name and body_user_type : 
        #es obligatorio investor_type??
        #todos los campos obligatorios
        used_email = User.query.filter_by(email=body_email).first()
        if used_email :
             return jsonify({"created":False, "msg":"Email already in use"}), 400
        new_user = User(email = body_email, password = body_password, is_active=False)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"created":True, "user":new_user.serialize()}), 200
    else:
        return jsonify({"created":False, "msg":"Lack of Info"}), 400
#es necesario llamar al token, para no pasar por login!!??

@api.route('/login', methods=["POST"])
def login_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        user = User.query.filter_by(email=body_email).filter_by(password=body_password).first()
        if user:
            access_token = create_access_token(identity=user.id)
            return jsonify({"logged":True, "user":user.serialize(), "token":access_token}), 200
        else:
            return jsonify({"logged":False, "msg":"user not found"}), 404


@api.route("/category", methods=["GET"])
def get_all_category():
    cate = Category.query.all()
    cate_serialize = list(map(lambda x: x.serialize(), cate))
    return jsonify({"cate": cate_serialize}), 200

@api.route("/bucar-proyecto", methods=["GET"])
def get_all_projects():
    projects = Projects.query.all()
    projects_serialize = list(map(lambda x: x.serialize(), projects))
    return jsonify({"projects": projects_serialize}), 200