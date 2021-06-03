import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Box,
  Card,
  Container,
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core/";
// import { render } from "@testing-library/react";


const containerStyle = {
  backgroundColor: "white",
  height: '100vh',
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  border: 0,
  color: '#333333',
  padding: 0,
  textAlign: 'center',
};

const boxStyle={
  textAlign: 'center',
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

function Expenses() {
  const classes = useStyles();
  const [totalExpenses, setTotalExpenses] = useState();
  const [inputValue, setInputValue] = useState(null);
  const [inputActivity, setInputActivity] = useState(null);
  const [participants, setParticipants] = useState(null);
  const [expenses, setExpenses] = useState([]);
  
  // const handleInputChange = (event) => {
  //   const 
  // }

  const handleClick = () => {
    // click should add amount to total amount
    const newExpense = {
      value: inputValue,
      activity: inputActivity,
      participants: participants,
    };

    const data = expenses;
    data.push(newExpense);

    setExpenses([...data]);

    let total = 0;
    data.forEach((datum) => {
      total += datum.value;
    });

    setTotalExpenses(total);
  };
  const renderExpensesRow = () => {
    return expenses.map((expense) => {
      return (
        <div>
          <Card>
           {expense.activity} $ {expense.value}, {expense.participants}
           </Card>
        </div>
      );
    });
  };

  return (
    <>
    <div style={{paddingLeft:15, paddingRight:15}}>
      <Container maxWidth="md" style={containerStyle}>
      <Box style={boxStyle}>
        <h2>Total Spent:$ {totalExpenses}</h2></Box>
      <TextField
        label="Name of Activity"
        id="filled-size-small"
        value={inputActivity ? inputActivity : ""}
        onChange={(event) => setInputActivity(event.target.value)}
      />
      <FormControl className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          onChange={(event) => setInputValue(parseInt(event.target.value))}
          value={inputValue ? inputValue : 0}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <TextField
        label="Participants"
        id="filled-size-small"
        value={participants ? participants : ""}
        onChange={(event) => setParticipants(event.target.value)}
      />

      <Button onClick={handleClick}>Submit</Button>

      <div>{renderExpensesRow()}</div>
      </Container>
      </div>
    </>
  );
}

export default Expenses;