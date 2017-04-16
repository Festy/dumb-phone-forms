import React from 'react';
import $ from 'jquery';

export default class Form1 extends React.Component {

    constructor () {
        super();
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
                        onChange={this.props.handleChange.bind(this, i)} >
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