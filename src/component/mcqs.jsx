import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PowerComp from './powerComp';


const useStyles = makeStyles((theme) => ({
  root: {
    width:"60%",
    margin: '20px',
  },
  media: {
    height: 140,
  },
}));

function Mcqs(props) {
  const { title, options } = props;
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState({});
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {title} 
          </Typography>
          
          <List className={classes.root}>
          {options.map((value) => {
            
           const labelId = `checkbox-list-label-${value}`;
           return (
          <ListItem key={value} role={undefined} dense button >
            <ListItemIcon>
              <Checkbox
                edge="start"
                value={value}
                checked={selectedValue === value}
                onChange={handleChange} 
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value} />
            
          </ListItem>
        );
      })}
    </List>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
    
  );
}
export default PowerComp(Mcqs);
