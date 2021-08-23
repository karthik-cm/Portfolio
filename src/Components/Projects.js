import React from 'react';
import '../CSS/Projects.css';

import ProjectsCard from '../Components/Generic/ProjectsCard';

import WEBAPP_IMAGE from '../Images/WebApp.png';

const PROJECTS = {
	'weather_app': ['Weather App', WEBAPP_IMAGE, 'Web Application', 'https://github.com/karthik-cm/Weather-App'],
	'music_store': ['The Music Store', WEBAPP_IMAGE, 'Spring MVC Application', 'https://github.com/karthik-cm/The-Music-Store']
}

const Projects = () => {
	return (
		<div className="Projects container-fluid pt-5">
			<div className="row">
				<h1 className="section-heading">Projects</h1>
			</div>

			{/* PROJECTS */}
			<div className="projects pt-3">
				<div>
					<ProjectsCard 
						title={PROJECTS.weather_app[0]} 
						image_url={PROJECTS.weather_app[1]} 
						body={PROJECTS.weather_app[2]} 
						link={PROJECTS.weather_app[3]}>
					</ProjectsCard>
				</div>

				<div className="padding-left-2">
					<ProjectsCard 
						title={PROJECTS.music_store[0]} 
						image_url={PROJECTS.music_store[1]} 
						body={PROJECTS.music_store[2]} 
						link={PROJECTS.music_store[3]}>
					</ProjectsCard>
				</div>
			</div>
		</div>
	)
}

export default Projects
