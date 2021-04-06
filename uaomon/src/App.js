import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectMon from './Components/SelectMon';
import HomeMon from './Components/HomeMon';
import {Route,Switch} from 'react-router-dom';
import BatleMon from './Components/BatleMon';
import winner from './Components/winner';
import GameOver from './Components/GameOver';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomeMon}></Route>
        <Route exact path="/SelectionMon" component={SelectMon}></Route>
        <Route exact path="/BatleMon" component={BatleMon}></Route>
        <Route exact path="/GameOver" component={GameOver}></Route>
        <Route exact path="/winner" component={winner}></Route>
              </Switch>
      
    </div>
  );
}

export default App;
