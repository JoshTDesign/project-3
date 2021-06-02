import { React, useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import { Container, Fab } from '@material-ui/core';
// import SidebarMenu from '../../components/SidebarMenu';
// import DashNavBtn from '../../components/DashNavBtn';
import TripDetailedContainer from '../../components/TripDetailedContainer';
import AddButton from "../../components/AddButton";
import NextEvent from "../../components/NextEvent";
import API from '../../utils/API';
import AddIcon from "@material-ui/icons/Add";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavBar from "../../components/Navbar";
// import NewTripForm from "../../components/NewTripForm";






export default function Agenda() {

  const style = {
    height: '100vh',
  };
  
  const [userState,setUserState] = useState({
    token:"",
    user:{
  
    }
  })

  const [activityState, setActivityState] = useState({
    activity: [],
    userActivity: [],
});

  const [formState, setFormState] = useState({
    activityName: "",
    category: "",
    url: "",
    token: "",
    UserId: "",
    TripId: "",
  });
  
  const [tripState, setTripState] = useState({
    Trip:[],
  })

  const addNewActivity = () => {
    console.log('adding new activity')
  }

  const btnStyle = {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
  }

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    console.log(name, value)
    setFormState({
      ...formState,
      [name]: value,

    });
  };

const handleFormSubmit = (event) => {
  event.preventDefault();

  console.log("NewActivityForm / formState: ", formState);
  API.createActivity(formState, formState.token).then((res) => {
    // setFormState({
    //   ...formState,
    //   UserId: userState.user.id,
    //   TripId: tripState.Trip.id,
    // })
    setActivityState({
      ...activityState,
      userActivity: res.data,
    });
      console.log(res.data)
  //   history.push(history);
  });
  console.log("Form Submitted / creating new activity!");
};

const createActivity = id => {
  console.log('create event function / trip id is:'+id +' user id is:'+userState.user.id)
  API.createActivity(id, userState.token).then(res=>{
    console.log(res.data)
  }).catch(err=>{
    console.log(err)
  }).then(()=>{

  }
  )
};

  useEffect(()=>{
    const token = localStorage.getItem("token")
    
    setFormState({
      ...formState,
      UserId: userState.user.id,
      TripId: tripState.Trip.id,
      token: token //adds browser saved token to formState
    })

    if(token){
      API.getProfile(token).then(res=>{
        console.log(res.data);
        setUserState({
          token:token,
          user:{
            email:res.data.email,
            id:res.data.id,
            username:res.data.username
          }
        })
        //hardcoded the trip id - need to change
      }).then(
        API.getTripById(2, token).then(res=>{
          setTripState({
            Trip:res.data
          })
        })
  
  
      )
      .catch(err=>{
        console.log("no logged in user")
        setUserState({
          token:"",
          user:{
  
          }
        })
      })
    } else {
      console.log("no token provided")
    }
  },[])
  
  return (
      <Container maxWidth="md" padding="0" >
        <TripDetailedContainer city="city"/>
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
                        onChange={handleInputChange} 
                    />
                    <TextField 
                        className="category" 
                        id="outlined-basic" 
                        name="category"
                        label="Category" 
                        variant="outlined" 
                        onChange={handleInputChange} 
                    />
                    <TextField 
                        className="actUrl" 
                        id="outlined-basic" 
                        name="url"
                        label="URL (optional)" 
                        variant="outlined" 
                        onChange={handleInputChange} 
                    />
                    

                    <Button variant="contained" color="primary" onClick={createActivity}>
                            {/* <Link to="#">
                                Add activity
                            </Link> */}
                            Create Activity
                    </Button>
                </Grid>
            </form>
        {/* <NextEvent event="Event Title Placeholder" time="time"/> */}
        {/* <AddButton style={{ justifyContent: "flex-end" }} />
          <Fab
            style={btnStyle}
            color="primary"
            aria-label="add"
            onClick={() => addNewActivity()}
            component={Link}
            to='/Trip/:id/Dashboard/newactivityform'
          >
        <AddIcon />
        </Fab> */}
      </Container>
  );
};
