import React from "react";
import {
  Typography,
  Card,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  makeStyles,
  Button,
  Divider,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Delete } from "@material-ui/icons";


const containerStyle = {
  padding: "15px",
  margin: "15px",
  fontFamily: "Montserrat 500",
};

const style = {
  backgroundColor: "#f3f5f9",
  boxShadow: "none",
  borderRadius: "8px",
  textDecoration: "none",
  margin: 15,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(21),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function TripDetailed(props) {
  const classes = useStyles();

  return (
<div className={classes.root}>
<Card style={style} id={props.id}>
      <div style={containerStyle}>
      <Accordion style={{boxShadow:'none', backgroundColor:'rgb(243,245,249)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          // style={{display:'flex', flexDirection:'column', alignItems:'stretch'}}
        >

        <div style={{width:'100%'}}>
        <Typography style={{borderBottom:'1px solid #1EDBF5', color:'#1EDBF5', textTransform:'uppercase'}} variant="subtitle2" color="secondary">{props.date}</Typography>
        <Typography style={{paddingTop: 10}} className={classes.heading}>{props.event}</Typography>

        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
          <div>
          <Typography width="100%">
            {props.description}
          </Typography>
          </div>
          <div>
        <Button
          id={props.id}
          color="primary"
          variant="contained"
          size="small"
          aria-label="delete card"
          component="span"
          onClick={props.onClick}
          >Delete
        </Button>
        </div>
        </div>

      </AccordionDetails>
      </Accordion>
      </div>
</Card>
</div>
  );
}
