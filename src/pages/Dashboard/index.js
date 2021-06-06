import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Button, Typography, Box, Container } from "@material-ui/core";
import AddMemberDialog from "../../components/AddMemberDialog"
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
  color: "#05484F",
  height: 48,
  padding: "0 30px",
  fontWeight: "bold",
  width: "32%",
  textDecoration: "none",
  letterSpacing:'.2em'
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


// api to add user to current trip
const addMember = (addId) => {
  API.addTripUser(tripState.trip.id, addId, userState.token)
}
// api to get another member by email
const getUser = async (email) => {
  const request = await API.getUserByEmail(email, userState.token)
  const data = await request;
  return data;
}

const handleAddMember = (email) => {
  getUser(email).then(res=>{
    addMember(res.data.id)}).then(response=>{
      console.log(response)
    });
};




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
    // history.push('/login');
  }
  },[])

  let { id } = useParams();
  

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
                <div>
                <Typography variant="h4" style={{fontFamily:'Quando', display:'inline',margin:0,color:'#05484F'}}>
                  Trip to {tripState.trip?.city}
                </Typography>
                <Typography variant="subtitle2" color="secondary" style={{alignSelf:'flex-end', marginBottom:'20px'}}>
                  {tripState.trip?.start_date} until {tripState.trip?.end_date}
                </Typography>
                </div>
            <div>
            <AddMemberDialog
                tripStateId = {tripState.trip.id}
                userStateToken = {userState.token}
                />
            </div>
            
          </Box>

          <Box>

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
