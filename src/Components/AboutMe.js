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
					<h4 className="fw-bold pt-4 name">Actively looking for Software Engineer positions starting Mar '23</h4>
				</div>


				<div className="about-me-sub">
					<div className="col-md-12 col-xs-12 pt-5">
						<h5>
							<p>Summary:</p>
							<ul>
								<li>Tech Enthusiast who loves to solve real world problems using cutting-edge tech and tools</li>
								<li>4+ years of solid work experience as a Software Engineer (Java Full Stack)</li>
								<li>Strong understanding and relevant applicability of Data Structures and Algorithms</li>
								<li>Highly skilled in design and development of Enterprise Web Applications, RESTful Web Services, Batch Processing and Data Modeling</li>
								<li>Well versed in end to end Software Development Life Cycle (SDLC) activities like Design, Development, Data Modeling, Unit/Functional 
									<br/> Testing, Security, API, Version Control System, Agile</li>
							</ul>
						</h5>
					</div>

					<div className="col-md-12 col-xs-12 pt-4">
						<h5>
							<p className="underline">Technical Skills:</p>
							<ul>
								<li>Programming Languages: Java, Python, JavaScript, SQL</li>
								<li>Web Technologies: HTML5, CSS3, Bootstrap, jQuery, AJAX, PHP, Node.js, ReactJS</li>
								<li>Databases: MySQL, Oracle SQL, SQLite, MongoDB, AWS DynamoDB</li>
								<li>Cloud: AWS, EC2, OpenFaas, Docker, Kubernetes </li>
								<li>Other: Spring Framework  (MVC/Boot/JPA), Hibernate, Java EE, ORM, Apache Camel, REST APIs, JSP, 
										<br/> Git, JUnit, TestNG, Microservices, Amazon Web Services, Agile </li>
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

					<div className="col-md-12 col-xs-12 pt-4">
						<h5>
							<p className="underline">Email:</p>
							<ul>
								<li>karthikcmanjunath@gmail.com</li>
							</ul>
						</h5>
					</div>
				</div>

			</div>
		</div>
	)
}

export default AboutMe
