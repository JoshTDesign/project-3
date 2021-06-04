import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, Grid, TextField, Button} from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '20px',
  },
}));

export default function AddActivityModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper} data-value={props.id}>
      <h2 id="simple-modal-title">Add activity</h2>
      <p id="simple-modal-description">
        Add this event to your agenda
      </p>
      {/* <AddActivityModal /> */}
      <form className="test" noValidate autoComplete="off">
                <Grid 
                container direction="column"
                justify="center"
                alignItems="center">
                    <h2>Add new activity</h2>
                    <TextField 
                        className="activityName" 
                        id="outlined-basic" 
                        name="activityName"
                        label="Activity Name"
                        variant="outlined" 
                        onChange={props.handleInputChange} 
                    />
                    <TextField 
                        className="category" 
                        id="outlined-basic" 
                        name="category"
                        label="Category" 
                        variant="outlined" 
                        onChange={props.handleInputChange} 
                    />
                    <TextField 
                        className="actUrl" 
                        id="outlined-basic" 
                        name="url"
                        label="URL (optional)" 
                        variant="outlined" 
                        onChange={props.handleInputChange} 
                    />
                    

                    <Button variant="contained" color="primary" onClick={props.createActivity}>
                            {/* <Link to="#">
                                Add activity
                            </Link> */}
                            <p>create activity</p>                  
                    </Button>
                </Grid>
            </form>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add to my agenda
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
