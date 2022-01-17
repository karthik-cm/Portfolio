import React from 'react'
import '../CSS/AboutMe.css';

import portfolioPic from '../Images/PortfolioPic.jpg'


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

				<div className="about-me-main row pt-4">
					<h2 className="fw-bold name">KARTHIK CM</h2>
					<h4 className="fw-bold">Computer Science Graduate Student at Santa Clara University</h4>
					<h4 className="fw-bold pt-2 name">Actively looking for Summer 2022 Internships</h4>
				</div>


				<div className="about-me-sub">
					<div className="col-md-12 col-xs-12 pt-5">
						<h5>
							<ul>
								<li>Result driven Software Engineer well versed in end to end SDLC activties coupled with great problem solving capabilities</li>
								<li>4+ years of Industry experience as a Software Engineer at leading IT services and consulting company</li>
								<li>Strong understanding and relevant applicability of Data Structures and Algorithms</li>
								<li>Highly skilled in designing and developing Enterprise Web Applications, Web Services, Batch Processing and Data Modeling</li>
								{/* <li>Well versed in end to end software development life cycle activities like Data Modeling, Unit/Functional Testing, Security, API, Version Control System</li> */}
							</ul>
						</h5>
					</div>
					<div class="pt-5">
						<h4>Tech Stack: Java, Python, Spring Boot, Spring MVC, SQL, REST API's, JSP, HTML5, CSS3, JavaScript, jQuery, ReactJS</h4>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default AboutMe
