import React from 'react';
import { Link } from "react-router-dom";
import ImageSlider from './Imageslider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';



const HomePage = () => {
  return (<>
    <Header/>
    <ScrollToTop/>
    <div className="homepage">
    
      
      <div className="content">
        <div className="explore-section">
          <h3>EXPLORE THE FEST</h3>
          <ul className="menu">
            <li><Link to="/about" >ABOUT</Link></li>
            <li><Link to="/events" >EVENTS</Link></li>
            <li><Link to="/scedule" >SCHEDULE</Link></li>
            <li><Link to="/team" >TEAMS</Link></li>
            {/* <li><Link to="/sponsors" >SPONSORS</Link></li> */}
          </ul>
          <p className="welcome-message">WELCOME TO 2024 EDITION OF CONVERSE</p>
        </div>

        {/* <div className="tv-section">
          <img src="https://i.gifer.com/origin/28/28a9d4f9210689382e3abfd1d196b126_w200.gif" alt="Retro TV" className="tv-image" />
        </div> */}
      </div>
     
    </div>
    <Footer/>
</>
  );
};

export default HomePage;
