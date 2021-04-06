import React from 'react';
import './TitleSeccion.css'

const TitleSeccion = (props) => {
    console.log("Parametros",props); 
    return(<div className="o-contentc-title">
        <h3 className="o-title-seccion">{props.title}</h3>
    </div>);



};

export default TitleSeccion;