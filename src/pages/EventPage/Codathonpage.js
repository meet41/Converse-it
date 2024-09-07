import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Codathon from '../../team/Tech-poster/a4codathon.jpg';
import { useNavigate } from 'react-router-dom';

const Codathonpage = () => {

  const navigate = useNavigate();
  const handleButtonClick = (event) => {
    navigate('/register', { state: { event } });
  };
    return (
      <>    
      <ScrollToTop/>
       <div className="teams-section">
          <div className='lin'>
            <h1><Link to="/" >Home</Link></h1>
            <img src={great} className='symb'/>
            <h1><Link to="/events" >Events</Link></h1>
            <img src={great} className='symb'/>
            <h1><Link to="/tech-event" >Tech</Link></h1>
          </div>
      </div>            
      <div className="logo-hunt-page">
        <h1>CODATHON</h1>
        <div className="logo-hunt-content">
        <div className="logo-hunt-image">
              <img
                src={Codathon}
                alt="Codathon "
              />
              <button className="register-button" onClick={() => handleButtonClick('CODATHON')}>
              Register for Event
            </button>
            </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>Event Name: CODATHON</p>
            <p>Date: 20 September 2024</p>
            <p>Time: 1:30 PM - 3:30 PM</p>
            <p>Event Duration: 2 hours</p>
  
            <h3 className='logo3'>Rules:</h3>
            <ul>
              <li>The event is team-based (max. 2 members).</li>
              <li>Participants must be from the same institute.</li>
              <li>Languages allowed: C, C++, Java, Python</li>
              <li>Participants must solve the problems individually in each round.</li>
              <li>Round 1: MCQs on basic coding (45 minutes)</li>
              <li>Round 2: Code Debugging (45 minutes)</li>
              <li>Round 3: Code Development (60 minutes)</li>
            </ul>
  
            <h3 className='logo3'>Event Heads</h3>
            <ul>
              <li>RAHUL JOSHI - +91 82381 46212</li>
              <li>MITUL CHAUHAN - +91 79718 98263</li>
            </ul>
  
            <h3 className='logo3'>Volunteers</h3>
            <ul>
              <li>DHARSHIT PATEL </li>
              <li>ABHIJEET DESAI </li>
              <li>ANIKET PATEL </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  };
export default Codathonpage;
