import React from "react";
import Box from "@material-ui/core/box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TripHeader from "../../components/TripHeader";


export default function TripDetailed(props) {
  return (
    <div>
      <TripHeader header={props.header}/>
      <Box p={2}>
        <Card handleclick={props.handleclick}>
          <Typography variant={"h6"} display="inline">
            Trip Name Here...
          {/* </Typography> */}

          {/* <Typography> */}
              How do we want to organize and show the details?
              <ul>
                 <li>
                     things here
                 </li>
                 <li>
                     things here
                 </li>
                 <li>
                     things here
                 </li>
                 <li>
                     things here
                 </li>
              </ul>
          </Typography>
        
        </Card>
      </Box>
    </div>
  );
}
