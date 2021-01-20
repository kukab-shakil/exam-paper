import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PowerComp from './powerComp';

const useStyles = makeStyles({
  root: {
    width:"60%",
    margin: '20px',
    padding: '15px!important'
  },
  media: {
    height: 140,
  },
  textarea: {

    width: "100%",
    height: "100%"
}
});

 function Essay({title, textArea}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" >
          <textarea id="story" className={classes.textarea} name="story" 
           rows="25"  defaultValue={textArea} />
  
         
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
export default PowerComp(Essay)