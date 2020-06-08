import React from 'react';
import './App.css';

// A react component, this is just a javascript function
function App() {

    //Do some stuff here
    const title = 'React';

    // variable types
    // var - global or local scope, can be reassigned
    // let - block scoped, can be updated but not re-declared
    // const - cannot be updated or redeclared

    // return some JSX stuff for display
    return (
        // This is JSX, NOT html
        <div>
            <h1>Hello {title}</h1>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text"/>
        </div>
    );
}

export default App;
