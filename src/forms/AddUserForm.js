import React, {useState} from 'react';

const AddUserForm = props => {
    let initialFormState = {
        id: null,
        name: '',
        username: '',
    }

    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        let {name,value} = event.target;
        setUser({ ...user, [name]: value});
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        if (!user.name || !user.username) {
            return;
        }

        props.addUser(user);
        setUser(initialFormState)
    }

    return (
        <form>
            <label>Name</label>
            <input type='text' name='name' value={user.name} onChange={handleInputChange}></input>
            <label>Username</label>
            <input type='text' name='username' value={user.username} onChange={handleInputChange}></input>
            <button onClick={handleSubmission}>Add new user</button>
        </form>
    )
}

export default AddUserForm;
