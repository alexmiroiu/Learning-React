import React from 'react';
import {useState} from 'react';


const AddUser = (props) => {
    const[userName, setUserName] = useState('');
    const[userAge, setUserAge] = useState('');
    
    const getName = (event) => {
        setUserName(event.target.value);
    }

    const getAge = (event) => {
        setUserAge(event.target.value);
    }

    const storeData = (event) => {
        event.preventDefault();
        const userData = {
            name: userName,
            age: userAge,
            id: Math.random().toString().slice(0,6)
        }
        props.saveUser(userData);
        setUserName('');
        setUserAge('');
    }

    

    return (
        <form>
            <div>
                <label>User Name</label>
                <input type="text" value={userName} onChange={getName}/>
            </div>
            <div>
                <label>Age (Years)</label>
                <input type="number" value={userAge} onChange={getAge} />
            </div>
            <button onClick={storeData}>Add User</button>
        </form>
    )
}

export default AddUser;