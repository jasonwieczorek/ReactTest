import React from 'react';
import './App.css';

// welcome message object
const welcome = {
    greeting: "Hey,",
    name: "Jason!",
};

// a list of video games
let videoGames = [
    {
        id: 0, title: 'Gears of War', studio: 'Epic Games', cost: 50,
    },
    {
        id: 1, title: 'Apex', studio: 'Respawn Entertainment', cost: 60,
    },
];

// Create a new React component that can be injected directly into our JSX code
function List() {
    return videoGames.map(function (game) {
        return (
            <div key={game.id}>
                <span>{game.title}</span>
                <span>{game.studio}</span>
                <span>{game.cost}</span>
            </div>
        );
    });
}


// The main React Component, basically just a Javascript function
function App() {

    // Basic event handler
    const handleChange = event => {
        console.log(event.target.value);
    }

    // return some JSX stuff for display
    return (

        <div>
            <h1>{welcome.greeting} {welcome.name}</h1>

            {/* Inputs */}
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" onChange={handleChange}/>
            <hr/>

            {/* display a list of video games */}
            <h2>Video Game List</h2>
            {videoGames.map(function(game) {
                return (
                    <div key={game.id}>
                        <span>{game.title}</span>
                        <span>{game.studio}</span>
                        <span>{game.cost}</span>
                    </div>
                )
            })}

            <h2>Video Game list component</h2>
            <List/>
        </div>
    );
}

export default App;
