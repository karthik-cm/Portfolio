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
					{/* <h2 className="fw-bold name">KARTHIK CM</h2> */}
					<h2 className="fw-bold name">Karthik Cheernalli Manjunath</h2>
					<h4 className="fw-bold">Computer Science Graduate Student at Santa Clara University</h4>
					<h4 className="fw-bold pt-2 name">Actively looking for full time SWE opportunities starting Dec '22</h4>
				</div>


				<div className="about-me-sub">
					<div className="col-md-12 col-xs-12 pt-5">
						<h5>
							<ul>
								<li>A tech enthusiast who loves to solve real world problems using cutting-edge technologies and tools</li>
								<li>4+ years of industry experience as a Software Engineer in Full Stack Development domain</li>
								<li>Strong understanding and relevant applicability of Data Structures and Algorithms</li>
								<li>Highly skilled in design and development of Enterprise Web Applications, Web Services, Batch Processing and Data Modeling</li>
								{/* <li>Well versed in end to end software development life cycle (SDLC) activities like Agile, Design, Data Modeling, Development, Unit/Functional Testing, Security, API, Version Control System</li> */}
							</ul>
						</h5>
					</div>
				</div>

				<div className="about-me-sub">
					<div className="col-md-12 col-xs-12 pt-5">
						<h5>Programming Languages: C, C++, Java, Python, JavaScript, SQL</h5>
						<h5>Web Technologies: HTML5, CSS3, Bootstrap, jQuery, AJAX, PHP, Node.js, React JS</h5>
						<h5>Databases and Cloud: MySQL, Oracle SQL, SQLite, MongoDB, AWS, EC2, DynamoDB, Docker, OpenFaaS, Kubernetes</h5>
						<h5>Other: Spring Boot, Spring MVC, Hibernate, Java EE, REST APIs, JSP, Git, Maven, JUnit, TestNG, XML, JSON, Microservices</h5>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
