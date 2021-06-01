const axios = require("axios");
const Amadeus = require("amadeus");

const amadeus = new Amadeus({
  clientId: "ZuGbgEEqzu7GJ7bj3GJ0tvG2GB6MkMCp",
  clientSecret: "qoIUm1A9IqMbjpAl",
});

const openTripMapKey = "5ae2e3f221c38a28845f05b60586bc5cab98f89b1fc4c500fe7c4cf7";

const API = {
  discoverActivities: function (cityLat, cityLong) {
    amadeus.shopping.activities
      .get({
        latitude: cityLat,
        longitude: cityLong,
      })
      .then((response) => {
        return response.data;
      });

    // EXAMPLE CALL: API.getLatLon("Seattle").then(response => API.discoverActivities(response.data.coord.lat, response.data.coord.lon));
  },

  getImage: function (imageType) {
    return axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${imageType}`,
      {
        headers: {
          Authorization: `Client-ID 34TGxAx6Nt53t9zaY8MJD35t76aAwgLhsAi_zmNS8X0`,
        },
      }
    );
  },

  login: function (userData) {
    return axios.post("http://localhost:3001/login", userData);
  },
  createUser: function (userData) {
    return axios.post("http://localhost:3001/signup", userData);
  },

  getProfile: function (token) {
    return axios.get("http://localhost:3001/profile", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getAllTrips: function (token) {
    return axios.get("http://localhost:3001/api/trips/", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getTripById: function (TripId, token) {
    return axios.get(`http://localhost:3001/api/trips/${TripId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  createTrip: function (tripData, token) {
    return axios.post("http://localhost:3001/api/trips/", tripData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  updateTrip: function (tripId, tripData, token) {
    return axios.put(`http://localhost:3001/api/trips/${tripId}`, tripData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  deleteTrip: function (TripId, token) {
    return axios.destroy(`http://localhost:3001/api/trips/${TripId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getAllActivities: function (token) {
    return axios.get("http://localhost:3001/api/activities/", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getActivityById: function (activityId, token) {
    return axios.get(`http://localhost:3001/api/trips/${activityId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  deleteActivity: function (activityId, token) {
    return axios.destroy(`http://localhost:3001/api/trips/${activityId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  createActivity: function (activityData, token) {
    return axios.post("http://localhost:3001/api/activities/", activityData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  updateActivity: function (activityId, activityData, token) {
    return axios.put(
      `http://localhost:3001/api/activities/${activityId}`,
      activityData,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  getDashboard: function (userId, token) {
    return axios.get(`http://localhost:3001/dashboard/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getLatLon: function (cityName) {
    return axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ca0a6c1724abbeafa23dfc91590ac700`
    );

    //  TO USE CALL LAT {API.getLatLon("Seattle").then(response => console.log(response.data.coord.lat))}
    //  TO USE CALL LON {API.getLatLon("Seattle").then(response => console.log(response.data.coord.lon))}
  },
};
export default API;
