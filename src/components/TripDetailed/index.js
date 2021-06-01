import React from "react";
// import Box from "@material-ui/core/box";
import { Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TripHeader from "../../components/TripHeader";

const containerStyle = {
  // background: 'white',
  padding: '15px',
  margin: '15px',
  fontFamily: 'Montserrat 500',
};

const style = {
  backgroundColor: '#f3f5f9',
  boxShadow: 'none',
  borderRadius: '15px',
  textDecoration: 'none',
  // padding: 15,
  margin: 15,
}

export default function TripDetailed(props) {
  return (
    <Card style={style} onClick={props.handleclick}>
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
