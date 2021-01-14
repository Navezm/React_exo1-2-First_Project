import React, {Component} from 'react';
import './App.css';
import Mycars from './component/Mycars';

class App extends Component {

  state = {
    titre: "Mon catalogue voiture"
  }

  render(){
    return (
      <div>
        <Mycars titre={this.state.titre}/>
      </div>
    );
  }
}

export default App;
