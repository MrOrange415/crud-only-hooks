import React, {useState} from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette'},
    { id: 2, name: 'Craig', username: 'siliconeidolon'},
    { id: 3, name: 'Ben', username: 'benisphere'},
  ]
  const defaultUser = {name: '', username: ''};

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [editing, setEditing] = useState(false);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const toggleEditMode = (editingUser) => {
    let selectedUser = users.filter(user => user.id === editingUser);

    if (currentUser.id && (editingUser === currentUser.id)) {
      setEditing(false);
      setCurrentUser(defaultUser);
      return;
    }

    setEditing(true);
    setCurrentUser(selectedUser[0]);
  }

  const saveEditedUser = editedUser => {
    usersData.map((user) => {
      if (editedUser.id === user.id) {
        user.name = editedUser.name;
        user.username = editedUser.username;
      }
      return user;
    });

    setUsers(usersData);
    setEditing(!editing);
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
