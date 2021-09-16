import React, {Component} from 'react';
import Pop from './Pop';

class GreatOperationButton extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }

    // handleClick = e => {
    //     console.log("HELLOOOO");
    //     this.setState({ data: ''});
  
    //  }
    
    render(){
        return(
            <div className="operation">
                 {this.props.children}
                {/* <Pop onClick={this.handleClick} label="+" value="+"/>
                <Pop  label="-" value="-"/>
                <Pop  label="/" value="/"/>
                <Pop  label="*" value="*"/> */}
                {/* <div className="boutton_num">+</div>
                <div className="boutton_num">-</div>
                <div className="boutton_num">/</div>
                <div className="boutton_num">*</div> */}
            </div>
        );
    }
}

export default GreatOperationButton;