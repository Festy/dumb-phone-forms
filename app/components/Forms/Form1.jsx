import React from 'react';

export default class Form1 extends React.Component {

    constructor () {
        super();
    }

    handleInput (formNo, event) {
        let decimal = formNo;
        let digit = event.target.value;
        let oldNumber = this.props.number.split('');
        oldNumber[decimal] = digit;
        let newNumber = oldNumber.join("");

        this.props.handlePhoneNumber(newNumber);

        console.log(newNumber);
    }

    createOptions() {
        let options = [];

        for (let i=0; i<10; i++) {
            options.push(
                <option key = {i} value = {i} > {i} </option>
            );
        }

        return options;
    }

    createForm () {
        let formList = [];
        for (let i = 0; i < 10; i++) {
            formList.push(
                <div>
                    <select
                        className="browser-default"
                        value = {this.props.number[i]}
                        onChange={this.handleInput.bind(this, i)} >
                        {this.createOptions()}
                    </select>
                </div>
            )
        }
        return formList;
    }

    render () {
        return (
            <div
                id = "form_div" >
                {this.createForm()}
            </div>
        )
    }
}