import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    navigate('/register', { state: { event } });
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('IT QUIZ')}>Register for IT QUIZ</button>
      <button onClick={() => handleButtonClick('LOGO HUNT')}>Register for LOGO HUNT</button>
      <button onClick={() => handleButtonClick('BUG BUZZ')}>Register for BUG BUZZ</button>
      <button onClick={() => handleButtonClick('CODATHON')}>Register for CODATHON</button>
      <button onClick={() => handleButtonClick('PY-IT')}>Register for PY-IT</button>
      <button onClick={() => handleButtonClick('AI MEMES')}>Register for AI MEMES</button>
      <button onClick={() => handleButtonClick('TECH DEBATE')}>Register for TECH DEBATE</button>
      <button onClick={() => handleButtonClick('CYBER SIEGE')}>Register for CYBER SIEGE</button>
      <button onClick={() => handleButtonClick('WEB WAVE')}>Register for WEB WAVE</button>
    </div>
  );
};

export default Button;