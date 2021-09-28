import React from 'react';


import UserNameInput from './UserNameInput';
import UserAgeInput from './UserAgeInput';

const AddUser = () => {
    let userName ;

    const getName = (name) => {
        userName = name;
    }

    const logTheName = (event) => {
        event.preventDefault()
        console.log(userName)
    }

    return (
        <form>
            <UserNameInput data={getName}/>
            <UserAgeInput />
            <button onClick={logTheName}>Add User</button>
        </form>
    )
}

export default AddUser;