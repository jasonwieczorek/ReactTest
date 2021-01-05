import React from "react";

export default function ExampleFunctionalComponent() {

    // state
    const[inputText, setInputText] = React.useState('');

    // equivalent of componentDidMount
    React.useEffect(() => {
       console.log('functional render complete!')
    }, []);


    return(
        <div>
            <h1>Functional component sample</h1>
            <label htmlFor="functionalComponentInput">type to change the state: </label>
            <input id="functionalComponentInput" type="text" onChange={e => setInputText(e.target.value)}/>
            <p><b>inputText state:</b> {inputText}</p>
        </div>
    );
}