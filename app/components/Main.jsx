import React from 'react';
import Form1 from './forms/Form1.jsx';
import Form2 from './forms/Form2.jsx';

export default class Main extends React.Component {

    constructor () {
        super();
        this.state = {
            number : "0000000000",
            formNumber: 1,
            totalForms: 2
        };
    }

    handleNext() {
        this.setState({
            number: "0000000000",
            formNumber: this.state.formNumber + 1
        });
    }

    handlePrev() {
        this.setState({
            number: "0000000000",
            formNumber: this.state.formNumber - 1
        });
    }

    getForm () {
        let formNumber = this.state.formNumber;

        let props = {
            handlePhoneNumber : this.handlePhoneNumber.bind(this),
            number : this.state.number
        };

        switch(formNumber) {
            case 1:
                return <Form1 {...props} />;
            case 2:
                return <Form2 {...props} />;
            default:
                return <div> Done! </div>
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
                    {this.getForm()}
                    <div id = "nav_container" >
                        <a id = "prev"
                           className = {"btn btn-large waves-effect waves-light " + ((this.state.formNumber === 1) ? "disabled" : "") }
                           onClick= {this.handlePrev.bind(this)}>prev</a>
                        <a id = "next"
                           className = {"btn btn-large waves-effect waves-light " + ((this.state.formNumber === this.state.totalForms) ? "disabled" : "") }
                           onClick= {this.handleNext.bind(this)}>next</a>
                    </div>
                </div>
            </div>
        )
    }
}