import React from 'react';
import '../../CSS/Generic/Card.css';

export default function Card({title, image_url, body}) {
	return (
		<div>
			<div className="card-container">
				<div className="image-container">
					<img src={image_url} alt="" />
				</div>
				<div className="card-content">
					<div className="card-title pt-2">
						<h3>{title}</h3>
					</div>
					<div className="card-body">
						<p>{body}</p>
					</div>
				</div>
			</div>
		</div>
	)
}