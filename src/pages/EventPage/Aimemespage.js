import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Aimemes from '../../team/Tech-poster/a4aimemes.jpg';

const Aimemespage = () => {
 
    return (
      <>
        <ScrollToTop/>
        <div className="teams-section">
          <div className='lin'>
            <h1><Link to="/" >Home</Link></h1>
            <img src={great} className='symb'/>
            <h1><Link to="/events" >Events</Link></h1>
            <img src={great} className='symb'/>
            <h1><Link to="/tech-event" >Tech </Link></h1>
          </div>
        </div>
        <div className="logo-hunt-page">
          <h1>AI Memes</h1>
          <div className="logo-hunt-content">
            <div className="logo-hunt-image">
              <img
                src={Aimemes}
                alt="AI Memes"
              />
              <button className="register-button" >
              Register for Event
            </button>
            </div>
            <div className="logo-hunt-details">
              <h3 className='logo3'>Description</h3>
              <p>Event Name: AI Memes</p>
              <p>Date: 21 September 2024</p>
              <p>Time: 11:15 AM - 1:00 PM</p>
              <p>Event Duration: 1 Hour 45 Minutes</p>
              <p>Number of Rounds: 2</p>
  
              <h3 className='logo3'>Rules:</h3>
              <ul>
                <li>Individual Participation</li>
                <li>Memes should be related to AI and Tech</li>
                <li>Mobile phones are strictly prohibited</li>
              </ul>
  
              <h3 className='logo3'>Event Heads</h3>
              <ul>
                <li>Raj Kachhadiya - +91 90816 39576</li>
                <li>Mitul Tariwala - +91 92659 68056</li>
              </ul>
  
              <h3 className='logo3'>Event Volunteers</h3>
              <ul>
                <li>Virali Joshi</li>
                <li>Veer Patel</li>
                <li>Vatsal Makwana</li>
                <li>Zeel Boghra</li>
                <li>Ayushi Kyada</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  };
export default Aimemespage;
