import React, { useState, useEffect } from "react";
import {Container, Link} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AddButton from "../../components/AddButton";
import TripBasic from "../../components/TripBasic";
import Box from "@material-ui/core/Box";
import SidebarMenu from "../../components/SidebarMenu";
import API from '../../utils/API'

export default function LoggedInHome() {

  const [userState,setUserState] = useState({
    token:"",
    user:{

    }
  })

  const [tripState, setTripState] = useState({
    userTrips:{}
  })

  let trips = {}
  let thisUser= {}

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
        //hardcoded the user id - need to change
        API.getDashboard(userState.user.id, token).then(res=>{
          trips = res.data;
          console.log(trips)

          setTripState({
            userTrips:trips
          })
        });
        trips = tripState;
        thisUser = userState.user.username;
      
      
        console.log(tripState.userTrips)
      }).catch(err=>{
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
  


  return (
    <div>
      <SidebarMenu />
      <Box display="flex" style={{ justifyContent: "center", padding: 10 }}>
        <h1>{thisUser}'s Trips</h1>
      </Box>
      <Container maxWidth="sm">
        <Paper elevation={3} variant="outlined" style={{ padding: 10 }}>
          {/* <TripBasic /> */}
          {/* {tripState.userTrips.map(trip => (

              <TripBasic title={trip.city} start={trip.start_date}/>

          ))} */}
          {/* {props.children} */}
          <AddButton style={{ justifyContent: "flex-end" }} />
        </Paper>
      </Container>
    </div>
  );
}
