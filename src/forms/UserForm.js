import React, {useState} from 'react';

const UserForm = props => {
    const [user, setUser] = useState(props.user);
    if (user.id !== props.user.id) {
        // update component if new user is selected
        setUser(props.user);
    }

    const handleInputChange = event => {
        let {name,value} = event.target;
        setUser({ ...user, [name]: value});
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        if (!user.name || !user.username) {
            return;
        }

        props.handleSubmission(user);
    }

    return (
        <form>
            <label>Name</label>
            <input type='text' name='name' value={user.name} onChange={handleInputChange}></input>
            <label>Username</label>
            <input type='text' name='username' value={user.username} onChange={handleInputChange}></input>
            <button onClick={handleSubmission}>{props.buttonText}</button>
        </form>
    )
}

export default UserForm;
