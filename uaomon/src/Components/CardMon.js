import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardMon.css';
import {Link} from 'react-router-dom';

function CardMon(props){
    
    return(<Card style={{ width: '14rem',marginBottom:'1.5rem',marginRight:'0',borderRadius:'1.2rem',padding:'.2rem',boxShadow:'0 5px 6px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
    <Card.Img className="o-imgMon" variant="top" src={props.url} />
    <Card.Body style={{ padding:'1rem' }}>
      <Card.Title>{props.name} </Card.Title>
      <Card.Subtitle className="mb-2 ">{`${props.attack}  Ataque`} </Card.Subtitle>
      <Card.Subtitle className="mb-2 ">{`${props.defence}  Defensa`}</Card.Subtitle>
      
      <Link to={{
        pathname:'BatleMon',
        dataCharizar:{
          url:props.url,
          name:props.name,
          attack:props.attack,
          defence:props.defence
        }

      }
      }> <Button  style={{ borderRadius: '3rem', height: '2rem', width: '8rem', padding: '0', textAlign: 'center', backgroundColor: '#c5001a', borderColor: '#90000d' }} variant="danger">Selecionar</Button></Link>
    </Card.Body>
  </Card>
  
    );
};
export default CardMon;
 

