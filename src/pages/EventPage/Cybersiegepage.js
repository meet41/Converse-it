import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Cybersiege from '../../team/Tech-poster/a4cybersiege.jpg';

const Cybersiegepage = () => {
 
    return (
      <>
        <ScrollToTop />
        <div className="teams-section">
          <div className='lin'>
            <h1><Link to="/">Home</Link></h1>
            <img src={great} className='symb' />
            <h1><Link to="/events">Events</Link></h1>
            <img src={great} className='symb' />
            <h1><Link to="/tech-event">Tech</Link></h1>
          </div>
        </div>
        <div className="logo-hunt-page"> {/* Keeping the same class name */}
          <h1>Cyber Siege</h1>
          <div className="logo-hunt-content">
            <div className="logo-hunt-image">
              <img
                src={Cybersiege}
                alt="Cyber Siege"
              />
              <button className="register-button" >
              Register for Event
            </button>
            </div>
            <div className="logo-hunt-details"> {/* Keeping the same class name */}
              <h3 className='logo3'>Description</h3>
              <p>Event Name: Cyber Siege</p>
              <p>Number of Rounds: 2</p>
  
              <h3 className='logo3'>Date & Time</h3>
              <p>Friday, 20th September 2024</p>
              <p>Round 1: 02:30 PM to 03:00 PM (Lab-1, 2, 3)</p>
              <p>Round 2: 03:00 PM to 04:15 PM (Lab-1, 2, 3)</p>
  
              <h3 className='logo3'>Round 1: Quiz Round</h3>
              <p>Time Duration: 20 minutes</p>
              <ul>
                <li>Individual Participation</li>
                <li>20 questions based on fundamentals of IT and Cyber</li>
                <li>Computer-based quiz</li>
              </ul>
  
              <h3 className='logo3'>Round 2: Challenges</h3>
              <p>Time Duration: 1 hour</p>
              <ul>
                <li>Top 25 students selected from Round 1</li>
                <li>Challenges to complete</li>
                <li>Online resources are permitted</li>
                <li>Tasks and completion time will be noted</li>
              </ul>
  
              <h3 className='logo3'>Event Heads</h3>
              <ul>
                <li>Malav Radia - +91 9023538442</li>
                <li>Abhishek Dhanani - +91 6354593544</li>
                <li>Diya Patel - +91 9904315296</li>
              </ul>
  
              <h3 className='logo3'>Volunteers</h3>
              <ul>
                <li>Rahul Soni</li>
                <li>Deep Patel</li>
                <li>Manan Chodvadiya</li>
                <li>Vishva Gohil</li>
                <li>Rishi Ginoya</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

export default Cybersiegepage;
