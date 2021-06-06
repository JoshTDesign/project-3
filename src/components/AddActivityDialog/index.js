import { React, useState, useEffect } from 'react';
import { 
  Box,
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  Typography,
  InputLabel,
  Input,
  InputAdornment,
  FormControl,
  makeStyles
 } from '@material-ui/core';
 import { Link, useParams, useHistory } from "react-router-dom";

import API from '../../utils/API';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input: {
    backgroundColor: "rgb(243,245,249)",
    height: "50px",
    borderRadiusTopLeft: '12px',
    borderRadiusTopRight: '12px',
  },
  Button: {
    maxWidth: '500px',
  },
}));



export default function AddActivityDialog(props) {
  
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  
  let { id } = useParams();
  const history = useHistory();


  const [formState, setFormState] = useState({
    activityName: props.nameLabel,
    description: "",
    address: "",
    activityUrl: "",
    category: "",
    cost: "",
    activity_date: "",
    start_time: "",
    end_time: "",
    token: "",
    UserId: props.userStateId,
    tripId: id,
  })
  


  const handleClickOpen = (e) => {
    setOpen(true);
  };
  
  const handleClose = () => {
    // handleAddMember(formState.email)
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  const createActivity = () => {
    console.log('create event function / trip id is:'+ props.tripId +' user id is:'+props.userStateId)
    console.log(formState)
    API.createActivity(formState, props.userStateToken).then(res=>{
    console.log(res.data)
  }).then(history.push(`/Trip/${props.tripId}/Dashboard/Agenda`))
}


  const setName = (e) => {
    console.log('value set')
  }




  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{marginLeft:'10px'}}>
        Add to my agenda
      </Button>
      <Dialog fullWidth="true" maxWidth="sm" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add this event</DialogTitle>
        <DialogContent>
          
          <form className={classes.root}>
            <Typography variant='h6'>{props.nameLabel}</Typography>
            <FormControl fullWidth className={classes.margin}>
              
            </FormControl>
            <div>
            <TextField
              className={classes.textField}
              InputProps={{className: classes.input}}
              id="date"
              type="date"
              variant="outlined"
              name="activity_date"
              color="primary"
              inputLabelProps={{
                shrink: true,
              }}
              value={formState.startDate}
              size="small"
              onChange={handleInputChange}
            />
            </div>
            <div>
            <TextField
              InputProps={{className: classes.input}}
              id="startTime"
              label="Start Time"
              type="time"
              name="start_time"
              defaultValue="07:30"
              className={classes.textField}
              color="primary"
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              onChange={handleInputChange}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <TextField
              InputProps={{className: classes.input}}
              id="endTime"
              label="End Time"
              type="time"
              name="end_time"
              defaultValue="07:30"
              className={classes.textField}
              color="primary"
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              onChange={handleInputChange}
              inputProps={{
                step: 300, // 5 min
              }}
            />

            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
              <Input
                className={classes.root}
                InputProps={{className: classes.input}}
                id="outlined-adornment-amount"
                name="cost"
                type="number"
                variant="filled"
                size="small" 
                color="primary"
                onChange={handleInputChange} 
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
          </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" onClick={createActivity} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

