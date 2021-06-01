import React, {useState} from 'react';

const ALL_EXPENSES = [
    {id:1, name: "Dinner", amount:50},
    {id:2 , name: "Lunch", amount:50}

]

function Expenses() {
    const [expenses, setExpenses] = useState(ALL_EXPENSES)

    return (
        <Header>
        <div>
            <p>
            Total Expenses:{""}

            <span className="text-sucess">
            ${""}
            {expenses.reduce((accumulator, currentValue)=>{
                return (accumulator += parsInt(currentValue.amount))
            }, 0)}
            </span>
            </p>
        </div>
        </Header>
    )
}