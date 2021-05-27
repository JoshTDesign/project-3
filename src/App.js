import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import API from "./utils/API"
// import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
// import CreateTrip from "./pages/CreateTrip";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Trip from "./pages/Trip";
import NewTripForm from "./components/NewTripForm";
import MenuBar from "./components/MenuBar";
import SidebarMenu from "./components/SidebarMenu";




function App() {
  const [formState,setFormState] = useState({
    email:"",
    password:""
  })

  const [userState,setUserState] = useState({
    token:"",
    user:{

    }
  })

  useEffect(()=>{
    const token = localStorage.getItem("token")
    API.getProfile(token).then(res=>{
      console.log(res.data);
    })
  },[])

  const handleFormSubmit = e =>{
    e.preventDefault();
    API.login(formState).then(res=>{
      console.log(res.data);
      localStorage.setItem("token",res.data.token)
      setUserState({
        ...userState,
        token:res.data.token,
        user:{
          email:res.data.user.email,
          name:res.data.user.name,
        }
      })
    }).catch(err=>{
      console.log("error occured")
      console.log(err);
    })
    setFormState({
      email:"",
      password:""
    })
  }

  return (
    <div>
      {/* <SidebarMenu /> */}
    <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/createtrip" component={CreateTrip} /> */}
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Trip/:id" component={Trip} />
          <Route path="/newtripform" component={NewTripForm} />
        </div>
    </Router>
    </div>
  );
}


export default App;




  // return (
  //   <div>
  //     <h1>welcome!</h1>
  //     <form onSubmit = {handleFormSubmit}> 
  //       <input name="email" value = {formState.email} onChange={(e)=>setFormState({...formState,email:e.target.value})}/>
  //       <input name="password"  type="password" value = {formState.password} onChange={(e)=>setFormState({...formState,password:e.target.value})}/>
  //       <input type="submit" value="login"/>
  //     </form>
  //   </div>
  // );


