import { React, useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';
// import SidebarMenu from '../../components/SidebarMenu';
// import DashNavBtn from '../../components/DashNavBtn';
import TripDetailedContainer from '../../components/TripDetailedContainer';
import AddButton from "../../components/AddButton";
import NextEvent from "../../components/NextEvent";
import API from '../../utils/API';







export default function Agenda() {

  const style = {
    height: '100vh',
  };
  
  const [userState,setUserState] = useState({
    token:"",
    user:{
  
    }
  })
  
  const [tripState, setTripState] = useState({
    Trip:[],
  })

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
        <NextEvent event="Event Title Placeholder" time="time"/>
      </Container>
  );
};
