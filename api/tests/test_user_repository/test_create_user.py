from lib.user_repository import UserRepository
import lib.database_connection as database_connection
from frontend.src.assets.user import User


def test_create_new_user_is_added_to_db():
    userRepository = UserRepository(connection = database_connection)

    user = User('John Doe', "john1@mail.com", "Password123!")
    created_user = userRepository.create(user, table_name='test_users_table')

    user_in_table = userRepository.db['test_users_table'].find_one({'_id': created_user.id})
    assert user_in_table['full_name'] == 'John Doe'
    assert user_in_table['email'] == 'john1@mail.com'
    assert user_in_table['password'] is not None

    # This is to delete test user everytime test is run.
    user_in_table = userRepository.db['test_users_table'].delete_one({'_id': created_user.id})
    