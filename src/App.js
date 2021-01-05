import React from 'react';
import './App.css';
import ExampleClassComponent from './components/ExampleClassComponent';
import ExampleFunctionalComponent from './components/ExampleFunctionalComponent';

function App() {

    // do stuff here

    // JSX
    return (

        <div>
            {/* everything in {} within jsx can be simple javascript */}
            <ExampleClassComponent/>
            <ExampleFunctionalComponent/>
        </div>
    );
}

export default App;
