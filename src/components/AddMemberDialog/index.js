import { React, useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import API from '../../utils/API';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);

  const [formState, setFormState] = useState({
      email:"",
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleAddMember(formState.email)
    setOpen(false);
  };

  //api to add user to current trip
const addMember = (addId) => {
    API.addTripUser(props.tripStateId, addId, props.userStateToken).then(res=>{
        console.log('user added: ' + res.data.id)
        alert("A new traveller has been added to your trip!")
    }).catch(err=>{
        console.log(err)
    })
  }
  //api to get another member by email
  const getUser = async () => {
    const request = await API.getUserByEmail(formState.email, props.userStateToken)
    const data = await request;
    return data;
  }
  
  const handleAddMember = () => {
    const newMember = getUser(formState.email).then(res=>{
        addMember(res.data.id)}).then(response=>{
        console.log(response)
      });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(formState.email)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add a traveller
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a fellow traveller</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the email address of the person you with to add to your travel group.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}