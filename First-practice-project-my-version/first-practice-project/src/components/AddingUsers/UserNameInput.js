import React from 'react';
import {useState} from 'react';

import styles from './UserNameInput.module.css';

const UserNameInput = (props) => {

    const[userName, setUserName] = useState('');

    const getName = (event) => {
        console.log(userName)
        setUserName(event.target.value);
    }

    return (
        <div>
            <label>User Name</label>
            <input type="text" value={userName} onChange={getName}/>
        </div>
    )
}

export default UserNameInput;