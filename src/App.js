import React from 'react';

import Header from './components/Header';
import HomePage from './components/HomePage';

import navBarOptions from './lists/navBarOptions';


import './App.css';

function App() {
  return (
    <div className="app">
      <Header 
        title={"Chapman Custom Woodworking"}
        navBarOptions={navBarOptions}
      />

      <HomePage />

    </div>
  );
}

export default App;
