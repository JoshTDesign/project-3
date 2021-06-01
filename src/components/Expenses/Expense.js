import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '25ch',
      },
}));

function Expenses() {
    const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: ''
});

return (
  <TextField
    label="Size"
    id="outlined-size-small"
    defaultValue="Small"
    variant="outlined"
    size="small"
  >
    <FormControl fullWidth className={classes.margin} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={values.amount}
        onChange={handleChange("amount")}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        labelWidth={60}
      />
    </FormControl>
  </TextField>
);
