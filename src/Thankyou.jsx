import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Thankyou.css';

const Thankyou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const closeModal = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div class="container">
        <h2>Thank You for Registering!</h2>
        <p class="con-text">We appreciate your interest in participating in the tech competition at Converse 2K24.</p>
        
        <div class="info-box">
            <h3>Join Our WhatsApp Group for Updates</h3>
            <p class="info-text">Stay updated with the latest news, schedules, and announcements by joining our WhatsApp group.</p>
            {formData?.event === 'hackathon' ? (
            <a href="https://chat.whatsapp.com/HackathonLink" className="join-link" target="_blank">Join Hackathon WhatsApp Group</a>
          ) : (
            <a href="https://chat.whatsapp.com/OtherEventLink" className="join-link" target="_blank">Join WhatsApp Group</a>
          )}
        </div>
    </div>
  );
};

export default Thankyou;