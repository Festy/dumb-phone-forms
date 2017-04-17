import React from 'react';

export default class Form3 extends React.Component {

    handleValue (event) {
        this.props.handlePhoneNumber(event.target.value);
    }

    render () {
        return (
            <div
                id = "form_div" >
                <form action="#" >
                    <p className = "range-field" >
                        <input type = "range" id = "test5" min = "0" max = "9999999999" onChange = {this.handleValue.bind(this)}/>
                    </p>
                </form>
            </div>
        )
    }
}


