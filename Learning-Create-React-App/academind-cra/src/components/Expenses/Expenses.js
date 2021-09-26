import { useState } from 'react';

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
    console.log(filteredExpenses);

    
    
    return (
        <div>
        <Card className="expenses">  
        <ExpensesFilter selected={selectedYear} onSelectYear={saveSelectedYear}></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
        </div>
    )
}

export default Expenses;