import React from 'react';
import powerComp from './powerComp';
import Button from '@material-ui/core/Button';

function Test() {
    return (
      <div style={{marginBottom: '5vh', width: '15vh'}}>
        <Button style={{width: '15vh', height: '5vh'}} variant="contained" color="primary">
         Submit
       </Button>
      </div>
    );
  }
export default powerComp(Test);