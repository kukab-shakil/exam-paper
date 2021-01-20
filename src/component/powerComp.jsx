import React from 'react';

function PowerComp(WrapComponent){


    function NewComponent(props){ 
        return (
        <React.Fragment>
                    <WrapComponent {...props}  /> 
         </React.Fragment>
        )
    }

    
    return NewComponent;
}

export default PowerComp;