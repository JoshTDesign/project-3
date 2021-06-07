import React from 'react';
import { makeStyles } from '@material-ui/core';
import {Card} from '@material-ui/core';
import {CardActionArea} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {CardMedia} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import AddActivityDialog from '../AddActivityDialog'
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '96%',
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function DiscTodo(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  <>
    <Card className={classes.root}>
      <CardHeader
        title={props.name}
        style={{height:'80px'}}
      />
        <CardMedia
          component="img"
          height="200"
          image={props.pictures}
        />
        <div style={{display:'flex', justifyContent:'flex-start'}}>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <CardActions onClick={props.handleBtn}>
        {/* <Button data-value={props.id} size="small" color="primary">
          + Add to my agenda
        </Button> */}
        <AddActivityDialog 
          data-value={props.id} 
          createActivity={props.createActivity}
          nameLabel={props.name} 
          description={props.shortDescription} 
          userStateToken={props.userStateToken}
          tripId={props.tripId}
          userStateId={props.userStateId}
          />

      </CardActions>
      </div>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {props.shortDescription}
          </Typography>
          <Typography variant="caption">For more information:</Typography><br></br>
          <a href={props.link}>{props.link}</a>
        </CardContent>
      </Collapse>

    </Card>
    
</>


























  );
}