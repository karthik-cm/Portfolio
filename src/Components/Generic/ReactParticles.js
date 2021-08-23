import React from 'react'
import ReactParticlesJs from 'react-particles-js';
import '../../CSS/Generic/ReactParticles.css';

const ReactParticles = () => {
	return (
		<ReactParticlesJs className="particles-canvas"
			params={{
				particles: {
					number: {
						value: 30,
						density: {
							enable: true,
							value_area: 900
						}
					},
					shape: {
						type: "circle",
						stroke: {
							width: 6,
							color: '#f9ab00'
						}
					}
				}
			}}
      	/>
	)
}

export default ReactParticles
