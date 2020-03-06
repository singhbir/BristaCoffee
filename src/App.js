import React from 'react';

import './App.css';
import Navs from './Components/Navs';
import FirstPageText from './Components/FirstPageText';
import ServicePage from './Components/ServicePage';
import Portfolio from './Components/Portfolio';
import 'aos/dist/aos.css';
import Aos from 'aos'
import AboutComponent from './Components/AboutComponent';
import OurTeamComponent from './Components/OurTeamComponent';
function App() {
  Aos.init({
  });
  return (
    <div className="App">
      <div className="MainComponent">
      <Navs/>
      <FirstPageText/>
      </div>
      <div className="secondComponent" id="secondpage">
        <ServicePage />
      </div>
      <div className="thirdComponent" id="thirdpage">
        <Portfolio/>
      </div>
      <div className="fourthComponent" id="fourthpage" >
        <AboutComponent/>
      </div>
      <div className="fifthComponent" id="fifthpage">
        <OurTeamComponent/>
      </div>
    </div>
  );
}

export default App;
