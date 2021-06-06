import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {
  TextField,
  Card,
  Container,
  Button,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
// import { render } from "@testing-library/react";
import { useParams, useHistory } from "react-router-dom";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";

const containerStyle = {
  height: "auto",
  border: 0,
  color: "#333333",
  padding: 0,
  textAlign: "center",
};

const boxStyle = {
  textAlign: "center",
};

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
  const params = useParams();
  const classes = useStyles();
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [inputValue, setInputValue] = useState(null);
  const [inputActivity, setInputActivity] = useState(null);
  const [participants, setParticipants] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
      API.getProfile(token).then((res) => {
        console.log(res.data);
        setUserState({
          token: token,
          user: {
            email: res.data.email,
            id: res.data.id,
            username: res.data.username,
          },
        });
        fetchExpenses();
      });
    } else {
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    let total = 0;
    expenses.forEach((datum) => {
      total += parseFloat(datum.cost);
    });
    setTotalExpenses(total);
  }, [expenses]);

  const fetchExpenses = () => {
    API.getAllExpenseByTrip(params.id).then((res) => {
      setExpenses(res.data);
    });
  };

  const handleClick = () => {
    // click should add amount to total amount
    const newExpense = {
      cost: inputValue,
      name: inputActivity,
      participants: participants,
      tripId: params.id,
    };

    API.createExpense(newExpense, userState.token).then((res) => {
      fetchExpenses();
    });
  };

  const deleteExpense = (id) => {
    API.deleteExpense(id,userState.token).then((res) =>{
      fetchExpenses();
    })
  }

  const renderExpensesRow = () => {
    return expenses.map((expense) => {
      return (
        <div style={{borderRadius:'10px', background:'rgb(243,245,249)', width:'100%', marginBottom:2, width:'auto', marginRight:10, marginLeft:10}}>
            <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between', padding:10}}>
              <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
                <div style={{border:'1p solid red'}}>
                <Typography variant="button">
                {expense.name} <Typography variant="caption" color="primary">{expense.participants}</Typography>
                </Typography>
                </div>
            </div>
                <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
                  <div>
                  ${expense.cost}
                  </div>
                  <Delete onClick={()=>{deleteExpense(expense.id)}} />
                </div>
        </div>
        </div>
      );
    });
  };

  return (
    
        <Container maxWidth="md" style={containerStyle}>
          
          <div style={{ 
            marginLeft:24, 
            marginRight:24, 
            background:'white',
            borderBottomRightRadius:20,
            borderBottomLeftRadius:20,
            minHeight:'50vh',
            paddingBottom:20
            }}>
          
            <div style={{paddingTop:50}}>
            <Typography variant="h6" color="primary.dark" style={{fontFamily:'Quando', marginLeft:'10px'}}>
            Total Spent:$ {totalExpenses}          
            </Typography>
            </div>
            
              <Divider />
            
            <div style={{display:'flex', flexWrap:'wrap'}}>
              <div style={{padding:'30px', flex:'flex-basis', width:'auto'}}>
                <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                // className={classes.root}
                // InputProps={{className: classes.input}}
                id="outlined-adornment-amount"
                variant="filled"
                size="small"
                onChange={(event) => setInputValue(parseInt(event.target.value))}
                value={inputValue ? inputValue : 0}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                // labelWidth={60}
                />
                {/* </FormControl> */}
                <br></br><br></br><InputLabel>Name of activity</InputLabel>
                <TextField
                id="outlined-full-width" 
                variant="filled" 
                size="small"
                value={inputActivity ? inputActivity : ""}
                onChange={(event) => setInputActivity(event.target.value)}
                style={{minWidth: "100%"}}
                />
                {/* <FormControl className={classes.margin} variant="outlined"> */}
                <br></br><br></br>

                <InputLabel htmlFor="filled-size-small">Participants</InputLabel>
                <TextField
                variant="filled"
                id="filled-size-small"
                value={participants ? participants : ""}
                size="small"
                onChange={(event) => setParticipants(event.target.value)}
                style={{minWidth: "100%"}}
                /><br></br><br></br>
                <Button 
                  variant='contained' 
                  color='primary' 
                  onClick={handleClick}
                  style={{minWidth: "100%"}}>
                    Submit
                  </Button>
              </div>
              <Divider orientation='vertical'/>

              <div style={{flexGrow:'2', paddingTop:40}}>
              <div>{renderExpensesRow()}</div>
              </div>
            </div>
          </div>    

        </Container>
  );
}

export default Expenses;
