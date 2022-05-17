"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

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
    if body_email and body_password and body_pais and body_nombre :
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

@api.route('/login', methods=["GET"])
def login_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        user = User.query.filter_by(email=body_email).filter_by(password=body_password).first()
        if user:
            access_token = create_access_token(identity=user.id)
            return jsonify({"logged":True, "user":user.serialize(), "token":access_token}), 200
        else:
            return jsonify({"logged":False, "msg":"error"}), 400
    else:
        return jsonify({"created":False, "msg":"Lack info"}), 400