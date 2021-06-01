import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import { Link, useParams } from "react-router-dom";

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
        width: drawerWidth
  },
  varient: {

  }
}));

export default function MenuBar() {
  const [drawerState, setDrawerState] = useState({
    drawerIsOpen: false,
  });
  // console.log('MenuBar drawer state:',drawerState)

  const classes = useStyles();

  const handleToggle = (e) => {
    e.preventDefault();
    setDrawerState({
      // ...drawerState,
      drawerIsOpen: !drawerState.drawerIsOpen,
    });
    // console.log('MenuBar drawer state:', drawerState)
  };

  
let { id } = useParams();

const menuStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.6)",
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
          <Avatar component={Link} to={`/profile/${id}`} alt="placeholder" src="http://placekitten.com/200/300" />
          
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
        
        <MenuItem component={Link} to={`/home`}>Home</MenuItem>
        <Divider />
        {/* <MenuItem component={Link} to={`/Trip/${id}/Dashboard`}>Dashboard</MenuItem> */}
        <MenuItem component={Link} to={`/profile/${id}`}>Profile</MenuItem>
        <MenuItem>My Friends</MenuItem>
        <MenuItem component={Link} to={`/login`}>Log Out</MenuItem>
      </Drawer>
    </div>
  );
}
