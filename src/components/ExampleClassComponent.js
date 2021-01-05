import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * An example Class Component.
 *
 * ExampleFunctionalComponent is its Functional equivalent.
 */
export default class ExampleClassComponent extends React.Component {

    // constructor with state
    constructor(props) {
        super(props);

        // function binding goes here
        this.handleInputText = this.handleInputText.bind(this);

        this.state = {
            inputText: ''
        }
    }

    // ------------------functions-----------------------

    componentDidMount() {
        console.log('first render is complete!');
    }

    // Event handler for setting title
    handleInputText(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Class component sample</h1>
                <label htmlFor="search">type to change the state: </label>
                <input id="search" type="text" onChange={this.handleInputText}/>
                <p><b>inputText state:</b> {this.state.inputText}</p>
            </div>
        );
    }
}