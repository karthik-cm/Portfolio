import React from 'react';
import { Chrono } from 'react-chrono';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const background = (props) => (
    <div className="Background">
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'1px solid white' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2019 - 2021"
                iconStyle={{ background: '#192841', color: '#fff', display:'none' }}
            // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">MS in Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">University at Buffalo</h4>
                <p>
                    Courses: Analysis of Algorithms, Object Oriented Analysis and Design,  Distributed Systems, Computer Vision and Image Processing, Information Retrieval, Machine Learning, Data Models and Query Languages, Data Intensive Computing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'1px solid white' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2017 - 2019"
                iconStyle={{ background: '#192841', color: '#fff', display:'none' }}
            // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Software Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services</h4>
                <p>
                    J2EE, Spring Batch, JAX-WS Web Clients, Oracle SQL Developer
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'transparent', color: '#fff', border:'1px solid white' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2013 - 2017"
                iconStyle={{ background: '#192841', color: '#fff', display:'none' }}
            // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
                <h4 className="vertical-timeline-element-subtitle">SASTRA University</h4>
                <p>
                    Programming in C,C++, RDBMS, Unix Operating System
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
);

export default background;