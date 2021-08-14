import React from 'react'
import ReactTyped from 'react-typed';

const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="header-info">
				<h1>Hey there, Welcome!</h1>

				<ReactTyped 
					className="areas-of-interest" 
					strings={["Full Stack Development", "Web Design", "Web Development", "Game Development"]}
					typeSpeed={50}
					backSpeed={60}
					loop
				/>

				<a href="#" className="header-contact-me">Contact Me</a>
			</div>
		</div>
	)
}

export default Header