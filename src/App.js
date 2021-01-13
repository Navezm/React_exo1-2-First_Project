import React, {Component} from 'react';
import './App.css';
import img from './img/squirrel.png';

class App extends Component {
  render(){
    return (
      <div className="text-green">
        <h1>Joli</h1>
        <img src={img}></img>
      </div>
    );
  }
}

export default App;
