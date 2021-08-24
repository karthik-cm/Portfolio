import React from 'react'
import ReactTyped from 'react-typed';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

import '../CSS/Intro.css';

import linkedinIcon from '../Logos/linkedin.svg';
import githubIcon from '../Logos/github.svg';
import gmailIcon from '../Logos/gmail.svg';

// Constants
const AREAS_OF_INTEREST = ["A Java Geek", "Web Design", "Web Development", "Full Stack Development", "Game Development"];
const RESUME_URL = 'https://drive.google.com/file/d/1nRd3bfDdp6DOBAGPs7bEvFO360V5Od0f/view';

const Intro = () => {
	return (
		<div id="home" className="Intro container-fluid intro-wrapper">
			<div className="intro-info">
				{/* <h1>Hey there, Welcome!</h1> */}

				<h1>Areas of Interest</h1>

				<ReactTyped 
					className="areas-of-interest" 
					strings={AREAS_OF_INTEREST}
					typeSpeed={50}
					backSpeed={60}
					loop
				/>

				<a href={RESUME_URL} target="_blank" className="my-resume">Resume</a>

				<a href="#" className="intro-contact-me">Contact Me</a>

				<div className="social-media-section">
					<span className="linkedin-section">
						<a href="https://www.linkedin.com/in/karthik-cm/" target="_blank">
							<img className="linkedin-logo" src={linkedinIcon} />
						</a>
					</span>
					<span style={{ paddingLeft: '2rem' }}></span>
					<span className="github-section">
						<a href="https://github.com/karthik-cm/" target="_blank">
							<img className="github-logo" src={githubIcon} />
						</a>
					</span>
					<span style={{ paddingLeft: '2rem' }}></span>
					<span className="gmail-section">
						<a href="https://mail.google.com/mail/?view=cm&fs=1&to=karthikcm.77@gmail.com" target="_blank">
							<img className="gmail-logo" src={gmailIcon} />
						</a>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Intro