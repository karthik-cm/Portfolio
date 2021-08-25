import React from 'react';
import '../CSS/Footer.css';

import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll';




const Footer = () => {
	return (
		<div className="Footer container-fluid">
			<div className="row">
				<div className="contact-section col-lg-3 col-md-3 col-sm-6">
					<div>
						<p>Santa Clara, CA 95050</p>
					</div>
					<div>
						<a href="https://mail.google.com/mail/?view=cm&fs=1&to=karthikcm.77@gmail.com" target="_blank">karthikcm.77@gmail.com</a>
					</div>
				</div>
				
				<div className="link-section col-lg-3 col-md-3 col-sm-6">
					<div className="footer-links justify-content-center">
						<Link to="home" className="footer-nav">Home</Link>
						<span className="footergap"></span>
						
						<Link to="aboutme" className="footer-nav">About Me</Link>
						<span className="footergap"></span>

						<Link to="background" className="footer-nav">Background</Link>
						<span className="footergap"></span>
					</div>
				</div>
				<div className="link-section col-lg-3 col-md-3 col-sm-6">
					<div className="footer-links justify-content-center">
						<Link to="skills" className="footer-nav">Skills</Link>
						<span className="footergap"></span>

						<Link to="projects" className="footer-nav">Projects</Link>
						<span className="footergap"></span>

						<Link to="contactme" className="footer-nav">Contact Me</Link>
					</div>
				</div>
				
				<div className="social-media-section col-lg-3 col-md-3 col-sm-6">
					<div className="d-flex justify-content-center">
						<SocialIcon url="https://www.linkedin.com/in/karthik-cm/" target="_blank" bgColor="#fff" style={{ height: 40, width: 40 }} />
						
						<span className="footergap"></span>
						<SocialIcon url="https://github.com/karthik-cm/" target="_blank" bgColor="#fff" style={{ height: 40, width: 40 }} />
						
						<span className="footergap"></span>
						<SocialIcon url="https://www.facebook.com/kar7hikcm" target="_blank" bgColor="#fff" style={{ height: 40, width: 40 }} />
					</div>
				</div>

				<h6 className="copyrights-section text-center justify-content-center">
					&copy;Copyrights&nbsp;
					{new Date().getFullYear()}.&nbsp;KARTHIK CM. All Rights Reserved.
				</h6>
			</div>
		</div>
	)
}

export default Footer
