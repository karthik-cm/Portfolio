import React from 'react';
import '../CSS/Background.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUniversity, faGraduationCap } from '@fortawesome/free-solid-svg-icons';



const background = (props) => (
    <div id="background" className="Background container-fluid">
        <h1 className="section-heading">Background</h1>

        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'2px solid #fff' }}
                contentArrowStyle={{ borderRight: '7px solid #f9ab00' }}
                date="2021 - 2023"
                iconStyle={{ background: '#000', color: '#fff', display:'block' }}
                // icon={<WorkIcon />}
            >
                {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
                <h3 className="vertical-timeline-element-title">M.S in Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">Santa Clara University</h4>
                <p>Coursework: Computer Architecture</p>
                <p>Web Developer Intern at University Marketing and Communications team </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'2px solid #fff' }}
                contentArrowStyle={{ borderRight: '7px solid #f9ab00' }}
                date="2016 - 2020"
                iconStyle={{ background: '#000', color: '#fff', display:'block' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services</h4>
                <p>End to end design/development of Web App for 'HDFC Life Insurance' </p>
                <p>Tech Stack: JAVA, Spring Framework (MVC/Batch/REST), Oracle PL/SQL, JSP, JavaScript, jQuery, HTML5, CSS3, Bootstrap</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'2px solid #fff' }}
                contentArrowStyle={{ borderRight: '7px solid #f9ab00' }}
                date="2012 - 2016"
                iconStyle={{ background: '#000', color: '#fff', display:'block' }}
                // icon={<WorkIcon />} f9ab00
            >
                <h3 className="vertical-timeline-element-title">B.E in Information Science</h3>
                <h4 className="vertical-timeline-element-subtitle">Visvesvaraya Technological University</h4>
                <p>Coursework: Design and Analysis of Algorithms, Data Structures with C, Database Management Systems, JAVA and J2EE, Programming the Web</p>
                <p>Volunteer and member of organizing committee for the College annual fest</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
);

export default background;