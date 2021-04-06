import React from 'react';
import CardGrup from './CardGrup';
import TitleSeccion from './TitleSeccion';
import AsideMon from './AsideMon';
import Logo from './Logo.png';
import './SelectMon.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const SelectMon = () => {
    return (
        <Container fluid>
            <Row>
                <Col  md={3}>
                    <AsideMon  url={Logo} alt="Logo UaoMon" title="Regresar" ></AsideMon>
                </Col>
                <Col md={9}>
                    <TitleSeccion title="Selección de Personajes"></TitleSeccion>
                    <CardGrup></CardGrup>
                </Col>
            </Row>
            
        </Container>

    );
};
export default SelectMon;
