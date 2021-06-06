import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar} from "@material-ui/core";
import {Drawer} from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Avatar} from "@material-ui/core";
import {MenuItem} from "@material-ui/core";
import {Divider} from "@material-ui/core";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import RallyIcon from "../../assets/R-logo-white.svg"
const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  [theme.breakpoints.up('sm')]: {
    width: "100%"
  },
  toolbarMargin: theme.mixins.toolbar,
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
        position: "relative",
        width: drawerWidth,
        background: '#043133'
  },
  varient: {

  }
}));

export default function MenuBar() {
  const [drawerState, setDrawerState] = useState({
    drawerIsOpen: false,
  });

  // console.log('MenuBar drawer state:',drawerState)

  const [userState, setUserState] = useState({
    token: "",
    id: "",
    image_path: "",
  })

  const classes = useStyles();

  useEffect(() => {
    userState.token = localStorage.getItem("token");
    console.log('MenuBar / token: ', userState.token)

    if(userState.token) {
      API.getProfile(userState.token)
      .then((res) => {
        API.getDashboard(res.data.id, userState.token)
        .then(result=>{
        console.log(result.data);
        setUserState({
          token: userState.token,
          id: result.data.id,
          image_path: result.data.image_path,
        })
        })
      })
    }
  }, []);
console.log(userState.image_path);
  const handleToggle = (e) => {
    e.preventDefault();
    setDrawerState({
      // ...drawerState,
      drawerIsOpen: !drawerState.drawerIsOpen,
    });
    // console.log('MenuBar drawer state:', drawerState)
  };

  
// let { id } = useParams();

const menuStyle = {
  backgroundColor: "rgba(255, 255, 255, 0)",
  boxShadow: 'none',
}

  return (

    <div className={classes.root}>
      <AppBar position={"fixed"} style={menuStyle} className={classes.appBar}
      >
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleToggle}
          >
            <MenuIcon ></MenuIcon>
          </IconButton>

          <Typography variant="h6" className={classes.title}>

           {/* Text here if we want */}

          </Typography>
          <Avatar component={Link} to={`/profile/${userState.id}`} alt="placeholder" src={userState.image_path} />
          
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin}/>
      
      <Drawer
      open={drawerState.drawerIsOpen}
      onClose={handleToggle}
      width={200}
      classes={{paper: classes.drawerPaper}}
      
      // variant="persistent"
      >
        {/* <div
        className={clsx({
          [classes.toolbarMargin]: variant === 'persistent'
        })} */}
      {/* /> */}
      <img src={RallyIcon} style={{width:'100px', marginLeft:'65px'}}/>
        <Divider light="true"/>

        <MenuItem style={{color:'white'}} component={Link} to={`/home`}>Home</MenuItem>
        <Divider/>
        {/* <MenuItem component={Link} to={`/Trip/${id}/Dashboard`}>Dashboard</MenuItem> */}
        <MenuItem style={{color:'white'}} component={Link} to={`/profile/${userState.id}`}>Profile</MenuItem>
        {/* <MenuItem>My Friends</MenuItem> */}
        <MenuItem style={{color:'white'}} component={Link} to={`/login`}>Log Out</MenuItem>
      </Drawer>
    </div>
  );
}
