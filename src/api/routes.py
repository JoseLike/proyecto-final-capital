"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Project, Category, Favorites, Mensajes
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
import cloudinary
import cloudinary.uploader
import stripe
import os
import datetime



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
        new_user = User(email = body_email, password = body_password, country=body_country, name=body_name, last_name=body_last_name, user_type=body_user_type, inversor_type=body_user_type, acepted_conditions=body_acepted_conditions, is_premium=body_is_premium, longevity= datetime.date.today())
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
            access_token = create_access_token(identity=user.id)
            return jsonify({"logged":True, "user":user.serialize(), "token":access_token}), 200
        else:

            return jsonify({"logged":False, "msg":"user not found"}), 404



@api.route("/crear-proyecto", methods=["POST"])
@jwt_required()
def create_project():
    user_id = get_jwt_identity()
    user= User.query.get(user_id)
    print(user_id)
    print(user)
    if user: 
        body_title=request.form.get("title")
        body_concept=request.form.get("concept")
        body_desired_capital=request.form.get("desired_capital")
        body_invested_capital=request.form.get("invested_capital")
        body_category=request.form.get("category")
        body_deadline=request.form.get("deadline")
        body_loans=request.form.get("loans")
        body_business_plan=request.form.get("business_plan")
        body_patent=request.form.get("patent")
        body_terms=request.form.get("terms")
        body_investment_capacity=request.form.get("investment_capacity")
        body_project_files = ""
        if "project_files" in request.files:
            result = cloudinary.uploader.upload(request.files['project_files'])
            body_project_files = result['secure_url']
        body_project_picture = ""
        if "project_picture" in request.files:
            result = cloudinary.uploader.upload(request.files['project_picture'])
            body_project_picture = result['secure_url']
        if body_title and body_concept and body_desired_capital and body_invested_capital and body_category and body_loans and body_business_plan and body_investment_capacity:
            body_terms = True if body_terms == "true" else False
            body_patent = True if body_patent == "true" else False
            new_project = Project(user_id=user.id,title = body_title, concept = body_concept, desired_capital = body_desired_capital, invested_capital = body_invested_capital, category_id = body_category, loans = body_loans, business_plan = body_business_plan, patent = body_patent, terms = body_terms, project_files= body_project_files, project_picture = body_project_picture, investment_capacity = body_investment_capacity, deadline = body_deadline if body_deadline != "null" else None)
            db.session.add(new_project)
            db.session.commit()
            return jsonify({"created":True, "project":new_project.serialize()}), 200
        else:
            return jsonify({"created":False, "msg":"Lack of Info"}), 400
    else:
        return jsonify({"created":False, "msg":"Lack of Info"}), 400
        





@api.route("/category", methods=["GET"])
def get_all_category():
    cate = Category.query.all()
    cate_serialize = list(map(lambda x: x.serialize(), cate))
    return jsonify({"cate": cate_serialize}), 200


@api.route('/edituser/<int:user_id>', methods=["PUT"])
def edit_user(user_id):
    body_email = request.json.get("email")
    body_name = request.json.get("name")
    body_last_name = request.json.get("last_name")
    user = User.query.get(user_id)
    if user:
        user.email = body_email
        user.name = body_name
        user.last_name = body_last_name
        db.session.commit()
        return jsonify({"modified":True, "user":user.serialize()}), 200
    else:
        return jsonify({"modified":False, "msg":"Lack of Info"}), 400

@api.route('/editpassword', methods=["PUT"])
@jwt_required()
def edit_pass_user():
    body_pass = request.json.get("password")
    user = get_jwt_identity()
    if user:
        user.password = body_password
        db.session.commit()
        return jsonify({"modified":True, "user":user.serialize()}), 200
    else:
        return jsonify({"modified":False, "msg":"Lack of Info"}), 400

@api.route('/userprojects/<int:key>', methods=["GET"])
#@jwt_required()
def get_user_projects(key):
    #current_user = get_jwt_identity()
    projects = User.query.get(key).projects
    return jsonify({"response":list(map(lambda project : project.serialize(), projects))}),200

@api.route('/project/<int:key>', methods=["GET"])
def get_single_project(key):
    projects = Project.query.get(key)
    return jsonify({"response":projects.serialize()}),200

@api.route('/stadistics/<int:user_id>', methods=["GET"])
def get_user_stadistics(user_id):
    #current_user = get_jwt_identity()
    user = User.query.get(user_id)
    projects = Project.query.filter_by(user=user).all()
    capital = 0
    for project in projects:
        capital = capital + project.desired_capital
    print(capital)
    data=[]

    return jsonify({"response":user.serialize()}),200

