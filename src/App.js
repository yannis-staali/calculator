import React, {Component} from 'react';
import Calculator from './Calculator';
import './Calculator.css';

class App extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }

    render(){
        return(
            <div className="Container_general">
                <Calculator />
            </div>
        );
    }
}

export default App;