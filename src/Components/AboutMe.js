import React from 'react'
import portfolioPic from '../Images/PortfolioPic.jpg'
import '../CSS/AboutMe.css';

const AboutMe = () => {
	return (
		<div className="AboutMe conatiner py-5" style={{width: "99%"}}>
			<div className="row">
				<div className="col-lg-6 col-xm-12 profile-img-section">
					<div className="profile-img-wrap">
						<img className="profile-img" src={portfolioPic} alt="profile image.." />
					</div>
				</div>
				<div className="col-lg-4 col-xm-8 profile-details-section">
					<h1 className="about-me-heading">About Me</h1>
					<p className="about-me-description">
					   Hello everyone, I am currently pursuing Master's in Computer Science course at Santa Clara University (Mar 21 - Mar 23).
					   I have worked as Full Stack Developer at Tata Consultancy Services for over 4 years. 
					   I am specialized in designing and developing Enterprise Web applications assisted by Spring Framework. 
					   Also well versed in end to end software development life cycle activities like Design, Data Modeling, Unit/Functional Testing, Security, API, Version Control System
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
