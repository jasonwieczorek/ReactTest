import React from 'react';
import './App.css';

function App() {
    const title = 'React';

  return (//
      <div>
    <h1>Hello {title}</h1>
      <label htmlFor="search">Search:</label>
          <input id="search" type="text"/>
      </div>
  );
}

export default App;
