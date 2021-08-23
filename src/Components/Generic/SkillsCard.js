import React from 'react';
import '../../CSS/Generic/Card.css';

export default function SkillsCard({title, image_url}) {
	return (
		<div>
			<div className="card-container">
				<div className="skills-image-container"> {/* For Skills Section */}
					<img src={image_url} alt="" />
				</div>
				<div className="card-content">
					<div className="card-title pt-2">
						<h4>{title}</h4>
					</div>
				</div>
			</div>
		</div>
	)
}