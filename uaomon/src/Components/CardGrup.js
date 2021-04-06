import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardMon from './CardMon';
//import Pokemons from '../Constants/Pokemons';

function CardGrup() {
    return(<div> 
    <Container fluid>
        <Row >
            <Col md={3} > 
            <CardMon id={1} name="Charizard"  attack={450} defence={350} url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"></CardMon>
            </Col>
            <Col md={3}> 
            <CardMon id={2} name="Venusaur" attack={450} defence={400} url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"></CardMon>
            </Col>
            <Col md={3}> 
            <CardMon id={3} name="Charmander" attack={300} defence={200} url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"></CardMon>
            </Col>
            <Col md={3}> 
            <CardMon id={4} name="Blastoise" attack={400} defence={400} url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"></CardMon>
            </Col>
            <Col md={3}> 
            <CardMon id={5} name="Beedrill" attack={500} defence={250} url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"></CardMon>
            </Col>
            <Col md={3}> 
            <CardMon  id={6} name="Arbok" attack={400} defence={300} url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"></CardMon>
            </Col>
            <Col md={3}> 
            <CardMon id={7} name="Richu" attack={500} defence={300} url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"></CardMon>
            </Col>
            <Col md={3}> 
            <CardMon id={8} name="Alakazam" attack={500} defence={300} url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png"></CardMon>
            </Col>
        </Row>
    </Container>
</div>
    );
};

export default CardGrup;



