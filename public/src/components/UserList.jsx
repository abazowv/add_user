import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import './UserList.css';

const UserList = (props) => {
    return (
        <Card className="users">
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        <span>{user.name} ({user.age} years old)</span>
                        <Button onClick={() => props.onDeleteClick(user.id)}>Delete</Button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;