import React from "react";
import List from "./List";

const list = [
    {
        id: 1,
        title: 'Gears of War'
    },
    {
        id: 2,
        title: 'Apex'
    }
];

const Memoize = () => {

    const[inputText, setInputText] = React.useState('');

    const handleEvent = event => {
        setInputText(event.target.value);
    }

    return(
        <div>
            <label htmlFor="functionalComponentInput">type to change the state: </label>
            <input id="functionalComponentInput" type="text" onChange={handleEvent}/>
            <p><b>current state:</b> {inputText}</p>
            <List list={list}/>
        </div>


    );
}

export default Memoize;