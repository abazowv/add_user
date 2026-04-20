import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import ErrorModal from './ui/ErrorModal';
import './AddUser.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Некорректный ввод',
        message: 'Пожалуйста, введите имя и возраст (не пустые значения).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Некорректный возраст',
        message: 'Пожалуйста, введите корректный возраст (> 0).',
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
      <div>
        {error && (
            <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />
        )}
        <Card className="input">
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={enteredUsername}
                onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age (years)</label>
            <input
                id="age"
                type="number"
                value={enteredAge}
                onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
  );
};

export default AddUser;