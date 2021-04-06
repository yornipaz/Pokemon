import React from 'react';
import './AsideMon.css';

const ImgMon = (props)=>{
     const imgStyle=props.style;
     console.log(imgStyle)

    return(<img src={props.url} style={imgStyle} ></img>);

};
export default ImgMon;