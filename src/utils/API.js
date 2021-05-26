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
    }
}

export default API