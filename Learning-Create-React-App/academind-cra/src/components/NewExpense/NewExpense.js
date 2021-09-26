import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [formActive, setFormActive] = useState(false);

    const setTrue = () => {
        setFormActive(true);
    }
    const setFalse = () => {
        setFormActive(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString().slice(0,4)
        }
        props.onAddExpense(expenseData);
    }



    return <div className="new-expense">
        {!formActive && <button onClick={setTrue} >Add a new expense</button>}
        {formActive && <ExpenseForm remove={setFalse} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
    </div>
}

export default NewExpense;