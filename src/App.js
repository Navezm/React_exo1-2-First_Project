import React, {Component} from 'react';
import './App.css';
import Mycars from './component/Mycars';

class App extends Component {
  render(){
    return (
      <div>
        <Mycars />
        <h1>Mee too</h1>
      </div>
    );
  }
}

export default App;
