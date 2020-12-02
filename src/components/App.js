import React,{ useState } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Navbar';
import NavModal from './NavModal';
import Home from './Home/Home';
import IndicatiiMaps from './IndicatiiMaps';
import About from './About';
import PriceList from './PriceList';
import Careers from './Careers';
import ConfidentialPolicy from './ConfidentialPolicy';
import TermsConditions from './TermsConditions';
import './App.scss';

function App() {

const [isMenuOpen, setMenuIsOpen]= useState(false);

  return (
    <div className="App">
      <Navbar isMenuOpen={()=> {setMenuIsOpen(!isMenuOpen)}} />
        <div className='app-modal'>
          { isMenuOpen && <NavModal onClick={isMenuOpen} /> }
        </div>
      <Route path='/' exact component={Home} />
      <Route path='/maps' exact component={IndicatiiMaps} />
      <Route path='/despre' exact component={About} />
      <Route path='/lista-de-preturi' exact component={PriceList} />
      <Route path='/cariere' exact component={Careers} />
      <Route path='/politica-de-confidentialitate' exact component={ConfidentialPolicy} />
      <Route path='/termeni-si-conditii' exact component={TermsConditions} />


    </div>
  );
}

export default App;
