import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import TeamCard from '../../components/TeamCard';
import Footer from '../../components/Footer';
import great from "./great.png";
const Techevent = () => {
    const teams = [
   
        { title: 'Logo Hunt', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/logohunt-event' },
        { title: 'IT Quiz', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/itquiz-event' },
        { title: 'Bug Buzz', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/bugbuzz-event' },
        { title: 'Codathon', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/codathon-event' },
        { title: 'PY-IT', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/pyit-event' },
        { title: 'AI Memes', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/aimemes-event' },
        { title: 'Tech Debate', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/techdebate-event' },
        { title: 'Cyber Siege', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/cybersiege-event' },
        { title: 'Web Wave', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/webwave-event' },
    ];

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
                <div className='ex'>
                    <h2 >Explore the Tech Events</h2>
                </div>
                <div className="team-cards-container">
                    {teams.map((team, index) => (
                        <Link key={index} to={team.link}>
                            <TeamCard title={team.title} imageSrc={team.imageSrc} />
                        </Link>
                        
                    ))}
                </div>
              
            </div>
            <Footer/>
        </>
    );
};

export default Techevent;
