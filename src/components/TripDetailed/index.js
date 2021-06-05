import React from "react";
import { Typography, Card, AccordionSummary, Accordion, AccordionDetails, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(21),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

// export default function TripDetailed(props) {
//   return (
//     <Card style={style} 
//     //onClick={props.handleclick} 
//     id={props.id}>
//       <div style={containerStyle}>
      
//         <Typography display="inline">
//           <h4>
//           {props.event}
//           </h4>
//           <p>
//           {props.description}
//           </p>
//           <p>
//           {props.start} {props.end}
//           </p>
//         </Typography>
//           {props.image}
//       </div>
//       <IconButton 
//               color="primary.dark" 
//               aria-label="delete card" 
//               component="span"
//               onClick={props.onClick}>
//               <Delete />
//        </IconButton>
//     </Card>
//   );
// }

export default function TripDetailed(props) {
  const classes = useStyles();

  return (
<div className={classes.root}>
<Card style={style} 
    //onClick={props.handleclick} 
id={props.id}>
      <div style={containerStyle}>
      <Accordion style={{boxShadow:'none', backgroundColor:'rgb(243,245,249)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography className={classes.heading}>{props.event}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {props.description}
        </Typography>
      </AccordionDetails>
      </Accordion>
      </div>
</Card>
</div>
  );
}