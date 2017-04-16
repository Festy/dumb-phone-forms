import React from 'react';

export default class Form2 extends React.Component {

    generateRand() {
        return parseInt(10000000000 * Math.random());
    }

    onClick () {
        this.props.handlePhoneNumber(this.generateRand());
    }

    render () {
        return (
            <div
                id = "form_div" >
                <a id = "generate_random_btn" className="btn btn-large waves-effect waves-light" onClick = {this.onClick.bind(this)}> Generate</a>
            </div>
        )
    }
}