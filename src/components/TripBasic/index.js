import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Card, Chip, Grid, IconButton, CardMedia } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import DoneIcon from '@material-ui/icons/Done';
import Box from "@material-ui/core/box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
// import ProfileTile from "../../components/ProfileTile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const style = {
  backgroundColor: '#f3f5f9',
  boxShadow: 'none',
  borderRadius: '15px',
  textDecoration: 'none',
  padding: 15,

}

export default function TripBasic(props) {
  // const [state, setState] = useState({
  //   trips: [],
  //   tripsFiltered: [],
  // });

  const history = useHistory();
  const classes = useStyles();

  // const handleclick = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.id);
  //   history.push(`/Trip/${event.target.id}/Dashboard/`);
  // };



  // TODO: fitler on click and render detailed trip card
  //

  // showDetailed = ()

  // render() {
  // const { classes } = this.props;

  return (
    <div>
      <Box p={2}>
        <Card style={style}>
          <CardMedia image="http://placekitten.com/200/300"/>
          <Grid container  justify="space-between" spacing={2} direction="row">
          
            <Link to={props.link} style={{textDecoration: 'none'}}>
            <Grid item justify="space-around">
              <Typography variant={"h6"} display="inline">
                {props.title}
              </Typography>
              <Typography align="right" display='inline' style={{paddingLeft:"10px"}}>{props.start}</Typography>
            </Grid>
            
            <Grid item xs>
              <div className={classes.root}>
                <Avatar
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                  className={classes.orange}
                  >
                  J
                  </Avatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                    className={classes.orange}
                  />
                  <Avatar src="/broken-image.jpg" />
                </div >
            </Grid>
            </Link>
            <IconButton 
              color="primary.dark" 
              aria-label="delete card" 
              component="span"
              onClick={props.onClick}>
              <Delete />
            </IconButton>
            {/* <Grid xs={3}>
                <Chip
                  label="Delete Trip"
                  clickable
                  color="primary"
                  deleteIcon={<DoneIcon />}
                />
            </Grid> */}
          
        </Grid>
        </Card>
      </Box>
    </div>
  );
  // }
}

// export default withStyles(useStyles)(TripBasic);