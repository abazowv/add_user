import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import ErrorModal from './components/ui/ErrorModal';

function App() {
    const [usersList, setUsersList] = useState([]);
    const [deletingUserId, setDeletingUserId] = useState(null);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
    };

    const deleteClickHandler = (userId) => {
        setDeletingUserId(userId);
    };

    const confirmDeleteHandler = () => {
        setUsersList((prevUsersList) => {
            return prevUsersList.filter((user) => user.id !== deletingUserId);
        });
        setDeletingUserId(null);
    };

    const cancelDeleteHandler = () => {
        setDeletingUserId(null);
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />

            {usersList.length > 0 && (
                <UserList users={usersList} onDeleteClick={deleteClickHandler} />
            )}

            {deletingUserId && (
                <ErrorModal
                    title="Удаление пользователя!"
                    message="Вы действительно хотите удалить ?"
                    onConfirm={confirmDeleteHandler}
                    confirmText="ДА"
                    onCancel={cancelDeleteHandler}
                    cancelText="НЕТ"
                />
            )}
        </div>
    );
}

export default App;