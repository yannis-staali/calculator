import React, {Component} from 'react';
import Pop from './Pop';


class AmazingNumberButton extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }

    handleClick = e => {
        console.log("HELLOOOO");
      
     }

    render(){
        return (
            <div className="nombres">
                {this.props.children}
                 {/* <div className="boutton_num">1</div>
                 <div className="boutton_num">2</div>
                 <div className="boutton_num">3</div>
                 <div className="boutton_num">4</div>
                 <div className="boutton_num">5</div>
                 <div className="boutton_num">6</div>
                 <div className="boutton_num">7</div>
                 <div className="boutton_num">8</div>
                 <div className="boutton_num">9</div> */}
            </div>
        );
    }
}

export default AmazingNumberButton;