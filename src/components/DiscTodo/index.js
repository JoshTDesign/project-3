import React from 'react';
import { makeStyles } from '@material-ui/core';
import {Card} from '@material-ui/core';
import {CardActionArea} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {CardMedia} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import AddActivityDialog from '../AddActivityDialog'


const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export default function DiscTodo(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} id={props.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.pictures}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions onClick={props.handleBtn}>
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
    </Card>
  );
}