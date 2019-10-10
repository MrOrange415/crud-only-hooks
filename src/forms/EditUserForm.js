import React, {useState} from 'react';

const EditUserForm = props => {
    const [editingUser, setEditingUser] = useState(props.currentUser);
    if (editingUser.id !== props.currentUser.id) {
        setEditingUser(props.currentUser);
    }

    const handleInputChange = event => {
        console.log('editingUser', editingUser);
        let {name,value} = event.target;
        setEditingUser({ ...editingUser, [name]: value});
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        if (!editingUser.name || !editingUser.username) {
            return;
        }

        props.saveEditedUser(editingUser);
        setEditingUser([{id: null, name: '', username: ''}]);
    }

    return (
        <form>
            <label>Name</label>
            <input type='text' name='name' value={editingUser.name} onChange={handleInputChange}></input>
            <label>Username</label>
            <input type='text' name='username' value={editingUser.username} onChange={handleInputChange}></input>
            <button onClick={handleSubmission}>Update User</button>
        </form>
    )
}

export default EditUserForm;
