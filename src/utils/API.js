const axios = require("axios");
const Amadeus = require("amadeus");

const amadeus = new Amadeus({
    clientId: "92kCFA5i2hKHcOKGaJ4yQ8mjhZSPIDbo",
    clientSecret: 'JklAHhzmqBzuaU9P'
});

const urlPrefix = "https://rendezvous-apiroutes.herokuapp.com";
//const urlPrefix = "http://localhost:3001";

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
    return axios.post(`${urlPrefix}/login`, userData);
  },
  createUser: function (userData) {
    return axios.post(`${urlPrefix}/signup`, userData);
  },

  getProfile: function (token) {
    return axios.get(`${urlPrefix}/profile`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getAllTrips: function (token) {
    return axios.get(`${urlPrefix}/api/trips/`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getTripById: function (TripId, token) {
    return axios.get(`${urlPrefix}/api/trips/${TripId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  createTrip: function (tripData, token) {
    return axios.post(`${urlPrefix}/api/trips/`, tripData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  updateTrip: function (tripId, tripData, token) {
    return axios.put(`${urlPrefix}/api/trips/${tripId}`, tripData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  deleteTrip: function (TripId, userId, token) {
    return axios.delete(`${urlPrefix}/api/trips/${TripId}/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getAllActivities: function (token) {
    return axios.get(`${urlPrefix}/api/activities/`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getActivityById: function (activityId, token) {
    return axios.get(`${urlPrefix}/api/trips/${activityId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  deleteActivity: function (activityId, token) {
    return axios.destroy(`${urlPrefix}/api/trips/${activityId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  createActivity: function (activityData, token) {
    return axios.post(`${urlPrefix}/api/activities/`, activityData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  updateActivity: function (activityId, activityData, token) {
    return axios.put(
      `${urlPrefix}/api/activities/${activityId}`,
      activityData,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  getDashboard: function (userId, token) {
    return axios.get(`${urlPrefix}/dashboard/${userId}`, {
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

    // let temp = API.getLatLon(${userState.city});

    // const center = [temp.data.coord.lat, temp.data.coord.lon]
  },

  addTripUser: function (tripId, userId, token) {
    return axios.put(`${urlPrefix}/api/trips/addUser/${tripId}/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getTripUsers: function (tripId, token) {
    return axios.get(`${urlPrefix}/api/trips/allUsers/${tripId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getAllFriends: function(userId, token) {
    return axios.get(`${urlPrefix}/friends/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  //getting 403 forbidden error.....
  addNewFriend: function(userId, friendId, token) {
    return axios.post(`${urlPrefix}/friends/${userId}/${friendId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },  
  // addNewFriend: function(userId, friendId) {
  //   return axios.post(`${urlPrefix}/friends/${userId}/${friendId}`);
  // },
  getUserByEmail: function (email, token) {
    return axios.get(`${urlPrefix}/getByEmail/${email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  updateUser: function(userId, token) {
    return axios.put(`${urlPrefix}/edit/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },

};
export default API;
