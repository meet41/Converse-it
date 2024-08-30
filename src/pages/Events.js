import React from 'react';
import TeamCard from '../components/TeamCard';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import great from "./great.png";

const Events = () => {
    const teams = [
        { title: 'Tech Event', imageSrc: 'https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/tech-event' },
       { title: 'Non-tech Event', imageSrc: 'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn', link: '/nontech-event' },
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
                </div>
                <div className='ex'>
                    <h2 >Register here for all the Fabulous Events </h2>
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

export default Events;
