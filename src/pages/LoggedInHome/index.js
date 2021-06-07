import React, { useState, useEffect } from "react";
import { Container, Card, Typography } from "@material-ui/core";
import AddButton from "../../components/AddButton";
import TripBasic from "../../components/TripBasic";
import API from "../../utils/API";
import MenuBar from "../../components/MenuBar";
import { useHistory } from "react-router-dom";


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


export default function LoggedInHome() {
  const history = useHistory();
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [tripState, setTripState] = useState({
    userTrips: [],
  });

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // api call to get user
  const getUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      API.getProfile(token).then((res) => {
        // console.log("LoggedInHome / res.data: ", res.data);
        setUserState({
          token: token,
          user: {
            email: res.data.email,
            id: res.data.id,
            username: res.data.username,
            first_name: res.data.firstName,
            last_name: res.data.lastName,
          },
        });

        const userId = res.data.id;
        // console.log("LoggedInHome / userId: ", userId);
        API.getDashboard(userId, token).then((result) => {
          setTripState({
            userTrips: result.data.creator,
          });
          // console.log("LoggedInHome / res.data: ", result.data);
          setUserState({
            token: token,
            user: {
              id: result.data.id,
              username: result.data.username,
              first_name: result.data.firstName,
              last_name: result.data.lastName
            }
          })
        });
      });
    } else {
      history.push("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const removeTrip = (id) => {
    // console.log(
    //   "remove event function / trip id is:" +
    //     id +
    //     " user id is:" +
    //     userState.user.id
    // );
    API.deleteTrip(id, userState.user.id, userState.token)
      .then((res) => {
        // console.log(userState.token);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        API.getDashboard(userState.user.id, userState.token).then((result) => {
          setTripState({
            userTrips: result.data.creator,
          });
        });
      });
  };
  const getImage = (img) => {
    API.getImage(img).then((res) => {
      return res.data.results[0].links.html;
    });
  };


  // console.log(getImage('seattle'))

  return (
    <Container maxWidth="md">
      <MenuBar />
      <div
        style={{ marginTop: "80px", marginBottom: "20px", marginLeft: "10px" }}
      >
        <Typography
          variant="h4"
          style={{ fontFamily: "Quando", display: "inline", color: "#05484F" }}
        >
          {userState.user.username}'s Trips
        </Typography>
      </div>

      <Card elevation={3} variant="outlined" style={{ padding: 10 }}>


         {tripState.userTrips == null &&
         <Typography variant='h4' style={{fontFamily: "Quando"}}>There's nothing here. Add your first</Typography>
         }
        {tripState.userTrips.map((trip) => (
          <>
            <TripBasic
              link={`/trip/` + trip.id + `/dashboard`}
              title={trip.city}
              start={trip.start_date}
              onClick={() => removeTrip(trip.id)}
              img="http://placekitten.com/300/200"
            />
          </>
        ))}



        {/* <AddButton style={{ justifyContent: "flex-end" }} /> */}
        <AddButton />
      </Card>
    </Container>
  );
}
