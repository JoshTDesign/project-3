import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Box,
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core/";
import { render } from "@testing-library/react";

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
  const [expenses, setExpenses] = useState([]);
  

  const handleClick = () => {
    // click should add amount to total amount
    const newExpense = {
      value: inputValue,
      activity: inputActivity,
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
          <div>Value: {expense.value}</div>
          <div>activity: {expense.activity}</div>
        </div>
      );
    });
  };

  return (
    <>
      <Box>Total: {totalExpenses}</Box>
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

      <Button onClick={handleClick}>Submit</Button>

      <div>{renderExpensesRow()}</div>
    </>
  );
}

export default Expenses;