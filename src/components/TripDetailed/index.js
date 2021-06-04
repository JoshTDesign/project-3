import React from "react";
// import Box from "@material-ui/core/box";
import { Card } from "@material-ui/core";
import { Typography, Chip } from "@material-ui/core";
import {DoneIcon} from '@material-ui/icons';
import TripHeader from "../../components/TripHeader";
import DeleteBtn from "../../components/DeleteBtn";

const containerStyle = {
  // background: 'white',
  padding: '15px',
  margin: '15px',
  fontFamily: 'Montserrat 500',
};

const style = {
  backgroundColor: '#f3f5f9',
  boxShadow: 'none',
  borderRadius: '8px',
  textDecoration: 'none',
  // padding: 15,
  margin: 15,
}

export default function TripDetailed(props) {
  return (
    <Card style={style} 
    //onClick={props.handleclick} 
    id={props.id}>
      <div style={containerStyle}>
      
        <Typography display="inline">
          <h4>
          {props.event}
          </h4>
          <p>
          {props.description}
          </p>
          <p>
          {props.start} {props.end}
          </p>
        </Typography>
          {props.image}
      </div>
      <DeleteBtn label="Delete activity" onClick={props.onClick}/>

    </Card>
  );
}
