import React from 'react';
import './App.css';

// welcome message object
const welcome = {
    greeting: "Hey,",
    name: "Jason!",
};

// a list of video games
const videoGames = [
    {
        id: 0, title: 'Gears of War', studio: 'Epic Games', cost: 50,
    },
    {
        id: 1, title: 'Apex', studio: 'Respawn Entertainment', cost: 60,
    },
];

// The main React Component, basically just a Javascript function (function App is an alternative way to do this)
const App = () => {

    const[searchTerm, setSearchTerm] = React.useState('');

    // A callback function
    const handleSearch = event => {
       setSearchTerm(event.target.value);
    }

    // the searched stories (more verbose)
    //const searchedGames = videoGames.filter(function(game) {
    //    return game.title.toLowerCase().includes(searchTerm.toLowerCase());
    //});

    // the searched stories (more concise)
    const searchedGames = videoGames.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // return some JSX stuff for display
    return (
        <div>
            <h1>{welcome.greeting} {welcome.name}</h1>
            <hr/>

            {/* pass the handleSearch function to the Search component */}
            <Search onSearch={handleSearch}/>

            {/* display a list of video games */}
            <h2>Simple map function for all the games in the list</h2>
            {videoGames.map(function(game) {
                return (
                    <div key={game.id}>
                        <span>{game.title}</span>
                        <span>{game.studio}</span>
                        <span>{game.cost}</span>
                    </div>
                )
            })}

            {/* initialize a new List Component of video games */}
            <h2>A list component that takes a list of video games and displays it</h2>
            <List list={videoGames}/>

            {/* display the searched stories */}
            <h2>A filtered list of video games that the user is looking for</h2>
            <List list={searchedGames}/>
        </div>
    );
}

// A new search component that takes in some props
const Search = props => {

    // Reacts 'useState' hook, this is basic javascript array deconstructing
    const [searchTerm, setSearchTerm] = React.useState('');

    // Basic event handler (integrated with a callback)
    const handleChange = event => {
        setSearchTerm(event.target.value);
        props.onSearch(event);
    }

    return (
        <div>
            <label htmlFor="search">Enter Game Title:</label>
            <input id="search" type="text" onChange={props.onSearch}/>
            <hr/>
            <p>Searching for <strong>{searchTerm}</strong></p>
        </div>
    );
}

// Create a new React component that can be injected directly into our JSX code
function List(list) {
    return list.list.map(function (game) {
        return (
            <div key={game.id}>
                <span>{game.title}</span>
                <span>{game.studio}</span>
                <span>{game.cost}</span>
            </div>
        );
    });
}

export default App;
