import React from 'react'
import '../CSS/Home.css';

import ReactTyped from 'react-typed';

import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll';


// Constants
const AREAS_OF_INTEREST = ["A Java Geek", "Web Design", "Web Development", "Full Stack Development", "Game Development"];
const RESUME_URL = 'https://drive.google.com/file/d/1ZynfWGjkgMRWdxSLAHAD-KYjA_XPx2bq/view';

const Home = () => {
	return (
		<div id="home" className="Intro container-fluid intro-wrapper">
			<div className="intro-info">
				<h2>Actively looking for SDE Internships staring Spring / Summer 2022</h2>

				{/* Typed Text Effect */}
				<ReactTyped 
					className="areas-of-interest" 
					strings={AREAS_OF_INTEREST}
					typeSpeed={60}
					backSpeed={70}
					loop
				/>
				

				{/* Resume */}
				<a href={RESUME_URL} target="_blank" className="my-resume">Resume</a>


				{/* Contact Me */}
				{/* <Link to="contactme" className="intro-contact-me">Contact Me</Link> */}


				{/* LinkedIn, GitHub, Gmail */}
				<div className="social-media-section pt-2">
					<span className="linkedin-section">
						<SocialIcon url="https://www.linkedin.com/in/karthik-cm/" target="_blank" bgColor="#fff" style={{ height: 50, width: 50 }} />
					</span>
					<span style={{ paddingLeft: '2rem' }}></span>

					<span className="github-section">
						<SocialIcon url="https://github.com/karthik-cm/" target="_blank" bgColor="#fff" style={{ height: 50, width: 50 }} />
					</span>
				</div>
			</div>
		</div>
	)
}

export default Home