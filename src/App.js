import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Content from './components/Content';

// HashRouter as Router - for ghpages
const App = () => (
  <div className="App">
    <Router>
      <Navigation />
      <Content />
    </Router>
  </div>
);

export default App;
