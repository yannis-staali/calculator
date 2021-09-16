import React, {Component} from 'react';
import Pop from './Pop';

class MagnificientEqualButton extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }

    render(){
        return(
            <div className="egal">
                {this.props.children}
            </div>
        );
    }
}

export default MagnificientEqualButton;