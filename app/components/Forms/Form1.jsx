import React from 'react';
import * as d3 from 'd3';
import neighbourhoods from '../../neighbourhoods.json';

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

    componentDidMount() {
        var width = '300';
        var height = '300';

        // Create a unit projection.
        var projection = d3.geoMercator()
            .scale(1)
            .translate([0, 0]);

// Create a path generator.
        var path = d3.geoPath()
            .projection(projection);

// Compute the bounds of a feature of interest, then derive scale & translate.
        var b = path.bounds(neighbourhoods),
            s = 0.96 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
            t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
            debugger;
// Update the projection to use computed scale & translate.
        projection
            .scale(s)
            .translate(t);
        var svg = d3.select('#form_div')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('stroke', 'green')
            .attr('fill', 'white');

        var path = d3.geoPath()
            .projection(projection);
        svg.selectAll('path')
            .data(neighbourhoods.features)
            .enter()
            .append('path')
            .attr('d', path);

        let aa = [-122.41732, 37.8071299];
        let bb = [-122.39408, 37.7762699];

        let directionPath = [
            [37.80835, -122.41029].reverse(),
            [37.80859, -122.41336].reverse(),
            [37.80842, -122.41417].reverse(),
            [37.80832, -122.41551].reverse(),
            [37.80801, -122.41745].reverse(),
            [37.80713, -122.41732].reverse(),
            [37.80835, -122.41029].reverse(),
            [37.80833, -122.4105].reverse(),
            [37.80784, -122.41081].reverse()
        ];

        svg.selectAll("circle")
            .data([aa,bb]).enter()
            .append("circle")
            .attr("cx", d => projection(d)[0])
            .attr("cy", d => projection(d)[1])
            .attr("r", "3px")
            .attr("fill", "red")
        let lineFunction = d3.line()
                                .x((d) => {
                                    let a = projection(d)[0];
                                    console.log(a);
                                    return a;
                                })
                                .y((d) => {
                                    let a = projection(d)[1];
                                    console.log(a);
                                    return a;
                                });
        svg.append("path")
            .attr("d", lineFunction(directionPath))
            .attr("stroke", "blue")
            .attr("stroke-width", 2)
             .attr("fill", "none");

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
                {
                    //this.createForm()
                }
            </div>
        )
    }
}