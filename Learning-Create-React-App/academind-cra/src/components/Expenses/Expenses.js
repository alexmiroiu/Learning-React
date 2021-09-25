import { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021');

    const saveSelectedYear = (year) => {
        setSelectedYear(year);
    }
    const filteredExpenses = props.data.filter(item => {
        // const itemYear = item.date.getFullYear().toString();
        // if(itemYear === selectedYear) {
        //     return item;
        return item.date.getFullYear().toString() === selectedYear
    })
    console.log(filteredExpenses)
    
    return (
        <div>
        <Card className="expenses">  
        <ExpensesFilter selected={selectedYear} onSelectYear={saveSelectedYear}></ExpensesFilter>
        {filteredExpenses.map(expense => {
        return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}> </ExpenseItem>
        })}
        </Card>
        </div>
    )
}

export default Expenses;