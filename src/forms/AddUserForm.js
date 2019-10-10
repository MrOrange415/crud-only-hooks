import React, {useState} from 'react';
import UserForm from './UserForm';

const AddUserForm = props => {
    const initialFormState = {id: null, name: '', username: ''};
    const [user, setUser] = useState(initialFormState);

    const handleSubmission = (user) => {
        props.addUser(user);
        setUser(initialFormState)
    }

    return (
        <UserForm user={user} handleSubmission={handleSubmission} buttonText='Add User'/>
    )
}

export default AddUserForm;
