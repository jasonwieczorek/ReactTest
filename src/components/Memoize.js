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


    // a memoized thing that will only re-render if the properties passed in change
    const MemoizedList = React.memo(function({list}){
        return (
            <div>
                {list.map(function (list) {
                    return <div key={list.id}>{list.title}</div>;
                })}
            </div>
        )
    });

    return(
        <div>
            <label htmlFor="functionalComponentInput">type to change the state: </label>
            <input id="functionalComponentInput" type="text" onChange={handleEvent}/>
            <p><b>current state:</b> {inputText}</p>
            <MemoizedList list={list}/>
        </div>
    );
}

export default Memoize;