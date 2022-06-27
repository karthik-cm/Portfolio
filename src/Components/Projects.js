import React from 'react';
import '../CSS/Projects.css';

import ProjectsCard from '../Components/Generic/ProjectsCard';
import WEBAPP_IMAGE from '../Images/WebApp.png';

const PROJECTS = {
	'waas': ['Workflow as a Service', WEBAPP_IMAGE, 'Platform as a Service', 'https://github.com/ccfernandes/workflow-as-a-service'],
	'its': ['Inventory Tracking System', WEBAPP_IMAGE, 'Enterprise Web Application', 'https://github.com/karthik-cm/Inventory-Tracking-System'],
	'wa': ['Weather App', WEBAPP_IMAGE, 'Web Application', 'https://github.com/karthik-cm/Weather-App'],
	'ms': ['The Music Store', WEBAPP_IMAGE, 'Web Application', 'https://github.com/karthik-cm/The-Music-Store']
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
						title={PROJECTS.waas[0]} 
						image_url={PROJECTS.waas[1]} 
						body={PROJECTS.waas[2]} 
						link={PROJECTS.waas[3]}>
					</ProjectsCard>
				</div>

				<div className="gap"></div>

				<div>
					<ProjectsCard 
						title={PROJECTS.its[0]} 
						image_url={PROJECTS.its[1]} 
						body={PROJECTS.its[2]} 
						link={PROJECTS.its[3]}>
					</ProjectsCard>
				</div>

				<div className="gap"></div>

				<div>
					<ProjectsCard 
						title={PROJECTS.wa[0]} 
						image_url={PROJECTS.wa[1]} 
						body={PROJECTS.wa[2]} 
						link={PROJECTS.wa[3]}>
					</ProjectsCard>
				</div>

				<div className="gap"></div>

				<div>
					<ProjectsCard 
						title={PROJECTS.ms[0]} 
						image_url={PROJECTS.ms[1]} 
						body={PROJECTS.ms[2]} 
						link={PROJECTS.ms[3]}>
					</ProjectsCard>
				</div>
			</div>
		</div>
	)
}

export default Projects
