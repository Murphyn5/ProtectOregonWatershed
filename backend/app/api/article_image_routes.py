from flask import Blueprint, jsonify, request
from app.models import db, Article_Image, Article
from .auth_routes import validation_errors_to_error_messages
from flask_login import current_user, login_required

image_routes = Blueprint('image', __name__)


# DELETE AN IMAGE
@image_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def images_delete(id):
    image = Article_Image.query.get(id)
    if not image:
        return {
            "errors": "Article Image couldn't be found",
            "status_code": 404
        }, 404

    db.session.delete(image)
    db.session.commit()
    return {
        "message": "Successfully deleted",
        "status_code": 200
    }

# GET IMAGE BY CURRENT ID
@image_routes.route('/<int:id>')
def get_image_details(id):
    image = Article_Image.query.get(id).to_dict()
    if not image:
        return {
            "errors": "Image couldn't be found",
            "status_code": 404
        }, 404
    return image
