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
					<h4 className="fw-bold pt-4 name">Actively looking for full time SWE opportunities starting Jan '23</h4>
				</div>


				<div className="about-me-sub">
					<div className="col-md-12 col-xs-12 pt-5">
						<h5>
							<p>Summary:</p>
							<ul>
								<li>A tech enthusiast who loves to solve real world problems using cutting-edge technologies and tools</li>
								<li>4+ years of industry experience as a Software Engineer in Full Stack Development domain</li>
								<li>Strong understanding and relevant applicability of Data Structures and Algorithms</li>
								<li>Highly skilled in design and development of Enterprise Web Applications, Web Services, Batch Processing and Data Modeling</li>
								{/* <li>Well versed in end to end software development life cycle (SDLC) activities like Agile, Design, Data Modeling, Development, Unit/Functional Testing, Security, API, Version Control System</li> */}
							</ul>
						</h5>
					</div>

					<div className="col-md-12 col-xs-12 pt-4">
						<h5>
							<p className="underline">Technical Skills:</p>
							<ul>
								<li>Programming Languages: C, C++, Java, Python, JavaScript, SQL</li>
								<li>Web Technologies: HTML5, CSS3, Bootstrap, jQuery, AJAX, PHP, Node.js, React JS</li>
								<li>Databases and Cloud: MySQL, Oracle SQL, SQLite, MongoDB, AWS, EC2, DynamoDB, Docker, OpenFaaS, Kubernetes</li>
								<li>Other: Spring Boot, Spring MVC, Hibernate, JPA, Java EE, JDBC, Log4j, REST APIs, JSP, Servlets, Git, Maven, Gradle, JUnit, TestNG,
									<br/>XML, JSON, UI/UX, NPM, Microservices, Web Services, Data Modeling, Batch Processing, JIRA, BitBucket, Agile </li>
							</ul>
						</h5>
					</div>

					<div className="col-md-12 col-xs-12 pt-4">
						<h5>
							<p className="underline">Areas of Interests:</p>
							<ul>
								<li>Software Development - Full Stack / Back End / Front End</li>
								<li>Game Development</li>
							</ul>
						</h5>
					</div>

				</div>

			</div>
		</div>
	)
}

export default AboutMe
