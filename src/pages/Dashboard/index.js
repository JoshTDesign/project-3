import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Typography, Box, Container } from "@material-ui/core";
import AddMemberDialog from "../../components/AddMemberDialog";
import API from "../../utils/API";
import MenuBar from "../../components/MenuBar";

const btnStyle = {
  background: "white",
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  textAlign: "center",
  border: 0,
  color: "#333333",
  height: 48,
  padding: "0 30px",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  width: "32%",
  textDecoration: "none",
};

function Dashboard() {
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [tripState, setTripState] = useState({
    trip: [],
  });

  // api to add user to current trip
  const addMember = (addId) => {
    API.addTripUser(tripState.trip.id, addId, userState.token);
  };
  // api to get another member by email
  const getUser = async (email) => {
    const request = await API.getUserByEmail(email, userState.token);
    const data = await request;
    return data;
  };

  const handleAddMember = (email) => {
    getUser(email)
      .then((res) => {
        addMember(res.data.id);
      })
      .then((response) => {
        // console.log(response);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      API.getProfile(token)
        .then((res) => {
          // console.log(res.data);
          setUserState({
            token: token,
            user: {
              email: res.data.email,
              id: res.data.id,
              username: res.data.username,
            },
          });
        })
        .then(
          API.getTripById(id, token).then((res) => {
            // console.log(res.data);
            setTripState({
              trip: res.data,
            });
            // console.log("Dashboard / city: ", res.data?.city);
          })
        )
        .catch((err) => {
          console.log("no logged in user");
          setUserState({
            token: "",
            user: {},
          });
        });
    } else {
      console.log("no token provided");
      // history.push('/login');
    }
  }, []);

  let { id } = useParams();

  return (
    <Container maxWidth="md">
      <MenuBar />
      <div
        style={{ marginTop: "80px", marginBottom: "15px", marginLeft: "10px" }}
      >
        <Link to="/home">
          <Typography variant="subtitle" color="primary.dark">
            My Trips
          </Typography>
        </Link>
      </div>
      <div
        style={{
          marginBottom: "15px",
          marginLeft: "10px",
          display: "flex",
          alignItems: "flex-end",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h4"
          color="primary.dark"
          style={{ fontFamily: "Quando" }}
        >
          Trip to {tripState.trip?.city}
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary.dark"
          style={{ marginLeft: "10px" }}
        >
          {tripState.trip?.start_date} until {tripState.trip?.end_date}
        </Typography>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <AddMemberDialog
          tripStateId={tripState.trip.id}
          userStateToken={userState.token}
        />
      </div>

      <Box
        display="flex"
        style={{
          justifyContent: "space-between",
          padding: 0,
          boxShadow: "none",
        }}
      >
        <Link
          style={btnStyle}
          className="active"
          to={`/Trip/${id}/Dashboard/Agenda`}
        >
          <Button style={btnStyle}>Agenda</Button>
        </Link>
        <Link style={btnStyle} to={`/Trip/${id}/Dashboard/Discover`}>
          <Button style={btnStyle} className="inactive">
            Discover
          </Button>
        </Link>
        <Link style={btnStyle} to={`/Trip/${id}/Dashboard/Expenses`}>
          <Button style={btnStyle} className="inactive">
            Expenses
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Dashboard;
