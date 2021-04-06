import React from 'react';
import TitleSeccion from './TitleSeccion';
import AsideMon from './AsideMon';
import Logo from './Logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ImgMon from './ImgMon';
import NameMon from './NameMon';
import DefenceMon from './DefenceMon';
import AttackMon from './AttackMon';
import Life from './Life';
import Pokemons from '../Constants/Pokemons';



class BlateMon extends React.Component{
    constructor(props){
        super(props);
        this.state={enemyLife:100,characterLife:100};
        this.outputEvent1 = this.outputEvent1.bind(this);
        this.outputEvent2 = this.outputEvent2.bind(this);
        this.outputEvent3 = this.outputEvent3.bind(this);
        this.outputEvent4 = this.outputEvent4.bind(this);


    }
     
    outputEvent1(event1) {
        this.setState({characterLife:Math.floor(this.state.characterLife-(this.props.location.dataCharizar.defence*.02)),enemyLife:Math.floor(this.state.enemyLife-(this.props.location.dataCharizar.attack*.023))});
    
    }
    outputEvent2(event2) {
        this.setState({characterLife:Math.floor(this.state.characterLife-(this.props.location.dataCharizar.attack*.03)),enemyLife:Math.floor(this.state.enemyLife-(this.props.location.dataCharizar.defence*.002))});
    
    }
    outputEvent3(event3) {
        this.setState({characterLife:Math.floor(this.state.characterLife-(this.props.location.dataCharizar.attack*.07)),enemyLife:Math.floor(this.state.enemyLife-(this.props.location.dataCharizar.attack*.0196))});
    
    }
    outputEvent4(event4) {
        this.setState({characterLife:Math.floor(this.state.characterLife-(this.props.location.dataCharizar.defence*.3)),enemyLife:Math.floor(this.state.enemyLife-(this.props.location.dataCharizar.attack*.027))});
    
    }
     ran = (Math.floor(Math.random()*Pokemons.length))

render(){
    const {url,name,attack,defence}=this.props.location.dataCharizar;
    if((this.state.characterLife<=0 && this.state.enemyLife>=0)){
        this.props.history.push("/GameOver")

    }
    if((this.state.enemyLife<=0 &&this.state.characterLife>=0)){
        this.props.history.push("/winner")
        
    }
        return(
        <Container fluid>
            <Row>
                <Col  md={3}>
                    <AsideMon  url={Logo} alt="Logo UaoMon" title="Cancelar" ></AsideMon>
                </Col>
                <Col md={9}>
                    <TitleSeccion title="Batalla de Pokemones"></TitleSeccion>
                    <EnemyBatle ran={this.ran} enemyLife={this.state.enemyLife} clickHandler1={this.outputEvent1} clickHandler2={this.outputEvent2} clickHandler3={this.outputEvent3} clickHandler4={this.outputEvent4}></EnemyBatle>
                    
                    <CharacterBatle clickHandler1={this.outputEvent1} clickHandler2={this.outputEvent2} clickHandler3={this.outputEvent3} clickHandler4={this.outputEvent4}url={url} name={name} attack={attack} characterLife={this.state.characterLife} defence={defence}></CharacterBatle>


                    
                </Col>
            </Row>
            
        </Container>


    );
}
};

class CharacterBatle extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        const imgStyle = {
            height: '7rem',
            width: '7rem',
            marginTop:'.4rem'
        };
        const {url,name,attack,defence,characterLife}=this.props;
        
        
        return (
            
            <Container style={{ height:'15rem' ,padding:'5rem', marginTop:'1.7rem',marginRight:'0',borderRadius:'1.2rem',padding:'0',boxShadow:'0 5px 6px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',border:'solid 0.04rem #595d61' }}>
                <Row className="justify-content-md-center" style={{marginTop:'3rem'}}>
                    <Col md={3}><ImgMon url={url}  style={imgStyle}></ImgMon></Col>
                    <Col md={5}>  <NameMon name={name}></NameMon>
                        <AttackMon attack={attack}></AttackMon>
                        <DefenceMon defence={defence}></DefenceMon>
                        <Life max={100} value={characterLife} ></Life></Col>
                    <Col md={4} className="justify-content-md-center" style={{marginTop:'2rem'}}>
                    <Row className="justify-content-md-center" style={{padding:'.4rem'}}>
                    <button style={{marginRight:'0.6rem',background:'#e2e0e0'}} onClick={this.props.clickHandler1}>Ataque 1</button>
                    <button style={{background:'#e2e0e0'}} onClick={this.props.clickHandler2}>Ataque 2</button>
                                      
                    </Row>
                    <Row className="justify-content-md-center" style={{marginTop:'.4rem',padding:'1rem'}}>
                    <button style={{marginRight:'0.6rem',background:'#e2e0e0'}} onClick={this.props.clickHandler3}>Ataque 3</button>
                    <button style={{background:'#e2e0e0'}} onClick={this.props.clickHandler4}>Ataque 4</button>
                    </Row>
                    </Col>
                </Row>
            </Container>
        );
    
    }
    
};
class EnemyBatle extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const imgStyle = {
            height: '80px',
            width: '80px',
            marginTop:'1rem'
        };
        const {enemyLife,ran}=this.props;
       

          
        
        return (
            <Row>
                <Col md={9}style={{marginTop:'7rem'}}>
                    <div style={{border:'solid 0.06rem #c5001a',width:'50%'}}></div>
                    <div style={{marginTop:'1rem',border:'solid 0.06rem #c5001a',width:'96%'}}></div>
                </Col>
                <Col md={3}>
                <div className="o-container-enemy" style={{ width: '12rem', height:'16rem',borderRadius:'1.2rem',padding:'.2rem',boxShadow:'0 5px 6px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <ImgMon url={Pokemons[ran].urlAvatar} alt={Pokemons[ran].name} style={imgStyle}></ImgMon>
            <NameMon name={Pokemons[ran].name}></NameMon>
            <AttackMon attack={Pokemons[ran].attack}></AttackMon>
            <DefenceMon defence={Pokemons[ran].defence}></DefenceMon>
            <Life max={100} value={enemyLife} ></Life>
    
        </div>
                </Col>
            </Row>
        );
    

    }
    
};



export default BlateMon;




















