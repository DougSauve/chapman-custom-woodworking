import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
} from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './components/homePage/HomePage';
import Gallery from './components/gallery/Gallery';

import './App.scss';
import './theme/theme_components.scss';

function App() {
  return (
    <div className="app--container">
      <div className="app">
        <Router>
          <Route path='/' exact component={getHeaderWrappedComponent(HomePage)} />
          <Route path='/gallery' component={getHeaderWrappedComponent(Gallery)} />
        </Router>
      </div>
    </div>
  );
}

const getHeaderWrappedComponent = Component => {
  return (props) => (
    <>
      <Header />
      <Component
        redirectState={props.location.state}
      />
    </>
  );
}

export default App;
