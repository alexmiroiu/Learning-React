import React from 'react';

import styles from './UserList.module.css';
import UserItem from './UserItem';
import Card from '../UI/Card';

const UserList = (props) => {
    return (
        <Card>
        <ul className={styles.list}>
            {props.items.map(item => <UserItem name={item.name} age={item.age} key={item.id}></UserItem> )}
        </ul>
        </Card>
    );
}

export default UserList;