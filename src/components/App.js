import React,{ useState, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
const Backdrop = lazy(() => import("./Backdrop"));
const Drawer = lazy(() => import("./Drawer"));
const Navbar = lazy(()=> import('./Navbar'));
const Home = lazy(() => import("./Home/Home"));
const IndicatiiMaps = lazy(() => import("./IndicatiiMaps"));
const ProgramareOnline = lazy(()=> import('./ProgramareOnline'));
const About = lazy(() => import("./About"));
const PriceList = lazy(() => import("./PriceList"));
const Careers = lazy(() => import("./Careers"));
const ConfidentialPolicy = lazy(() => import("./ConfidentialPolicy"));
const TermsConditions = lazy(() => import("./TermsConditions"));


function App() {

const [drawerOpen, setDrawerOpen]= useState(false);


  return (
    <div className="App">
    <Suspense fallback={<div className='app-fallback'>Loading...</div>}>
      <Backdrop open={drawerOpen} close={()=> setDrawerOpen(!drawerOpen)} />
      <Navbar isDrawerOpen={drawerOpen} openDrawer={()=> setDrawerOpen(!drawerOpen)} />
      <Drawer drawerIsOpen={drawerOpen} close={()=> setDrawerOpen(!drawerOpen)} />
      <Route path='/' exact component={Home} />
      <Route path='/maps' exact component={IndicatiiMaps} />
      <Route path='/programare-online' exact component={ProgramareOnline} />
      <Route path='/despre' exact component={About} />
      <Route path='/lista-de-preturi' exact component={PriceList} />
      <Route path='/cariere' exact component={Careers} />
      <Route path='/politica-de-confidentialitate' exact component={ConfidentialPolicy} />
      <Route path='/termeni-si-conditii' exact component={TermsConditions} />
    </Suspense>


    </div>
  );
}

export default App;
