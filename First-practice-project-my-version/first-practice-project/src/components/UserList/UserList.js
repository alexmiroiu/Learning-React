import React from 'react';

import styles from './UserList.module.css';
import UserItem from './UserItem';

const UserList = (props) => {
    return (
        <ul className={styles.list}>
            {props.items.map(item => <UserItem name={item.name} age={item.age} key={item.id}></UserItem> )}
        </ul>
    );
}

export default UserList;