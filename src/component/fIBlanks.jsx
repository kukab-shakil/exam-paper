import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import PowerComp from './powerComp';



const useStyles = makeStyles({
  root: {
    width:"60%",
    margin: '20px',
  },
  line: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField:{
    marginRight: '1em',
    marginLeft: '1em'
  }
});

 function Fib({title,noOfBlanks}) {
  const classes = useStyles();
  
  const [fields, setFields] = useState([{ value: null }])
  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }
  // function handleAdd() {
  //   let values = [...fields];
  //   values.push({ value: null });
  //   setFields(values);
  // }



  // function handleRemove(i) {
  //   const values = [...fields];
  //   values.splice(i, 1);
  //   setFields(values);
  // }

  function getBlanks(noBlanks) {
    let values = [];
    let i;
    for (i = 0; i <  noBlanks; i++) {
      values.push(i)
    }
    return values;
  }

  return (
    <Card className={classes.root}>
        
        <CardContent className={classes.line}>
          <Typography gutterBottom variant="h5" component="h5">
            {title}
          </Typography>
           {/* {()=>handleAdd(noOfBlanks)} */}
           {/* <Button  onClick={() => ()}>
              +
            </Button> */}
          
        {(getBlanks(noOfBlanks)).map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <TextField 
              className={classes.textField}
              key={`${field}-${idx}`}
              type="text"
              placeholder="Enter text"
              onChange={e => handleChange(idx, e)}
            />
            {/* <Button  onClick={() => handleRemove(idx)}>
              X
            </Button> */}
          </div>
        );
      })}

          
        </CardContent>
      
    </Card>
  );
}


export default Fib;