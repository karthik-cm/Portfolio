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
                date="Expected Mar 2023"
                iconStyle={{ background: '#000', color: '#fff', display:'block' }}
                // icon={<WorkIcon />}
            >
                {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
                <h3 className="vertical-timeline-element-title">M.S in Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">Santa Clara University, U.S.A</h4>
                <p>Coursework: Computer Architecture, Computer Networks, Advanced Database Systems, Web Architecture and Protocols, Cloud Computing, Distributed Systems, Advanced Web Programming, Design Patterns</p>
                <p>Activities: Web Developer Intern at Santa Clara University - Marketing and Communications team (Jul '21 to Jun '22)</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'2px solid #fff' }}
                contentArrowStyle={{ borderRight: '7px solid #f9ab00' }}
                date="Jun 2022 - Sep 2022"
                iconStyle={{ background: '#000', color: '#fff', display:'block' }}
                // icon={<WorkIcon />}
            >
                {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
                <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Guidewire, U.S.A</h4>
                <p>Background: Worked under Analytics and Data Services R&D team to develop Embedded Analytics Framework as part Summer 2022 Internship</p>
                <p>Tech Stack: Java, Apache Camel, ReactJS, AWS DynamoDB</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'2px solid #fff' }}
                contentArrowStyle={{ borderRight: '7px solid #f9ab00' }}
                date="Dec 2016 - Sep 2020"
                iconStyle={{ background: '#000', color: '#fff', display:'block' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services, INDIA</h4>
                <p>End to end design and development of Inusrance web application and associated backend services </p>
                <p>Tech Stack: Java, Spring MVC, Spring Batch, Spring REST, Oracle SQL, JSP, HTML5, CSS3, Bootstrap, JavaScript, jQuery, ReactJS</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'2px solid #fff' }}
                contentArrowStyle={{ borderRight: '7px solid #f9ab00' }}
                date="Sep 2012 - Jun 2016"
                iconStyle={{ background: '#000', color: '#fff', display:'block' }}
                // icon={<WorkIcon />} f9ab00
            >
                <h3 className="vertical-timeline-element-title">B.E in Information Science</h3>
                <h4 className="vertical-timeline-element-subtitle">Visvesvaraya Technological University, INDIA</h4>
                <p>Coursework: Operating Systems, Data Structures with C, Design and Analysis of Algorithms, Database Management Systems, JAVA and J2EE, Object Oriented Modeling and Design, Unix and Shell Programming, Programming the Web</p>
                <p>Activities: Volunteer and member of organizing committee for the College annual fest 'Cultura'</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
);

export default background;