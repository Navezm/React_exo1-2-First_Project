import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.titre}</h1>
                <Car color="red">Ford</Car>
                <Car color="black">Peugeot</Car>
                <Car color="green">BMX</Car>
            </div>
        )
    }
}

export default Mycars;