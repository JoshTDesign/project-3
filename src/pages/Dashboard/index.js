import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";
import { Button, Typography } from "@material-ui/core";
import API from "../../utils/API";

import MenuBar from "../../components/MenuBar";
import { withStyles } from "@material-ui/core/styles";
// import TripHeader from "../../components/TripHeader";
// import Trips from "../../pages/Trips";
// import Agenda from "../Agenda";
// import Discover from "../../pages/Discover";
// import Expenses from "../../pages/Expenses";
import NavBar from "../../components/Navbar";

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
  color: "#333333",
};

const selectedBtn = {
  background: "pink",
}

const linkStyle = {
  textDecoration: "none",
  color: "#333333",
};

function Dashboard() {
  const [state, setState] = useState({
    currentPage: "Dashboard",
    // header: "",
  });

  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [tripState, setTripState] = useState({
  trip:[]
  }
)



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
        console.log(res.data.city);
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
  }
  },[])

  let { id } = useParams();
  console.log(useParams());


  // const handlePageChange = (event, page) => {
  //   setState({
  //     ...state,
  //     currentPage: page,
  //     // currentHeader: header,
  //   });
  // };

  console.log(userState.token);

  // API.getAllTrips = () => {
  //   console.log(res.data);
  // }

  return (
      
      <Container maxWidth="md">
              <MenuBar />

          <Box
            display="flex"
            style={{ justifyContent: "space-between", padding: 0 }}
          >
            <Typography>
              <Link to="/home">
              <h5>My Trips</h5>
              </Link>
            <h2 style={{fontFamily:'Quando'}}>Trip to {tripState.trip.city}</h2>
            </Typography>
            <Box>
              <p>{tripState.trip.start_date}</p>
              <p>{tripState.trip.end_date}</p>
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
      // </div>
  );
}

export default Dashboard;
