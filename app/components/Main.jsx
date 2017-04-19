import React from 'react';
import Form1 from './forms/Form1.jsx';
import Form2 from './forms/Form2.jsx';
import Form3 from './forms/Form3.jsx';
import Form4 from './forms/Form4.jsx';

export default class Main extends React.Component {

    constructor () {
        super();

        let totalForms = 4;
        let prevFormNumber = parseInt(window.localStorage.getItem('formNumber'));
        let currentFormNumber = (prevFormNumber && prevFormNumber <= totalForms) ? prevFormNumber : 1;

        this.state = {
            number : "0000000000",
            formNumber: currentFormNumber,
            totalForms: totalForms
        };
        window.localStorage.setItem('formNumber', currentFormNumber);
    }

    handleNext() {
        let newState = this.state.formNumber + 1;
        this.setState({
            number: "0000000000",
            formNumber: newState
        });
        window.localStorage.setItem('formNumber', newState);
    }

    handlePrev() {
        let newState = this.state.formNumber - 1;
        this.setState({
            number: "0000000000",
            formNumber: newState
        });
        window.localStorage.setItem('formNumber', newState);
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
            case 3:
                return <Form3 {...props} />;
            case 4:
                return <Form4 {...props} />;
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