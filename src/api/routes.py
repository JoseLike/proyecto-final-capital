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
    body_username = request.json.get("username")
    body_pais = request.json.get("pais")
    body_nombre = request.json.get("nombre")
    # pendiente de saber como es el is_premium??? 
    if body_email and body_password:
        new_user = User(email = body_email, password = body_password, is_active=False)
        # validacion de cuenta existente???
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