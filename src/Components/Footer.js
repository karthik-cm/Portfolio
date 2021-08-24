import React from 'react';
import '../CSS/Footer.css';

import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll';

const Footer = () => {
	return (
		<div className="Footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-6">
						<div className="d-flex">
							<p>Santa Clara, California 95050</p>
						</div>
						<div className="d-flex">
							<a href="https://mail.google.com/mail/?view=cm&fs=1&to=karthikcm.77@gmail.com" target="_blank">karthikcm.77@gmail.com</a>
						</div>
					</div>
					
					<div className="col-lg-6 col-md-6 col-sm-8 justify-content-center">
						<div className="d-flex justify-content-center">
							<Link to="home" className="footer-nav" href="">Home</Link>
							<span style={{paddingLeft: '1rem'}}></span>
							
							<Link to="aboutme" className="footer-nav" href="">About Me</Link>
							<span style={{paddingLeft: '1rem'}}></span>

							<Link to="background" className="footer-nav" href="">Background</Link>
							<span style={{paddingLeft: '1rem'}}></span>

							<Link to="skills" href="">Skills</Link>
							<span style={{paddingLeft: '1rem'}}></span>

							<Link to="projects" href="">Projects</Link>
							<span style={{paddingLeft: '1rem'}}></span>

							<Link to="contactme" className="footer-nav" href="">Contact Me</Link>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-3 col-sm-6 text-center">
						<div className="d-flex justify-content-center">
							<SocialIcon url="https://www.linkedin.com/in/karthik-cm/" target="_blank" bgColor="#fff" style={{ height: 40, width: 40 }} />
							<span style={{paddingLeft: '1rem'}}></span>
							<SocialIcon url="https://github.com/karthik-cm/" target="_blank" bgColor="#fff" style={{ height: 40, width: 40 }} />
							<span style={{paddingLeft: '1rem'}}></span>
							<SocialIcon url="https://www.facebook.com/kar7hikcm" target="_blank" bgColor="#fff" style={{ height: 40, width: 40 }} />
						</div>
					</div>

					<h6 className="pt-5 text-center">
						&copy;Copyrights&nbsp;
						{new Date().getFullYear()}.&nbsp;KARTHIK CM. All Rights Reserved.
					</h6>
				</div>
			</div>
		</div>
	)
}

export default Footer
