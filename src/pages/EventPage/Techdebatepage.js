import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link,useNavigate } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Techdebate from '../../team/Tech-poster/a4techdebate.jpg';

const Techdebatepage = () => {
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
            <h1><Link to="/tech-event" >Tech </Link></h1>
          </div>
        </div>
        <div className="logo-hunt-page">
          <h1>Tech Debate</h1>
          <div className="logo-hunt-content">
            <div className="logo-hunt-image">
              <img
                src={Techdebate}
                alt="Tech Debate"
              />
              <button className="register-button" onClick={() => handleButtonClick('TECH DEBATE')}>
              Register for Event
            </button>
            </div>
            <div className="logo-hunt-details">
              <h3 className='logo3'>Description</h3>
              <p>Event Name: Tech Debate</p>
              <p>Date: 21 September 2024</p>
              <p>Time: 10:00 AM - 11:00 AM</p>
              <p>Event Duration: 1 Hour</p>
              <p>Number of Rounds: 2</p>
  
              <h3 className='logo3'>Rules:</h3>
              <ul>
                <li>Individual Participation or Teams of 2</li>
                <li>Topic will be given on the spot</li>
                <li>Mobile phones are strictly prohibited during debates</li>
              </ul>
  
              <h3 className='logo3'>Event Heads</h3>
              <ul>
                <li>Shruti Desai</li>
                <li>Darakhsha Nasirwala</li>
              </ul>
  
              <h3 className='logo3'>Event Volunteers</h3>
              <ul>
                <li>Vyoma Kapadiya</li>
                <li>Hitakshi Mavani</li>
                <li>Rudraa Khadela</li>
                <li>Jil Rupani</li>
                <li>Het Salmawala</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  };
export default Techdebatepage;
