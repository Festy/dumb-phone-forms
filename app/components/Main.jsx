import React from 'react';
import Form from './forms/Form2.jsx';

export default class Main extends React.Component {

    constructor () {
        super();
        this.state = {
            number : "0000000000"
        }
    }
    
    handlePhoneNumber(phoneNo) {
        this.setState({
            number: phoneNo
        })
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
                    <Form
                        handlePhoneNumber = { this.handlePhoneNumber.bind(this) }
                        number = { this.state.number }
                    />
                </div>
            </div>
        )
    }
}