from app import create_app, db
from app.models import User
from werkzeug.security import generate_password_hash

def init_db():
    print("Creating app context...")
    app = create_app()
    with app.app_context():
        print("Creating all tables...")
        db.create_all()
        
        print("Checking for existing admin user...")
        admin = User.query.filter_by(email='admin@example.com').first()
        if not admin:
            print("Creating admin user...")
            admin = User(
                name='Admin User',
                email='admin@example.com',
                role='admin'
            )
            admin.password_hash = generate_password_hash('admin123')
            
            db.session.add(admin)
            db.session.commit()
            print('Admin user created successfully!')
        else:
            print('Admin user already exists!')

if __name__ == '__main__':
    init_db()