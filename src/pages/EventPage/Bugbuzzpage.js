import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Bugbuzz from '../../team/Tech-poster/a4bugbuzz.jpg';

const Bugbuzzpage = () => {

    return (
      <>    
      <ScrollToTop/>
       <div className="teams-section">
                  <div className='lin'>
                      <h1>
                          <Link to="/" >Home</Link>
                      </h1>
                      <img src={great} className='symb'/>
                      <h1>
                          <Link to="/events" >Events</Link>
                      </h1>
                      <img src={great} className='symb'/>
                      <h1>
                          <Link to="/tech-event" >Tech </Link>
                      </h1>
                  </div>
      </div>            
      <div className="logo-hunt-page">
        <h1>Bug Buzz</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img
              src={Bugbuzz} 
              alt="Bug Buzz"
            />
            <button className="register-button" >
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>
              Event Name: Bug Buzz
            </p>
            <p>
              Date: 20 September
            </p>
            <p>
              Time: 11:00AM - 11:45AM
            </p>
            <p>
              Event Time Duration: 1 HOUR
            </p>
            <p>
              Number of Rounds: 1
            </p>
            <h3 className='logo3'>Rules:</h3>
            <ul>
              <li>Individual participation.</li>
              <li>In the first round, the top 20 candidates will be selected based on time (varies according to number of participants) for the second round.</li>
            </ul>
            <h3 className='logo3'>Event Heads</h3>
            <ul>
              <li>KRISH VANANI - 6359754076</li>
              <li>SAHIL SOJITRA - 8866011851</li>
              <li>KRISHNA DESAI - 9624081220</li>
            </ul>
            <h3 className='logo3'>Event Volunteers</h3>
            <ul>
              <li>UTSAV VACHHANI  </li>
              <li>ZENITH DAYANI  </li>
              <li>NEEL MANDANKA  </li>
              <li>MANAV AVAIYA  </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
      </>
  
    );
  };

export default Bugbuzzpage;
