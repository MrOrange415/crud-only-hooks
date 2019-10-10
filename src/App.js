import React, {useState} from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {
  const usersData = [
    { id: 1, name: 'Steve', username: 'mcqueen'},
    { id: 2, name: 'Roger', username: 'Craig'},
    { id: 3, name: 'Joe', username: 'McIntire'},
    { id: 4, name: 'Prince', username: 'NoLastName'},
  ]
  const defaultUser = {name: '', username: ''};
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [editing, setEditing] = useState(false);


  /**
   * Adds user to list
   * @param {Object} user - user to add to list
   */
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  /**
   * Removes user from list
   * @param {int} id - id of user to remove from list
   */
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  /**
   * Turns edit mode on and off
   * @param {int} editingUserId - id of user we are editing
   */
  const toggleEditMode = (editingUserId) => {
    let selectedUser = users.filter(user => user.id === editingUserId)[0];

    // toggle edit mode off if user clicks edit on same user twice
    if (currentUser.id && (editingUserId === currentUser.id)) {
      setEditing(false);
      setCurrentUser(defaultUser);
      return;
    }

    setEditing(true);
    setCurrentUser(selectedUser);
  }

  /**
   * Updates the current user
   * @param {Object} editedUser - user we are update
   */
  const saveEditedUser = editedUser => {
    usersData.map((user) => {
      if (editedUser.id === user.id) {
        user.name = editedUser.name;
        user.username = editedUser.username;
      }
      return user;
    });

    setUsers(usersData);
    setCurrentUser(defaultUser);
    setEditing(false);
  }


  return (
    <div className="container">
      <h1>CRUD app with hooks</h1>
      <div className='flex-row'>
        { editing ? (
          <div className='flex-large'>
          <h2>
            Edit User
          </h2>
          <EditUserForm saveEditedUser={saveEditedUser} currentUser={currentUser}/>
        </div>
        ) : (
          <div className='flex-large'>
          <h2>
            Add Users
          </h2>
          <AddUserForm addUser={addUser}/>
        </div>
        )}
        <div className='flex-large'>
          <h2>
            View Users
          </h2>
          <UserTable users={users} toggleEditMode={toggleEditMode} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
