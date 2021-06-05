import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
//import Container from "@material-ui/core/Container";
import {Box, Container } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import API from "../../utils/API";

import MenuBar from "../../components/MenuBar";
// import { withStyles } from "@material-ui/core/styles";

const btnStyle = {
  background: "white",
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  textAlign: 'center',
  border: 0,
  color: "#333333",
  height: 48,
  padding: "0 30px",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  width: "32%",
  textDecoration: "none",
  // color: "#333333",
};

const selectedBtn = {
  background: "pink",
}

const linkStyle = {
  textDecoration: "none",
  color: "#333333",
};

function Dashboard() {
  // const [state, setState] = useState({
  //   currentPage: "Dashboard",
  // });

  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [tripState, setTripState] = useState({
  trip:[]
  }
)
  const history = useHistory();
  useEffect(()=>{
    const token = localStorage.getItem("token")

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
    }).then(
      API.getTripById(id, token).then(res=>{
        console.log(res.data);
        setTripState({
          trip:res.data
        })
        console.log('Dashboard / city: ', res.data?.city);
      })
    ).catch(err=>{
      console.log("no logged in user")
      setUserState({
        token:"",
        user:{}
      })
    })
  } else {
    console.log("no token provided")
    history.push('/login');
  }
  },[])

  let { id } = useParams();
  
  console.log('Dashboard / useParams tripId: ', useParams());

  console.log(userState.token);

  return (
      
      <Container maxWidth="md">
              <MenuBar />

          <Box
            display="flex"
            flexDirection="column"
            style={{ justifyContent: "space-between", padding: 0 }}
          >
              <Box>
            <Typography>
              <Link to="/home">
              <h5>My Trips</h5>
              </Link>
              </Typography>
              </Box>
              <Box>
            <Typography variant="h6" color="primary.dark">
            <h2 style={{fontFamily:'Quando',margin:0}}>Trip to {tripState.trip?.city}
            <Button variant="filled">Add new members to your group</Button></h2>
            </Typography>
            <Typography variant="subtitle1" color="primary">
              {tripState.trip?.start_date} until {tripState.trip?.end_date}
            </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            style={{ justifyContent: "space-between", padding: 0, boxShadow:'none' }}
          >
            <Link style={btnStyle} className="active" to={`/Trip/${id}/Dashboard/Agenda`}>
            <Button style={btnStyle}>Agenda</Button>
            </Link>
            <Link style={btnStyle} to={`/Trip/${id}/Dashboard/Discover`}>
            <Button style={btnStyle} className="inactive">Discover</Button>
            </Link>
            <Link style={btnStyle} to={`/Trip/${id}/Dashboard/Expenses`}>
            <Button style={btnStyle} className="inactive">Expenses</Button>
            </Link>
          </Box>
      </Container>
  );
}

export default Dashboard;
