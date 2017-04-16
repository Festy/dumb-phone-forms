import React from 'react';
import Form1 from './forms/Form1.jsx';

export default class Main extends React.Component {

    constructor () {
        super();
        this.state = {
            number : "0000000000"
        }
    }
    
    handlePhoneNumber(formNo, event) {
        let decimal = formNo;
        let digit = event.target.value;
        let oldNumber = this.state.number.split('');
        oldNumber[decimal] = digit;
        let newNumber = oldNumber.join("");

        this.setState({
            number: newNumber
        });

        console.log(newNumber);
    }
    
    render() {
        return (
            <div id = "main">
                <div id = "title">
                    Dumb Phone Forms
                </div>
                <div id = "form_container" >
                    <div id = "phone_number" >
                        {this.state.number}
                    </div>
                    <Form1
                        handleChange = { this.handlePhoneNumber.bind(this) }
                        number = { this.state.number }
                    />
                </div>
            </div>
        )
    }
}