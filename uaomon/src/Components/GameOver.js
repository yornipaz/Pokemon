import React from 'react';
import Image from 'react-bootstrap/Image'
import Logo from './Logo.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import './HomeMon.css';




class GameOver extends React.Component {
    constructor(){
        super();
        this.state={show:false}
        this.showComponent=this.showComponent.bind(this);

    }
    showComponent(event){
        
    }

render(){
    const imgStyle = {
        height: '140px',
        width: '140px'

    };
    

    return (<body className="o-background">

    <Container fluid className="o-align" >
        <Row className="justify-content-md-center">
            <Image src={Logo} rounded style={imgStyle}></Image>
            
        </Row>
        <Row className="justify-content-md-center">
        <h3 style={{fontSize:'2.3rem',fontWeight:'500',color:'#cecece'}}> ¡Perdiste!</h3>

        </Row>
        <Row className="justify-content-md-center" >
            <Link to="/SelectionMon"> <Button  style={{ borderRadius: '3rem', height: '2rem', width: '10rem', padding: '0', textAlign: 'center', backgroundColor: '#c5001a', borderColor: '#90000d' }} variant="danger">Reiniciar</Button></Link>
        </Row>
    </Container>
</body>);
}
};

 
export default GameOver;