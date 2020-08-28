import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';


class RollDice extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            die1 : 'one',
            die2 : 'two',
            rolling: false,
            sides : ['one', 'two', 'three', 'four', 'five', 'six']
        }

    }


    roll = (e) => {

        let die1 = this.state.sides[Math.floor(Math.random()*this.state.sides.length)];
        let die2 = this.state.sides[Math.floor(Math.random()*this.state.sides.length)];
       // console.log(die1)

        this.setState({die1 : die1, die2: die2, rolling: true});
        //console.log(this.state)

        setInterval(()=>{this.setState({rolling: false})},1000);

    }


render(){
    let buttonClass = `RollDice-button ${this.state.rolling}`
    return(
        <div className='RollDice'>
            <div className='RollDice-container'>
            <Die face ={this.state.die1} rolling={this.state.rolling}/>
            <Die face= {this.state.die2} rolling={this.state.rolling}/>
            </div>
    <button className={buttonClass} onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling? 'Rolling!!!': 'Role Dice'}</button>

        </div>

    )
}

}

export default RollDice;