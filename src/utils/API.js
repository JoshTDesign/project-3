const axios = require("axios")

const API = {
    login:function(userData){
        return axios.post("http://localhost:3001/login",userData)
    },
    getProfile: function(token){
        return axios.get("http://localhost:3001/profile",{
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },  
    getAllTrips: function(token){
        return axios.get("http://localhost:3001/api/trips/",{
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },
    getTripById: function(TripId, token){
        return axios.get(`http://localhost:3001/api/trips/${TripId}`,{
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },
    createTrip: function(tripData, token){
        return axios.post("http://localhost:3001/api/trips/", tripData, {
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },
    updateTrip: function(tripId, tripData, token){
        return axios.put(`http://localhost:3001/api/trips/${tripId}`, tripData, {
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },
    deleteTrip: function(TripId, token){
        return axios.destroy(`http://localhost:3001/api/trips/${TripId}`, {
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },
    getAllActivities: function(token){
        return axios.get("http://localhost:3001/api/activities/", {
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },
    getActivityById: function(activityId, token){
        return axios.get(`http://localhost:3001/api/trips/${activityId}`, {
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },
    deleteActivity: function(activityId, token){
        return axios.destroy(`http://localhost:3001/api/trips/${activityId}`, {
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },
    createActivity: function(activityData, token){
        return axios.post("http://localhost:3001/api/activities/", activityData, {
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },
    updateActivity: function(activityId, activityData, token){
        return axios.put(`http://localhost:3001/api/activities/${activityId}`, activityData, {
            headers:{
                authorization:`Bearer ${token}`
            }
        })
    },    
    getDashboard: function(userId, token){
        return axios.get(`http://localhost:3001/dashboard/${userId}`, {
            headers:{
                authorization:`Bearer ${token}`
            }
        });
    },
    getLatLon: async function(cityName){
        const cityData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ca0a6c1724abbeafa23dfc91590ac700`);
        const latLon = [cityData.data.coord.lat, cityData.data.coord.lon];
        Promise.resolve(latLon).then(function(value) {
            console.log("value1: ", value);
            return value;
        }, function(value) {
            console.log("value2: ", value);
            return value;
        });
    },

}

export default API