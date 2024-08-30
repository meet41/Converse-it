import React from 'react';
import { Link } from 'react-router-dom';
import instagram from "./insta.png";
function Footer() {
  return (<>   
  <div className='back'> 
    <footer className="footer">
        <div className="footer-section">
          <h4>Head of Department</h4>
          <p>Dr. Viveksha Jariwala</p>
        </div>
        <div className="footer-section">
          <h4>Faculty Coordinators</h4>
          <p>Dr. Dhruti Sharma</p>
          <p>Prof. Bhumika Patel</p>
          <p>Dr. Mita Parikh</p>
          <p>Prof. Ashish Kharvar</p>
        </div>
        <div className="footer-section">
          <h4>Student Heads</h4>
          <p>Mitarsh Savaliya</p>
          <p>Jensi Ghadiya</p>
          <p>Harsh Maniya</p>
          <p>Shreya Chopra</p>
      
        </div>
        <div className="footer-section">
          <h4>Web Developers</h4>
          <p>Tilak Viradiya</p>
          <p></p>
          <p></p>
        </div>
      </footer>
      <section className="her">
        <div className="container">
          <h2 className="sub">
            Follow us on instagram !
          </h2>
          <div>
          
            <a
              href="https://www.instagram.com/converse_2k24?igsh=bmpwbnBxOHVpeWQz"
              className=""
              target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div>
          <p class="text-sm md:text-lg">© Converse 2024 - All Rights Reserved</p>
          </div>
        </div>
      </section>
      </div>
   
    </>

  );
}
export default Footer;