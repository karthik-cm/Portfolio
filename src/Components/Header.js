import React from 'react';
import '../CSS/Header.css';

import { Link } from 'react-scroll';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-darken-xl">
        <div className="container">
          
          <Link className="nav-link navbar-brand brand fw-bold">KARTHIK CM</Link>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="aboutme" className="nav-link">About Me</Link>
              </li>
              <li className="nav-item">
                <Link to="background" className="nav-link">Background</Link>
              </li>
              <li className="nav-item">
                <Link to="skills" className="nav-link">Skills</Link>
              </li>
              <li className="nav-item">
                <Link to="projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="contactme" className="nav-link">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header
