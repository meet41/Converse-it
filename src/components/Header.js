import React, { useState } from 'react';
import logo from "./logo.png";
import confettiGif from "./confetti.gif"; 

function Header() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnimationTrigger = () => {
    setShowConfetti(true); // Show the confetti gif
    setTimeout(() => setShowConfetti(false), 3000); // Hide the gif after 3 seconds
  };

  return (
    <>
      <header className="header">
        <div className='logog' onClick={handleAnimationTrigger}>
          <img src={logo} alt="Logo" />
        </div>
        
        <div className='conve'>
          <h1 className="co" onClick={handleAnimationTrigger}>CO</h1>
          <h1 className="n" onClick={handleAnimationTrigger}>N</h1>
          <h1 className="ve" onClick={handleAnimationTrigger}>VE</h1>
          <h1 className="r" onClick={handleAnimationTrigger}>R</h1>
          <h1 className="se" onClick={handleAnimationTrigger}>SE</h1>
          <h1 className="year">2K24</h1>
        </div>
      </header>
      {showConfetti && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          pointerEvents: 'none',
          background: `url(${confettiGif}) center center / cover no-repeat`,
        }} />
      )}
    </>
  );
}

export default Header;
