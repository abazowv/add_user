import { useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import styles from "./UserForm.module.css";

function UserForm({ onAdd }) {
  // Local state for form inputs
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  /**
   * Handles form submission, validates inputs, and triggers the onAdd callback
   */
  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation: prevent submission if fields are empty
    if (name.trim() === "" || age.trim() === "") return;

    // Call the parent component's function to add the new user
    onAdd({
      id: Date.now(), // Generate a unique ID based on the current timestamp
      name: name.trim(),
      age: age,
    });

    // Reset form fields after successful submission
    setName("");
    setAge("");
  }

  return (
      <Card>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="inp-name">Имя</label>
            <input
                id="inp-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Введите имя"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="inp-age">Возраст</label>
            <input
                id="inp-age"
                type="number"
                value={age}
                onChange={e => setAge(e.target.value)}
                placeholder="Введите возраст"
            />
          </div>
          <Button type="submit">Добавить</Button>
        </form>
      </Card>
  );
}

export default UserForm;