import React from 'react';
import Card from './Card';
import Button from './Button';
import './ErrorModal.css';

const ErrorModal = (props) => {
    return (
        <div>
            <div className="backdrop" onClick={props.onCancel || props.onConfirm} />
            <Card className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    {props.onConfirm && (
                        <Button onClick={props.onConfirm}>
                            {props.confirmText || 'Окей'}
                        </Button>
                    )}
                    {props.onCancel && (
                        <Button onClick={props.onCancel}>
                            {props.cancelText || 'Отмена'}
                        </Button>
                    )}
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;