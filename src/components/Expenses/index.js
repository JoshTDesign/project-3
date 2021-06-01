import React from 'react';
import Header from './Header';
import Expenses from './Expenses';

import Form from './components/Form'

function Expenses() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES)

  return (
    <Container>
      <Jumbotron fluid>
        <h3 className='display-6 text-center'>
          Expense Tracker React App
          <img src={Logo} style={{ width: 50, height: 50 }} alt='react-logo' />
        </h3>
        <div className='text-center'>
          <p>
            Total Expense:{' '}
            <span className='text-success'>
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
        {*/ ADD THE BELOW LINE/*}
        <Form />
      </Jumbotron>
    </Container>
  )
}

export default App