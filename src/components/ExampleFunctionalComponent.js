import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * A sample Class component. Note we export it via new ES6 standards,
 * so we can import it without brackets wherever we want to use it.
 */
export default class ExampleClassComponent extends React.Component {

    // constructor with state
    constructor(props) {
        super(props);

        // function binding goes here
        this.handleEvent = this.handleEvent.bind(this);

        this.state = {
            title: 'Jasons React Application'
        }
    }

    // ------------------functions-----------------------

    // simple event handler
    handleEvent(event) {
        this.setState({
            title: event.target.value
        });
    }

    componentDidMount() {
        console.log('first render is complete!');
    }

    //----------------Render---------------------------

    render() {
        return (
            <div>
                <h1>Class component sample</h1>
                <label htmlFor="search">type to change the state: </label>
                <h2>{this.state.title}</h2>
                <input id="search" type="text" onChange={this.handleEvent}/>
            </div>
        );
    }
}