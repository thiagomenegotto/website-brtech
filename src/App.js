import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  );
}

export default App;
