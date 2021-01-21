import React from "react";

/**
 * An example Class Component, considered legacy for React in today's world.
 *
 * ExampleFunctionalComponent is its Functional equivalent and preferred.
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
        console.log('class render complete!');
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
                <label htmlFor="classComponentInput">Type to change some state:   </label>
                <input id="classComponentInput" type="text" onChange={this.handleInputText}/>
                <p><b>current state:</b> {this.state.inputText}</p>
            </div>
        );
    }
}