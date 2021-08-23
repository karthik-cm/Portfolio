import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../CSS/Background.css';


const background = (props) => (
    <div className="Background container-fluid">
        <h1 className="section-heading">Background</h1>

        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'2px solid #fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fff' }}
                date="2021 - 2023"
                iconStyle={{ background: '#000', color: '#fff', display:'block' }}
            // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">M.S in Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">Santa Clara University</h4>
                <p>Coursework: Operating Systems, Computer Architecture, Design and Analysis of Algorithms</p>
                <p>Web Developer Intern at University Marketing and Communications team </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'2px solid #fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fff' }}
                date="2016 - 2020"
                iconStyle={{ background: '#000', color: '#fff', display:'block' }}
            // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services</h4>
                <p>
                    JAVA, J2EE, Spring Framework (MVC / Batch / REST), Oracle PL/SQL, JSP, JavaScript, jQuery, HTML5, CSS3, Bootstrap
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'2px solid #fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fff' }}
                date="2012 - 2016"
                iconStyle={{ background: '#000', color: '#fff', display:'block' }}
            // icon={<WorkIcon />} f9ab00
            >
                <h3 className="vertical-timeline-element-title">B.E in Information Science</h3>
                <h4 className="vertical-timeline-element-subtitle">Visvesvaraya Technological University</h4>
                <p>
                    Coursework: Design and Analysis of Algorithms, Data Structures with C, Database Management Systems, Operating Systems, JAVA and J2EE, Programming the Web
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
);

export default background;