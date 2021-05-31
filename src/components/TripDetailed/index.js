import React from "react";
import Box from "@material-ui/core/box";
import { Card, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TripHeader from "../../components/TripHeader";

const containerStyle = {
  background: 'white',
  padding: '15px',
  fontFamily: 'Montserrat 500',
};


export default function TripDetailed(props) {
  return (
    <Card style={{margin:'15px'}} onClick={props.handleclick}>
      <div style={containerStyle}>
        <Typography display="inline">
          <h3>
          {props.event}
          </h3>
          <p>
          {props.description}
          </p>
          <p>
          {props.start} {props.end}
          </p>
        </Typography>
          {props.image}
      </div>
    </Card>
  );
}
