import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import About from './pages/About';
import Events from './pages/Events';
import TeamsSection from './pages/TeamSection';
import Converse from './pages/TeamMember/Converse';
import Graphics from './pages/TeamMember/Graphics';
import Marketing from './pages/TeamMember/Marketing';
import Photography from './pages/TeamMember/Photography';
import Registration from './pages/TeamMember/Registration';
import Sponsor from './pages/TeamMember/Sponsor';
import Decoration from './pages/TeamMember/Decoration';
import WebDevelopment from './pages/TeamMember/WebDevelopment';
import LogoHunt from './pages/TeamMember/LogoHunt';
import Itquiz from './pages/TeamMember/Itquiz';
import Bugbuzz from './pages/TeamMember/Bugbuzz';
import Codathon from './pages/TeamMember/Codathon';
import Pyit from './pages/TeamMember/Pyit';
import Aimemes from './pages/TeamMember/Aimemes';
import Techdebate from './pages/TeamMember/Techdebate';
import Cybersiege from './pages/TeamMember/Cybersiege';
import Webwave from './pages/TeamMember/Webwave';
import Techevent from './pages/event-type/Techevent';
import Nontech from './pages/event-type/Nontech';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="events" element={<Events/>}/>
    <Route path="team" element={<TeamsSection/>}/>
    <Route path="converse-team" element={<Converse/>}/>
    <Route path="web-team" element={<WebDevelopment/>}/>
    <Route path="graphics-team" element={<Graphics/>}/>
    <Route path="decoration-team" element={<Decoration/>}/>
    <Route path="marketing-team" element={<Marketing/>}/>
    <Route path="photography-team" element={<Photography/>}/>
    <Route path="registration-team" element={<Registration/>}/>
    <Route path="sponsor-team" element={<Sponsor/>}/>
    
    <Route path="logohunt-team" element={<LogoHunt/>}/>
    <Route path="itquiz-team" element={<Itquiz/>}/>
    <Route path="bugbuzz-team" element={<Bugbuzz/>}/>
    <Route path="codathon-team" element={<Codathon/>}/>
    <Route path="pyit-team" element={<Pyit/>}/>
    <Route path="aimemes-team" element={<Aimemes/>}/>
    <Route path="techdebate-team" element={<Techdebate/>}/>
    <Route path="cybersiege-team" element={<Cybersiege/>}/>
    <Route path="webwave-team" element={<Webwave/>}/>
    <Route path="tech-event" element={<Techevent/>}/>
    <Route path="nontech-event" element={<Nontech/>}/>
    
    </Routes>
  
    </>
  );
}
export default App;







// import React, { useState } from 'react';
// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/Homepage';
// import About from './pages/About';
// import Events from './pages/Events';

// function App() {
//   const [gifPosition, setGifPosition] = useState({ x: 0, y: 0 });
//   const [showGif, setShowGif] = useState(false);

//   const handleClick = (event) => {
//     if (event.target.tagName !== 'A') {
//       const x = event.clientX;
//       const y = event.clientY;

//       setGifPosition({ x, y });
//       setShowGif(true);

//       // Hide the GIF after 1 second
//       setTimeout(() => setShowGif(false), 1000);
//     }
//   };

//   return (
//     <div className="App" onClick={handleClick} style={{ height: '100vh' }}>
//       {showGif && (
//         <img
//           src="https://i.pinimg.com/originals/e4/d2/c1/e4d2c1d0da356797359acd9270bcdd77.gif"
//           alt="Click Animation"
//           style={{
//             position: 'absolute',
//             top: gifPosition.y,
//             left: gifPosition.x,
//             transform: 'translate(-50%, -50%)',
//             pointerEvents: 'none',
//             zIndex: 1000,
//           }}
//         />
//       )}

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="about" element={<About />} />
//         <Route path="events" element={<Events />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
