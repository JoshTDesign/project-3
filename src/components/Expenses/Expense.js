// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   InputAdornment,
//   OutlinedInput,
// } from "@material-ui/core/";
// import { render } from "@testing-library/react";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   withoutLabel: {
//     marginTop: theme.spacing(3),
//   },
//   textField: {
//     width: "25ch",
//   },
// }));

// function Expenses() {
//   const classes = useStyles();
//   const [totalExpenses, setTotalExpenses] = useState();
//   const [inputValue, setInputValue] = useState(null);
//   const [inputActivity, setInputActivity] = useState(null);
//   const [expenses, setExpenses] = useState([]);

//   const handleClick = () => {
//     // click should add amount to total amount
//     const newExpense = {
//       value: inputValue,
//       activity: inputActivity,
//     };

//     const data = expenses;
//     data.push(newExpense);

//     setExpenses([...data]);

//     let total = 0;
//     data.forEach((datum) => {
//       total += datum.value;
//     });

//     setTotalExpenses(total);
//   };
//   const renderExpensesRow = () => {
//     return expenses.map((expense) => {
//       return (
//         <div>
//           <div>Value: {expense.value}</div>
//           <div>activity: {expense.activity}</div>
//         </div>
//       );
//     });
//   };

//   return (
//     <>
//       <Box>Total: {totalExpenses}</Box>
//       <TextField
//         label="Name of Activity"
//         id="filled-size-small"
//         value={activity ? activity : ""}
//         onChange={(event) => setInputActivity(event.target.value)}
//       />
//       <FormControl className={classes.margin} variant="outlined">
//         <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
//         <OutlinedInput
//           id="outlined-adornment-amount"
//           onChange={(event) => setInputValue(parseInt(event.target.value))}
//           value={inputValue ? inputValue : 0}
//           startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           labelWidth={60}
//         />
//       </FormControl>

//       <Button onClick={handleClick} />

//       <div>{renderExpensesRow()}</div>
//     </>
//   );
// }

// export default Expenses;



import React from "react";
import {Container} from "@material-ui/core";
import {Box} from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";
import {Fab} from "@material-ui/core";
import {AddIcon} from "@material-ui/icons";
import {Card} from "@material-ui/core";
// import TripHeader from "../../components/TripHeader";
import { Link, useParams } from "react-router-dom";

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
};

const btnStyle = {
  position: 'fixed',
  bottom: '15px',
  right: '15px',
}

export default function Expenses() {
  let { id } = useParams();

  return (
    <div style={{paddingLeft:15, paddingRight:15}}>
      <Container maxWidth="md" style={containerStyle}>
        <typography>
          <h2 style={{margin:0, padding: '15px'}}> Explore Header</h2>
        </typography>
          {/* <TripHeader /> */}
          <Box p={2}>
            <Card>
              <h3>Expenses content goes here</h3>
            </Card>
          </Box>

          <Box p={2}>
            <Card>
              <h3>More expenses content goes here</h3>
            </Card>
          </Box>

          <div>
            <Box
              display="flex"
              style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
              m={2}
            >
              <Fab
                color="primary"
                aria-label="add"
                // onClick={() => props.addNewTrip("CreateTrip")}
                component={Link}
                to={`/Trip/${id}/Dashboard/newexpenseform`}
              >
                <AddIcon />
              </Fab>
            </Box>
          </div>
          
      </Container>
      </div>
  );
}
