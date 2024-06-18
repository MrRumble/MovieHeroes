from flask import g, request, jsonify
from lib.token import decode_token
from functools import wraps
import jwt

def token_checker(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth_header = request.headers.get('Authorization')

        if auth_header:
            try:
                token = auth_header.split()[1]  # Remove the "Bearer" part
                payload = decode_token(token)

                if payload is None:
                    raise jwt.InvalidTokenError
                g.user_id = payload['user_id']  # Store user_id in Flask's global object
            except (jwt.ExpiredSignatureError, jwt.InvalidTokenError):
                return jsonify({'message': 'auth error'}), 401
        else:
            return jsonify({'message': 'auth error'}), 401

        return f(*args, **kwargs)

    return decorated_function



# Example of @token_checker application to our roots
# @app.route('/protected', methods=['GET'])
# @token_checker
# def protected_route():
#     return jsonify({'message': 'This is a protected route', 'user_id': g.user_id})
