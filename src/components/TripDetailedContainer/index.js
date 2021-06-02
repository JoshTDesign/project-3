import { React, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import TripDetailed from "../../components/TripDetailed";
import { Card, Box } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";

// import AddButton from "../AddButton";

const containerStyle = {
  backgroundColor: "white",
  height: "80vh",
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  borderRadius: 0,
  color: "#333333",
  padding: 15,
};

const style = {
  backgroundColor: "white",
  boxShadow: "none",
  borderRadius: "15px",
  textDecoration: "none",
};

const btnStyle = {
  position: "fixed",
  bottom: "15px",
  right: "15px",
};

export default function TripDetailedContainer(props) {
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [tripState, setTripState] = useState({
    trip: [],
    userTrips: [],
  });

  let { id } = useParams();
  // console.log(id);

  const handleDelete = () => {
    console.log('delete click')
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      API.getProfile(token)
        .then((res) => {
          console.log(res.data);
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
          API.getActivityById(id, token).then((res) => {
            console.log('TripDetailedContainer / res.data: ', res.data)
            if (res.data?.activites) {
              setTripState({
                ...tripState,
                trip: res.data.activities,
              });
            }
          })
        )
        .catch((err) => {
          console.log("TripDetailedContainer / no logged in user");
          setUserState({
            token: "",
            user: {},
          });
        });
    } else {
      console.log("TripDetailedContainer / no token provided");
    }
  }, []);

  return (
    <div>
      <Box p={2} style={{ textDecoration: "none", padding: 0 }}>
        <Link
          to={props.link}
          style={{ textDecoration: "none", borderRadius: "none" }}
        >
          <Container maxWidth="md" style={containerStyle}>
            <Card elevation={3} style={style}>
              {tripState.trip.map((trip) => (
                <TripDetailed
                  event={trip.activityName}
                  description={trip.description}
                  uponclick = {handleDelete}
                />
              ))}
            </Card>
          </Container>
        </Link>
      </Box>
    </div>
  );
}
