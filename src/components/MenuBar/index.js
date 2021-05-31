// import React, { useState, Fragment, useParams } from 'react';
// import clsx from 'clsx';
// import { Router, Route, Link } from "react-router-dom";
// import { createBrowserHistory } from "history";

// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Drawer from '@material-ui/core/Drawer';
// import Divider from '@material-ui/core/Divider';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// import LoggedInHome from "../../pages/LoggedInHome";
// import Login from "../../pages/Login";
// // import Grid from "../../pages/Dashboard";
// import Dashboard from "../../pages/Dashboard";

// const drawerWidth = 240;
// const history = createBrowserHistory();

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   flex: {
//     flex: 1
//   },
//   drawerPaper: {
//     position: "relative",
//     width: drawerWidth
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   },
//   toolbarMargin: theme.mixins.toolbar,
//   aboveDrawer: {
//     zIndex: theme.zIndex.drawer + 1
//   }
// });

// const MyToolbar = withStyles(styles)(

//   ({ classes, title, onMenuClick }) => (
//     <Fragment>
//       <AppBar className={classes.aboveDrawer}>
//         <Toolbar>
//           <IconButton
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="Menu"
//             onClick={onMenuClick}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             color="inherit"
//             className={classes.flex}
//           >
//             {title}
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <div className={classes.toolbarMargin} />
//     </Fragment>
//   )
// );

// const MyDrawer = withStyles(styles)(

//   ({ classes, variant, open, onClose, onItemClick }) => (
//     <Router history={history}>
//     <Drawer variant={variant} open={open} onClose={onClose}
//                 classes={{
//                   paper: classes.drawerPaper
//                 }}
//     >
//       <div
//         className={clsx({
//           [classes.toolbarMargin]: variant === 'persistent'
//         })}
//       />
//       <List>
//         <ListItem button component={Link} to="/home" onClick={onItemClick('Home')}>
//           <ListItemText>Home</ListItemText>
//         </ListItem>
//         <Divider />
//         <ListItem button component={Link} to={`/Trip/Dashboard`} onClick={onItemClick('Dashboard')}>
//           <ListItemText>Dashboard</ListItemText>
//         </ListItem>
//         <ListItem button component={Link} to={`/Profile`} onClick={onItemClick('Profile')}>
//           <ListItemText>Profile</ListItemText>
//         </ListItem>
//         <ListItem button component={Link} to={`/home`} onClick={onItemClick('My Trips')}>
//           <ListItemText>My Trips</ListItemText>
//         </ListItem>
//         <ListItem button component={Link} onClick={onItemClick('My Friends')}>
//           <ListItemText>My Friends</ListItemText>
//         </ListItem>
//         <ListItem button component={Link} to={'/login'} onClick={onItemClick('Log Out')}>
//           <ListItemText>Log Out</ListItemText>
//         </ListItem>
//       </List>
//     </Drawer>
//     <main className={classes.content}>
//         <Route exact path="/home" exact component={LoggedInHome} />
//         {/* <Route path="/grid" component={Grid} /> */}
//     </main>
//     </Router>
//   )
// );

// function AppBarInteraction({ classes, variant }) {
//   const [drawer, setDrawer] = useState(false);
//   const [title, setTitle] = useState('Home');

//   const toggleDrawer = () => {
//     setDrawer(!drawer);
//   };

//   const onItemClick = title => () => {
//     setTitle(title);
//     setDrawer(variant === 'temporary' ? false : drawer);
//     setDrawer(!drawer);
//     console.log('MenuBar Title: ', title)
//   };

//   return (
//     <div className={classes.root}>
//       <MyToolbar title={title} onMenuClick={toggleDrawer} />
//       <MyDrawer
//         open={drawer}
//         onClose={toggleDrawer}
//         onItemClick={onItemClick}
//         variant={variant}
//       />
//     </div>
//   );
// }

// export default withStyles(styles)(AppBarInteraction);

// =======================================================

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import SidebarMenu from "../../components/SidebarMenu";
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
  console.log('MenuBar drawer open state:',drawerState)

  const classes = useStyles();

  const handleToggle = (e) => {
    e.preventDefault();
    setDrawerState({
      // ...drawerState,
      drawerIsOpen: !drawerState.drawerIsOpen,
    });
    console.log('MenuBar open state:', drawerState)
  };

  
let { id } = useParams();

  return (
    <div className={classes.root} >
      <AppBar className={classes.appBar}
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
          <Avatar alt="placeholder" src="http://placekitten.com/200/300" />
          
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
        <MenuItem component={Link} to={`/Trip/${id}/Dashboard`}>Dashboard</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Friends</MenuItem>
        <MenuItem component={Link} to={`/login`}>Log Out</MenuItem>
      </Drawer>
    </div>
  );
}
