import React, {Component} from 'react';
import TheTitle from './TheTitle';
import BeautifullScreen from './BeautifullScreen';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import Pop from './Pop';
import Yoko from './Yoko';
// import button from './button';


class Calculator extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }

    
    calculate = () => {
        try {
            const result = eval(this.state.data);
            this.setState({data: result});
        } catch (e) {
            this.setState({data: 'error'})
        }
    }

    handleClick = e => {
        console.log("bang")
        const value = e.target.getAttribute('data-value');

        this.setState({ data: this.state.data + value});

        switch(value) {
            case 'clear':
                this.setState({ data: ''});
                break;
            case '=':
                console.log("equal");
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value});
        }

  
     }


    render(){
        return(
            <div className="Container_calculator">
              
                <TheTitle>
                </TheTitle>
                <BeautifullScreen  data={this.state.data}/>
                <AmazingNumberButton>
                    <Pop onClick={this.handleClick} label="1" value="1" />
                    <Pop onClick={this.handleClick} label="2" value="2"/>
                    <Pop onClick={this.handleClick} label="3" value="3"/>
                    <Pop onClick={this.handleClick} label="4" value="4"/>
                    <Pop onClick={this.handleClick} label="5" value="5"/>
                    <Pop onClick={this.handleClick} label="6" value="6"/>
                    <Pop onClick={this.handleClick} label="7" value="7"/>
                    <Pop onClick={this.handleClick} label="8" value="8"/>
                    <Pop onClick={this.handleClick} label="9" value="9"/>
                </AmazingNumberButton>       
                <GreatOperationButton>
                    <Pop onClick={this.handleClick} label="+" value="+"/>
                    <Pop onClick={this.handleClick} label="-" value="-"/>
                    <Pop onClick={this.handleClick} label="/" value="/"/>
                    <Pop onClick={this.handleClick} label="*" value="*"/>
                </GreatOperationButton>
                <MagnificientEqualButton>
                    <Pop onClick={this.handleClick} label="=" value="="/>
                </MagnificientEqualButton>
            </div>
        );
    }
}

export default Calculator;