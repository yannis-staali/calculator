import React, {Component} from 'react';
import button from './button';

class BeautifullScreen extends Component {
    constructor() {
        super();
        this.state = { data: 'hello'}
    }

    render(){
        return(
            <div className="ecran">
                {this.props.data}
            </div>
        );
    }
}

export default BeautifullScreen;