import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import API from "./utils/API"
// import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
// import CreateTrip from "./pages/CreateTrip";
import LoggedInHome from "./pages/LoggedInHome";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Agenda from "./pages/Agenda";
import Expenses from "./pages/Expenses";
import NewTripForm from "./components/NewTripForm";
import MenuBar from "./components/MenuBar";
import SidebarMenu from "./components/SidebarMenu";
import DashNavBtn from "./components/DashNavBtn";




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

  // const { id } = useParams();
  // console.log('id from App: ', id)

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
          <SidebarMenu />
          {/* <DashNavBtn /> */}
          <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/home">
            <LoggedInHome />
          </Route>
          {/* <Route path="/createtrip" component={CreateTrip} /> */}
          <Route exact path="/Trip/:id/Dashboard">
            <Dashboard />
          </Route>
          {/* TODO: do we want this to be same as dashboard or have a different view? */}
          <Route exact path={`/Trip/:id/Dashboard/Agenda`}>
            <Dashboard />
          </Route>
          <Route exact path="/Trip/:id/Dashboard/Expenses/">
            <Expenses />
          </Route>
          <Route exact path="/newtripform">
            <NewTripForm />
          </Route>
          </Switch>
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


