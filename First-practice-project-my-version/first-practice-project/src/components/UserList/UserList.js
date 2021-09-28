import React from 'react';

import styles from './UserList.module.css';
import UserItem from './UserItem';

const UserList = () => {
    return (
        <ul className={styles.list}>
            <UserItem></UserItem>
            <UserItem></UserItem>
        </ul>
    );
}

export default UserList;