import React from 'react';

export default class Form1 extends React.Component {

    constructor () {
        super();
    }

    createOptions() {
        let options = [];

        for (let i=0; i<10; i++) {
            options.push(<option key = {i} value = {i} >{i} </option>);
        }

        return options;
    }

    createForm () {
        let formList = [];
        for (let i = 0; i < 10; i++) {
            formList.push(
                <select value = {this.props.number[i]} onChange={this.props.handleChange.bind(this, i)}>
                    {this.createOptions()}
                </select>
            )
        }
        return formList;
    }

    render () {
        return (
            <div>
                {this.createForm()}
            </div>
        )
    }
}