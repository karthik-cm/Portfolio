import React from 'react'
import portfolioPic from '../Images/PortfolioPic.jpg'
import '../CSS/AboutMe.css';

const AboutMe = () => {
	return (
		<div id="aboutme" className="AboutMe container-fluid py-5">
			<div className="about-me-section justify-content-center">
				<div className="row">
					<h1 className="about-me-heading">About Me</h1>
				</div>

				<div className="row profile-img-wrap pt-5">
					<img className="profile-img" src={portfolioPic} alt="profile image.." />
				</div>

				<div className="about-me-main-text row pt-3">
					<h2 className="fw-bold">KARTHIK CM</h2>
					<h4 className="fw-bold">Computer Science Graduate Student at Santa Clara University</h4>
					<h4 className="fw-bold pt-3">Actively looking for SDE Internship positions starting Summer 2022</h4>
				</div>

				<div className="col-md-6 col-xs- row profile-details-section pt-3">
					<h5 className="about-me-description">
					   I have worked as Full Stack Developer at Tata Consultancy Services for over 4 years. 
					   I am specialized in designing and developing Enterprise Web applications assisted by Spring Framework. 
					   Also well versed in end to end software development life cycle activities like Design, Data Modeling, Unit/Functional Testing, Security, API, Version Control System
					</h5>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
