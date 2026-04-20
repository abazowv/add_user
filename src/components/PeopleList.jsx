import { useState } from "react";
import Button from "./ui/Button";
import styles from "./PeopleList.module.css";

function PeopleList({ users, onRemove }) {
    // State to track which user's ID is currently selected for deletion
    // Null means the confirmation dialog is closed
    const [userToDeleteId, setUserToDeleteId] = useState(null);

    /**
     * Confirms the deletion and calls the parent's onRemove function
     */
    function confirmDeletion() {
        onRemove(userToDeleteId);
        setUserToDeleteId(null); // Close the dialog after deletion
    }

    return (
        <div className={styles.wrapper}>
            {/* Render the list of users */}
            <ul className={styles.list}>
                {users.map(user => (
                    <li key={user.id} className={styles.row}>
            <span>
              {user.name}, {user.age} лет
            </span>
                        {/* Open confirmation dialog with the selected user's ID */}
                        <Button onClick={() => setUserToDeleteId(user.id)}>Удалить</Button>
                    </li>
                ))}
            </ul>

            {/* Render confirmation modal if an ID is selected */}
            {userToDeleteId !== null && (
                <div className={styles.overlay} onClick={() => setUserToDeleteId(null)}>
                    {/* Prevent clicks inside the modal from closing it (event bubbling) */}
                    <div className={styles.dialog} onClick={e => e.stopPropagation()}>
                        <h3 className={styles.dialogTitle}>Подтверждение</h3>
                        <p className={styles.dialogText}>
                            Вы точно хотите удалить этого пользователя?
                        </p>
                        <div className={styles.dialogActions}>
                            <Button onClick={confirmDeletion}>Да</Button>
                            <Button onClick={() => setUserToDeleteId(null)}>Отмена</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PeopleList;