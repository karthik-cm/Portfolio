import React from 'react';
import '../../CSS/Generic/Card.css';


export default function ProjectsCard({title, image_url, body, link}) {
	return (
		<div className="projects-card">
			<div className="card-container">
				<div className="projects-image-container"> {/* For Projects Section */}
					<img src={image_url} alt="" />
				</div>
				<div className="card-content">
					<div className="card-title pt-2">
						<h4>{title}</h4>
					</div>
					<div className="card-body">
						<h5>{body}</h5>
					</div>
					<div className="card-link pb-2">
						<a className="card-url fw-bold" target="_blank" href={link}>GitHub</a>
					</div>
				</div>
			</div>
		</div>
	)
}