import React, { Component } from 'react';
import './Die.css';


class Die extends Component{

    
    
    
    render(){
       // let iconC = `die fa fa-dice-${this.props.face}`
       console.log(this.props.rolling)
        return(
                <div>
                    <i className={`die fa fa-dice-${this.props.face}  ${this.props.rolling?'rolling':'not-rolling'}`} />
                </ div>


        )
    }

}

export default Die;