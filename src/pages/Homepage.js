import React from 'react';
import { Link } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SponsorCard from '../components/SponsorCard';





const HomePage = () => {
  const teams = [
    { title: 'Career line ', imageSrc: 'https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/converse-team' },
    { title: 'House of sanskruti', imageSrc: 'https://th.bing.com/th/id/OIG4.lL1HeudmWRX2k6hOXZs6?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/web-team' },
    { title: 'Bull Rider', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/webwave-team' },
  ];
  return (<>
    <Header />
    <ScrollToTop />

    <div className="hompage">


      <div className="conten">

        <div className="explor-section">

          <p className="tilaks">EXPLORE THE FEST</p>

          <ul className="menu">
            <li><Link to="/aboutpage" >ABOUT</Link></li>
            <li><Link to="/events" >EVENTS</Link></li>
            <li><Link to="/schedule" >SCHEDULE</Link></li>
            <li><Link to="/team" >TEAMS</Link></li>
            {/* <li><Link to="/sponsors" >SPONSORS</Link></li> */}
          </ul>
          <p className="welcom-message">WELCOME TO 2024 EDITION OF CONVERSE</p>

        </div>
        <div className='tilak'>
          <div>
            <p className="tilaks">Title Sponsors</p>
         </div>
         <div className='spo'><SponsorCard/></div>
        </div>

      </div>

    </div>
    <Footer />
  </>
  );
};

export default HomePage;
