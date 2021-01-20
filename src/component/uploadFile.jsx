import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "60%",
    margin: "20px",
    padding: "15px!important",
  },
  media: {
    height: 140,
  },
  textarea: {
    width: "100%",
    height: "100%",
  },
  upload: {
    margin: "1em",
  },
});

export default function UploadFile({ title }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {title}
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="file"
          autoComplete="current-password"
        />
        <Button className={classes.upload} variant="contained" color="primary">
          Upload
        </Button>
      </CardContent>
    </Card>
  );
}
