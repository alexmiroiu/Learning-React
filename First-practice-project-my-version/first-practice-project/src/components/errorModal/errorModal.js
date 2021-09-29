import React from 'react';
import styles from './errorModal.module.css';

const ErrorModal = (props) => {
    const clearModal = () => {
        props.clearError();
    }
    return (
        <div className={styles.backdrop} onClick={clearModal}>
            <div className={styles.modal}>
                <h1>Invalid inputs</h1>
                <p>{props.message}</p>
                <button onClick={clearModal}>press to close</button>
            </div>
        </div>
    )
}

export default ErrorModal;