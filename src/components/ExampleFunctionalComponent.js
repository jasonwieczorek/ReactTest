import React from "react";

/**
 * An example Functional Component. This is way more concise compared to the equivelant Class Component!
 */
export default function ExampleFunctionalComponent() {

    // Functional components use React hooks to handle state
    const[inputText, setInputText] = React.useState('');

    // equivalent of componentDidMount
    React.useEffect(() => {
       console.log('functional render complete!')
    }, []);

    // arrow function for event handling (could also have been done inline in the jsx if we wanted like below...)
    // onChange={e => setInputText(e.target.value)}
    const handleEvent = event => {
        setInputText(event.target.value);
    }

    return(
        <div>
            <label htmlFor="functionalComponentInput">type to change the state: </label>
            <input id="functionalComponentInput" type="text" onChange={handleEvent}/>
            <p><b>current state:</b> {inputText}</p>
        </div>
    );
}