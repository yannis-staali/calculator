import React, {Component} from 'react';

class pop extends Component {
     constructor() {
         super();
         this.state = { data: ''}
     }

    render(){
        return(
            // <div className="pop">
            //     <p>POP</p>
            // </div>
            <div 
            className="boutton_num"
            onClick={this.props.onClick}
            data-value={this.props.value}>
            {this.props.label}
        </div>
        );
    }
}

export default pop;