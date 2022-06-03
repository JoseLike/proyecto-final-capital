"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Project, Category
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token



api = Blueprint('api', __name__)



@api.route('/register', methods=["POST"])
def create_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    body_country = request.json.get("country")
    body_name = request.json.get("name")
    body_last_name = request.json.get("last_name")
    body_user_type = request.json.get("user_type")
    body_inversor_type = request.json.get("inversor_type")
    body_acepted_conditions= request.json.get("acepted_conditions")
    body_is_premium = request.json.get("is_premium")
    if body_email and body_password and body_country and body_name and body_user_type : 
        used_email = User.query.filter_by(email=body_email).first()
        if used_email :
            return jsonify({"created":False, "msg":"Email already in use"}), 400
        new_user = User(email = body_email, password = body_password, country=body_country, name=body_name, last_name=body_last_name, user_type=body_user_type, inversor_type=body_user_type, acepted_conditions=body_acepted_conditions, is_premium=body_is_premium)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"created":True, "user":new_user.serialize()}), 200
    else:
        return jsonify({"created":False, "msg":"Lack of Info"}), 400

@api.route('/login', methods=["POST"])
def login_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        user = User.query.filter_by(email=body_email).filter_by(password=body_password).first()
        if user:
            #access_token = create_access_token(identity=user.id)
            return jsonify({"logged":True, "user":user.serialize()}), 200
        else:

            return jsonify({"logged":False, "msg":"user not found"}), 404


@api.route("/crear-proyecto", methods=["POST"])
#@jwt_required()
def create_project():
    body_title=request.json.get("title")
    body_concept=request.json.get("concept")
    body_desired_capital=request.json.get("desired_capital")
    body_invested_capital=request.json.get("invested_capital")
    body_category=request.json.get("category")
    body_deadline=request.json.get("deadline")
    body_loans=request.json.get("loans")
    body_business_plan=request.json.get("business_plan")
    body_patent=request.json.get("patent")
    body_terms=request.json.get("terms")
    body_project_files=request.json.get("project_files")
    body_project_picture=request.json.get("project_picture")
    body_investment_capacity=request.json.get("investment_capacity")
    print(request.json)
    if body_title and body_concept and body_desired_capital and body_invested_capital and body_category and body_loans and body_business_plan and body_investment_capacity:
        new_project = Project(title = body_title, concept = body_concept, desired_capital = body_desired_capital, invested_capital = body_invested_capital, category_id = body_category, loans = body_loans, business_plan = body_business_plan, patent = body_patent, terms = body_terms, project_files= body_project_files, project_picture = body_project_picture, investment_capacity = body_investment_capacity)
        db.session.add(new_project)
        db.session.commit()
        return jsonify({"created":True, "project":new_project.serialize()}), 200
    else:
        return jsonify({"created":False, "msg":"Lack of Info"}), 400


@api.route("/category", methods=["GET"])
def get_all_category():
    cate = Category.query.all()
    cate_serialize = list(map(lambda x: x.serialize(), cate))
    return jsonify({"cate": cate_serialize}), 200