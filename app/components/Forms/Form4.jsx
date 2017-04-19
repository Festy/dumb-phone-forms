import React from 'react';

export default class Form4 extends React.Component {
    constructor () {
        super();
        this.state = {
            index : 0
        }
    }

    handleInput(value) {
        let currentNumber = this.props.number;
        let numberArray = currentNumber.split('');
        numberArray[this.state.index] = value;
        let newIndex = (this.state.index + 1) % 10;

        this.setState({
            index : newIndex
        });

        this.props.handlePhoneNumber(numberArray.join(''));
    }

    createBalls () {
        let balls = [];
        for (let i=0; i<10; i++) {
            balls.push(
                <div key = {i} onClick = {this.handleInput.bind(this, i)} className = "ball btn-floating btn-large waves-effect waves-light red" id={"ball"+i}>{i}</div>
            )
        }
        return balls;
    }

    render() {
        return (
            <div id = "ball_container">
                {this.createBalls()}
            </div>
        )
    }
}