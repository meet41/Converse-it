import React from 'react';
import TeamCard from '../components/TeamCard';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import great from "./great.png";

const TeamsSection = () => {
    const teams = [
        { title: 'Converse', imageSrc: 'https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/converse-team' },
        { title: 'Web Team', imageSrc: 'https://th.bing.com/th/id/OIG4.lL1HeudmWRX2k6hOXZs6?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/web-team' },
        { title: 'Graphics  ', imageSrc: 'https://th.bing.com/th/id/OIG4.lL1HeudmWRX2k6hOXZs6?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/graphics-team' },
        { title: 'Decoration ', imageSrc: 'https://th.bing.com/th/id/OIG2.Yc6GfbdHmNGgE5XJQutc?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/decoration-team' },
        { title: 'Marketing ', imageSrc: 'https://th.bing.com/th/id/OIG1.B0yBf4S9ZAOxc8iuks7s?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/marketing-team' },
        { title: 'Sponsorship', imageSrc: 'https://th.bing.com/th/id/OIG3.7B.9LAJfE1qfwVTzTXlh?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/sponsor-team' },
        { title: 'Registration', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/registration-team' },
        { title: 'Photography', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/photography-team' },
        { title: 'Logo Hunt', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/logohunt-team' },
        { title: 'IT Quiz', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/itquiz-team' },
        { title: 'Bug Buzz', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/bugbuzz-team' },
        { title: 'Codathon', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/codathon-team' },
        { title: 'PY-IT', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/pyit-team' },
        { title: 'AI Memes', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/aimemes-team' },
        { title: 'Tech Debate', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/techdebate-team' },
        { title: 'Cyber Siege', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/cybersiege-team' },
        { title: 'Web Wave', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/webwave-team' },
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
                        <Link to="/team" >Team</Link>
                    </h1>
                </div>
                <div className='ex'>
                    <h2 >Meet the faces behind CONVERSE</h2>
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

export default TeamsSection;
