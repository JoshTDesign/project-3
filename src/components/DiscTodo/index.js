import React from 'react';
import { makeStyles } from '@material-ui/core';
import {Card} from '@material-ui/core';
import {CardActionArea} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {CardMedia} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import AddActivityModal from '../../components/AddActivityModal'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
        {/* <Button data-value={props.id} size="small" color="primary">
          + Add to my agenda
        </Button> */}
        <AddActivityModal 
          data-value={props.id} 
          createActivity={props.createActivity}
          nameLabel={props.nameLabel} />

      </CardActions>
    </Card>
  );
}