import React, {Component} from 'react';

class TheTitle extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }

    render(){
        return(
            <div className="Titre">
                <h1>Calculator 9000</h1>
            </div>
        );
    }
}

export default TheTitle;