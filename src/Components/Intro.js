import React from 'react'
import ReactTyped from 'react-typed';
import '../CSS/Intro.css';

import linkedinIcon from '../Logos/linkedin.svg';
import githubIcon from '../Logos/github.svg';

// Constants
const AREAS_OF_INTEREST = ["Web Design", "Web Development", "Full Stack Development", "Game Development"];
const RESUME_URL = 'https://drive.google.com/file/d/1nRd3bfDdp6DOBAGPs7bEvFO360V5Od0f/view';

const Intro = () => {
	return (
		<div className="intro-wrapper">
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
						<a href="https://www.linkedin.com/karthik-cm/" target="_blank">
							<img className="linkedin-logo" src={linkedinIcon} />
						</a>
					</span>
					<span style={{ paddingLeft: '2rem' }}></span>
					<span className="github-section">
						<a href="https://www.github.com/karthik-cm/" target="_blank">
							<img className="github-logo" src={githubIcon} />
						</a>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Intro