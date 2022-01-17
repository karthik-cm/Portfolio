import React from 'react';
import '../CSS/Projects.css';

import ProjectsCard from '../Components/Generic/ProjectsCard';
import WEBAPP_IMAGE from '../Images/WebApp.png';

const PROJECTS = {
	'inventory_tracking_system': ['Inventory Tracking System', WEBAPP_IMAGE, 'Enterprise Web Application', 'https://github.com/karthik-cm/Inventory-Tracking-System'],
	'weather_app': ['Weather App', WEBAPP_IMAGE, 'Web Application', 'https://github.com/karthik-cm/Weather-App'],
	'music_store': ['The Music Store', WEBAPP_IMAGE, 'Web Application', 'https://github.com/karthik-cm/The-Music-Store']
}



const Projects = () => {
	return (
		<div id="projects" className="Projects container-fluid py-5">
			<div className="row">
				<h1 className="section-heading">Projects</h1>
			</div>

			{/* PROJECTS */}
			<div className="projects">
				<div>
					<ProjectsCard 
						title={PROJECTS.inventory_tracking_system[0]} 
						image_url={PROJECTS.inventory_tracking_system[1]} 
						body={PROJECTS.inventory_tracking_system[2]} 
						link={PROJECTS.inventory_tracking_system[3]}>
					</ProjectsCard>
				</div>

				<div className="gap"></div>
				<div>
					<ProjectsCard 
						title={PROJECTS.weather_app[0]} 
						image_url={PROJECTS.weather_app[1]} 
						body={PROJECTS.weather_app[2]} 
						link={PROJECTS.weather_app[3]}>
					</ProjectsCard>
				</div>

				<div className="gap"></div>
				<div>
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
