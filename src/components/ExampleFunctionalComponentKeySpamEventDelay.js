import React, {useEffect, useState} from "react";

/**
 * An example Functional Component that waits x amount of milliseconds before firing an event.
 */
const ExampleFunctionalComponentKeySpamEventDelay = () => {

    const[inputText, setInputText] = React.useState('');
    const [message, setMessage] = useState("");

    // a thing that happens after the timeout
    const timeoutHandler = () => {
        setMessage(inputText);
    }

    // used every keystroke, used to prevent spamming before triggering an event
    useEffect(() => {
        const timeOut = setTimeout(timeoutHandler, 750);
        return () => clearTimeout(timeOut);
    }, [inputText]);

    const handleEvent = event => {
        setInputText(event.target.value);
    }

    return(
        <div>
            <label htmlFor="inputText">Type then wait... </label>
            <input id="inputText" type="text" onChange={handleEvent} value={inputText}/>
            <p><b>event fired for: </b> {message}</p>
        </div>
    );
}

export default ExampleFunctionalComponentKeySpamEventDelay;