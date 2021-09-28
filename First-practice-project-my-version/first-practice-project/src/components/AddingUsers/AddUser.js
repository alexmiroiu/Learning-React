import React from 'react';

import UserNameInput from './UserNameInput';
import UserAgeInput from './UserAgeInput';

const AddUser = () => {
    const getName = (name) => {
        console.log(name);
    }

    return (
        <form>
            <UserNameInput data={getName}/>
            <UserAgeInput />
            <button>Add User</button>
        </form>
    )
}

export default AddUser;