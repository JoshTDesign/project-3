import { React, useState, useEffect } from "react";
import {Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
// import { Grid } from "@material-ui/core";
// import TripHeader from "../../components/TripHeader";
// import TripDetailed from "../../components/TripDetailed";
// import DiscFood from "../../components/DiscFood";
// import AddButton from "../../components/AddButton";
import DiscTodo from "../../components/DiscTodo";
import GeoJsonLayer from "../Map/index.js";
// import Typography from "@material-ui/core/Typography";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import {Divider} from "@material-ui/core";
import { Box } from "@material-ui/core";
// import DeleteBtn from "../../components/DeleteBtn";
// import AddActivityModal from "../../components/AddActivityModal";

const containerStyle = {
  backgroundColor: "white",
  height: "100vh",
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  border: 0,
  color: "#333333",
  padding: 25,
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  paginator: {
    justifyContent: "center",
    padding: "10px"
  }

}));

//   const Amadeus = require("amadeus")

// let test = {};
const Amadeus = require("amadeus");
// const axios = require("axios");

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

let thisLon = "34.0522";
let thisLat = "118.2437";

export default function DiscoverContainer(props) {
  /*--------------------------*/

  // const style = {
  //   height: "100vh",
  // };

  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [tripState, setTripState] = useState({
    trip: {},
    city: "",
    lat: "",
    lon: "",
  });

  const [activitiesState, setActivitiesState] = useState({
    activities: [],
  });

  const [getActivity, setGetActivity] = useState({
    thisActivity: [],
  })

  const classes = useStyles();
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  // const [noOfPages] = useState(
  //   Math.ceil(activitiesState.activities.length / itemsPerPage)
  // );

  const handlePageChange = (event, value) => {
    event.preventDefault();
    setPage(value);
  };

  /*--------------------------*/

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("useEffect1 run");

    if (token) {
      API.getProfile(token)
        .then((res) => {
          console.log("getting profile", res.data);
          setUserState({
            token: token,
            user: {
              email: res.data.email,
              id: res.data.id,
              username: res.data.username,
            },
          });
        })
        .then((resultss) => {
          API.getTripById(id, token).then((res) => {
            console.log("getting trp:", res.data);
            console.log("city?", res.data.city);
            setTripState({
              ...tripState,
              trip: res.data,
              city: res.data.city,
            });
            console.log("set trip state:", tripState.city);
            API.getLatLon(res.data.city)
              .then((res) => {
                thisLon = res.data.coord.lon;
                thisLat = res.data.coord.lat;
                console.log("getting lat lon:", thisLon, thisLat);
                setTripState({
                  ...tripState,
                  lat: thisLat,
                  lon: thisLon,
                });
              })
              .then(() => {
                getActivities(thisLat, thisLon);
              });
          });
        })
        .then((result) => {
          console.log(tripState.city);
        });
    } else {
      console.log("no token provided");
    }
  }, []);

  // const createActivity = () => {
  //   console.log('Create activity from card')
  // }

  const { id } = useParams();

  const getActivities = (lat, lon) => {
    amadeus.shopping.activities
      .get({
        latitude: lat,
        longitude: lon,
      })
      .then((response) => {
        console.log("getting activities", response.data);
        setActivitiesState({
          activities: response.data,
        });
      });
  };


  const search = (needId, array) => {
    for (var i=0; i < array.length; i++) {
        if (array[i].id === needId) {
            return array[i];
        }
    }
  }


  const handleBtn = (event) => {
  const foundCard = search(event.target.parentElement.parentElement.parentElement.id, activitiesState.activities)
  // const newCard = {
  //   activityName:foundCard.name,
  //   desciption:foundCard.shortDescription,
  //   tripId:id
  // }
  console.log(foundCard);

  setGetActivity ({
    ...getActivity,
    thisActivity: foundCard
  })
  console.log(getActivity.thisActivity)
  }

  

  

  

  return (
    <div>
      <Box p={2} style={{ textDecoration: "none", padding: 0 }}>
      <Container maxWidth="md" style={containerStyle}>
        <GeoJsonLayer lat={tripState.lat} lon={tripState.lon}/>
      {/* <AddActivityModal createActivity={createActivity} /> */}

        <h3>Ideas</h3>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
      {activitiesState.activities
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((activity) => (
          <div style={{width:'48%', display:'inline'}}>
          <div xs={5}>
            <DiscTodo
              name={activity.name}
              pictures={activity.pictures[0]}
              shortDescription={activity.shortDescription}
              id={activity.id}
              handleBtn={handleBtn}
              data-value={activity.id}
              nameLabel={getActivity.thisActivity.name}
              />
              {/* <AddActivityModal id={activity.id} createActivity={createActivity} /> */}

              {/* <DeleteBtn onClick={test} id={activity.id}/> */}
          </div>
          </div>
        ))}
        </div>

      {/* <p>{{anotherName}}</p> */}
      {/* {activitiesState.activities.map((activity) => (
        <Grid item xs={6}>
          <DiscTodo
            name={activity.name}
            pictures={activity.pictures[0]}
            test={handleAddActivity}
          />
        </Grid>
      ))} */}
      {/* <AddButton link="/newActivityForm"/> */}
      <Divider />
      <Box component="span">
        <Pagination
          count={4}
          page={page}
          onChange={handlePageChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        ></Pagination>
      </Box>
      </Container>
    </Box>
    </div>
  );
}
