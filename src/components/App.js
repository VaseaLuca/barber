import React from 'react';
import Navbar from './Navbar';
import Home from './Home/Home';
import Footer from './Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
