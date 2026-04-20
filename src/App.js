import { useState } from "react";
import UserForm from "./components/UserForm";
import PeopleList from "./components/PeopleList";

function App() {
    // State to store the array of user objects
    const [users, setUsers] = useState([]);

    /**
     * Adds a new user to the users list
     * @param {Object} user - The new user object to add
     */
    function handleAddUser(user) {
        setUsers(prevUsers => [...prevUsers, user]);
    }

    /**
     * Removes a user from the list based on their ID
     * @param {number} userId - The unique ID of the user to remove
     */
    function handleRemoveUser(userId) {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: 24, color: "#222" }}>
                Управление пользователями
            </h1>

            {/* Form component to add new users */}
            <UserForm onAdd={handleAddUser} />

            {/* Only render the list component if there is at least one user */}
            {users.length > 0 && (
                <PeopleList users={users} onRemove={handleRemoveUser} />
            )}
        </div>
    );
}

export default App;