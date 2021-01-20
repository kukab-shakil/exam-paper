import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import NativeSelect from "@material-ui/core/NativeSelect";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    flexWrap: "wrap",
  },
  list: {
    width: "60%",
    flexWrap: "wrap",
   
  },
  margin:{
    marginBottom: '4px',
  }
}));

export default function CustomizedSelects({ title, options ,match}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {title}
          </Typography>

          <Box display="flex">
            <List className={classes.list}>
              {options.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                return (
                  <ListItem key={value} role={undefined} dense button>
                    <ListItemText id={labelId} primary={value} />
                  </ListItem>
                );
              })}
            </List>

            
             <Box display="flex" flexDirection="column" >
              {options.map((value) => {
                return (
                     
                    <NativeSelect key={value} className={classes.margin}  id="demo-customized-select-native">
                      <option aria-label="None" value="" />
                      {match.map((value) => {
                        return (
                          <option key={value} value={10}>
                            {value}
                          </option>
                        );
                      })}
                    </NativeSelect>
                  
                );
              })}
            </Box>
            
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
