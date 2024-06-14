from lib.user_repository import UserRepository
import lib.database_connection as database_connection

def test_create_new_user_is_added_to_db_already_exsits_returns_true():
    userRepository = UserRepository(connection = database_connection)
    result = userRepository.email_exists('jet@mail.com', table_name = 'test_users_table')
    assert result == True

def test_create_new_user_is_added_to_db_doesnt_exsist_return_false():
    userRepository = UserRepository(connection = database_connection)
    result = userRepository.email_exists('notjet@mail.com', table_name = 'test_users_table')
    assert result == False