from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..models import User, db

bp = Blueprint('users', __name__)

@bp.route('/api/users/staff', methods=['POST'])
@jwt_required()
def create_staff():
    current_user = get_jwt_identity()
    if current_user['role'] != 'admin':
        return jsonify({'message': 'Unauthorized'}), 403

    data = request.get_json()
    
    # Check if email already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'Email already exists'}), 400

    try:
        new_user = User(
            name=data['name'],
            email=data['email'],
            role=data['role']
        )
        new_user.set_password(data['password'])
        
        db.session.add(new_user)
        db.session.commit()
        
        return jsonify({'message': 'Staff member created successfully'}), 201
    
    except IntegrityError:
        db.session.rollback()
        return jsonify({'message': 'Email already exists'}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Failed to create staff member'}), 500

@bp.route('/api/users/staff', methods=['GET'])
@jwt_required()
def get_all_staff():
    current_user = get_jwt_identity()
    if current_user['role'] != 'admin':
        return jsonify({'message': 'Unauthorized'}), 403

    users = User.query.filter(User.role != 'admin').all()
    return jsonify([user.to_dict() for user in users])

@bp.route('/api/users/staff/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_staff(id):
    current_user = get_jwt_identity()
    if current_user['role'] != 'admin':
        return jsonify({'message': 'Unauthorized'}), 403

    user = User.query.get_or_404(id)
    db.session.delete(user)
    db.session.commit()
    
    return jsonify({'message': 'Staff member deleted successfully'})