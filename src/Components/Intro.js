import React from 'react'
import ReactTyped from 'react-typed';
import '../CSS/Intro.css';

const Intro = () => {
	return (
		<div className="intro-wrapper">
			<div className="intro-info">
				{/* <h1>Hey there, Welcome!</h1> */}

				<h1>Areas of Interest</h1>
				<ReactTyped 
					className="areas-of-interest" 
					strings={["Full Stack Development", "Web Design", "Web Development", "Game Development"]}
					typeSpeed={50}
					backSpeed={60}
					loop
				/>

				<a href="https://drive.google.com/file/d/1nRd3bfDdp6DOBAGPs7bEvFO360V5Od0f/view" target="_blank" className="my-resume">Resume</a>

				<a href="#" className="intro-contact-me">Contact Me</a>
			</div>
		</div>
	)
}

export default Intro