@api.route("/buscar-proyecto", methods=["POST"])
#@jwt_required()
def get_all_projects():
    body_category = request.json.get("category_id")
    body_desired_capital = request.json.get("desired_capital")
    query = []
    if body_category is not None and body_category != "" :
        query.append(Project.category_id == int(body_category))
    if body_desired_capital is not None and body_desired_capital != "" :
        query.append(Project.desired_capital <= int(body_desired_capital))
    projects = Project.query.filter(*query)
    projects_serialize = list(map(lambda x: x.serialize(), projects))
    return jsonify({"projects": projects_serialize}), 200



@api.route('upload', methods=["POST"])
def handle_upload():

    result = cloudinary.uploader.upload(request.files['project_picture'])
    response_body = {
        "message": "hello world",
        "image_url": result['secure_url']
    }
    print(request.files['project_picture'])
    print(result['secure_url'])


    return jsonify(response_body),200
  
@api.route("/favoritos", methods=["POST"])
#@jwt_required()
def add_favs():
    body_userid=request.json.get("user_id")
    body_projectid=request.json.get("project_id")
    if body_userid and body_projectid:
        new_favs = Favorites(user_id=body_userid,project_id = body_projectid)
        db.session.add(new_favs)
        db.session.commit()
        return jsonify({"added":True, "favorite":new_favs.serialize()}), 200
    else:
        return jsonify({"added":False, "msg":"Lack of Info"}), 400

@api.route('/delete/favs/<int:projectid>', methods=['DELETE'])
#@jwt_required()
def del_fav(projectid):
    del_fav= Favorites.query.get(projectid)
    db.session.delete(del_fav)
    db.session.commit()
    return jsonify({"deleted":True}),200

@api.route("/investment", methods=["POST"])
#@jwt_required()
def payment():
    try:
        data = request.json
        amount = int(float(data['amount'])*100)
        stripe.api_key = os.getenv("STRIPE_KEY")
        charge = stripe.Charge.create(
        amount = amount,
        currency = "eur",
        source = "tok_amex", # obtained with Stripe.js
        description = data['description'],
        )
        print(charge)
        return "Su pago ha sido aceptado"
    except stripe.error.StripeError as e:
        print(e)
        return "error"


@api.route("/send-message", methods=["POST"])
#@jwt_required()
def create_message():
    body_sender_id=request.json.get("sender_id")
    body_receiver_id=request.json.get("receiver_id")
    body_text=request.json.get("text")
    body_project_id=request.json.get("project_id")
    body_subject=request.json.get("subject")
    body_readed=request.json.get("readed")
    
    if body_sender_id and body_project_id and body_receiver_id and body_text and body_subject:
        new_message = Mensajes(sender_id=body_sender_id,receiver_id = body_receiver_id, text = body_text, readed = body_readed, subject=body_subject, project_id=body_project_id)
        db.session.add(new_message)
        db.session.commit()
        return jsonify({"created":True, "message":new_message.serialize()}), 200
    else:
        return jsonify({"created":False, "msg":"Lack of Info"}), 400

@api.route('/message-readed/<int:messageid>', methods=["PUT"])
@jwt_required()
def set_message_readed(messageid):
    message = Mensajes.query.get(messageid)
    if message:
        message.readed = True
        db.session.commit()
        return jsonify({"modified":True, "message":message.serialize()}), 200
    else:
        return jsonify({"modified":False, "msg":"Lack of Info"}), 400

@api.route('/delete/message/<int:messageid>', methods=['DELETE'])
#@jwt_required()
def del_message(messageid):
    del_message= Mensajes.query.get(messageid)
    db.session.delete(del_message)
    db.session.commit()
    return jsonify({"deleted":True, "msg":del_message.serialize()}),200


@api.route('investor/<int:project_id>', methods=["PUT"])
def update_raised_capital(project_id):
    body_raised = request.json.get("raised_capital")
    project = Project.query.get(project_id)
    if project:
        project.raised_capital= float(project.raised_capital) + float(body_raised)
        db.session.commit()
        print(project.raised_capital)
        return jsonify({"modified":True, "project":project.serialize()}), 200
    else:
        return jsonify({"modified":False, "msg":"Lack of Info"}), 400


@api.route('subir', methods=["PUT"])
@jwt_required()
def handle_subir():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    result = cloudinary.uploader.upload(request.files['profile_picture'])
    print(result['secure_url'])
    user.profile_picture = result['secure_url']
    db.session.commit()
    return jsonify({"updated": True}),200


@api.route('/paypremium', methods=["PUT"])
@jwt_required()
def pay_premium():
    current_user = get_jwt_identity()
    print(current_user)
    user = User.query.get(current_user)
    if user:
        user.is_premium = True
        db.session.commit()
        return jsonify({"modified":True, "user":user.serialize()}), 200
    else:
        return jsonify({"modified":False, "msg":"Lack of Info"}), 400

