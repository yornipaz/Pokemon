import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'


const Life = (props)=>{

    return(
        <ProgressBar variant="success" now={props.value} label={`${props.value}%`} ></ProgressBar>   
    );
};
export default Life;