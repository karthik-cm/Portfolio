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
					{/* <h4 className="fw-bold pt-4">Actively looking for SDE Internship positions starting Summer 2022</h4> */}
				</div>


				<div className="about-me-sub">
					<div className="col-md-12 col-xs-12 pt-5">
						<h5>
							<ul>
								<li>4+ years of work experience as a Full Stack Developer working at TCS serving the client on Insurance domain</li>
								<li>Skilled in designing and developing Standalone/Web Applications, Web Services, Batch Processing and Data Modeling</li>
								<li>Strong understanding and relevant applicability of Data Structures and Algorithms</li>
								{/* <li>Well versed in end to end software development life cycle activities like Design, Data Modeling, Unit/Functional Testing, Security, API, Version Control System</li> */}
						</ul>
						</h5>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default AboutMe
