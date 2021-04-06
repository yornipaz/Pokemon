import React from 'react';
import ImgMon from './ImgMon';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';

import './AsideMon.css';
const AsideMon = (props) => {
    const imgStyle = {
        height: '140px',
        width: '140px'

    };

    return (
        <div className="o-container">
            <Row className="justify-content-md-center">
            <ImgMon style={imgStyle} url={props.url} alt={props.alt} className="o-img-Logo"></ImgMon>
            <Col className="justify-content-md-center">
            <h5 style={{color:'#e4dedf',fontSize:'1rem'}}>Parcial Práctico</h5>
            <h5 style={{color:'#e4dedf',fontSize:'1rem'}}>Segundo corte</h5>
            <h5 style={{color:'#e4dedf',fontSize:'1rem'}}>Yorni Felipe Bonilla Paz</h5>
            <h6 style={{color:'#e4dedf',fontSize:'1rem'}}>Codigo:213664</h6>
            
            </Col>
            </Row>

            <Row style={{marginTop:'19rem'}} className="justify-content-md-center">
            <Link to="/"> <Button  style={{ borderRadius: '3rem', height: '2rem', width: '10rem', padding: '0', textAlign: 'center', backgroundColor: '#c5001a', borderColor: '#90000d' }} variant="danger">Regresar</Button></Link>
            </Row>
            
        </div>
    );

};


export default AsideMon;

