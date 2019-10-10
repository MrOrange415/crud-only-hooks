import React, {useState} from 'react';
import UserForm from './UserForm';

const EditUserForm = props => {
    const [editingUser, setEditingUser] = useState(props.currentUser);

    if (editingUser.id !== props.currentUser.id) {
        // update component if new user is selected
        setEditingUser(props.currentUser);
    }

    const handleSubmission = (editingUser) => {
        props.saveEditedUser(editingUser);
    }

    return (
        <UserForm user={editingUser} handleSubmission={handleSubmission} buttonText='Update User'/>
    )
}

export default EditUserForm;
