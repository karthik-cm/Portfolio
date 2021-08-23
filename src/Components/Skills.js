import React from 'react';
import '../CSS/Skills.css';

import SkillsCard from './Generic/SkillsCard';

// Import Logos
import JAVA_LOGO_URL from '../Logos/Skills/java.svg';
import JAVASCRIPT_LOGO_URL from '../Logos/Skills/javascript.svg';
import PYTHON_LOGO_URL from '../Logos/Skills/python.svg';
import CPP_LOGO_URL from '../Logos/Skills/cpp.svg';

import ORACLE_LOGO_URL from '../Logos/Skills/oraclesql.svg';
import MYSQL_LOGO_URL from '../Logos/Skills/mysql.svg';
import SQLLITE_LOGO_URL from '../Logos/Skills/sqlite.svg';

import SPRING_LOGO_URL from '../Logos/Skills/spring.svg';
import HIBERNATE_LOGO_URL from '../Logos/Skills/hibernate.svg';

import HTML5_LOGO_URL from '../Logos/Skills/html5.svg';
import CSS3_LOGO_URL from '../Logos/Skills/css3.svg';
import BOOTSTRAP_LOGO_URL from '../Logos/Skills/bootstrap.svg';
import JQUERY_LOGO_URL from '../Logos/Skills/jquery.svg';
import REACTJS_LOGO_URL from '../Logos/Skills/reactjs.svg';

import GIT_LOGO_URL from '../Logos/Skills/git.svg';
import SELENIUM_LOGO_URL from '../Logos/Skills/selenium.svg';



const PROG_SKILLS = {
	'java': ['Java', JAVA_LOGO_URL],
	'javascript': ['JavaScript', JAVASCRIPT_LOGO_URL],
	'python': ['Python', PYTHON_LOGO_URL],
	'cpp': ['C++', CPP_LOGO_URL]
};

const DB_SKILLS = {
	'oraclesql': ['Oracle PL/SQL', ORACLE_LOGO_URL],
	'mysql': ['MySQL', MYSQL_LOGO_URL],
	'sqlite': ['SQLite', SQLLITE_LOGO_URL]
};

const FW_SKILLS = {
	'spring': ['Spring', SPRING_LOGO_URL],
	'hibernate': ['Hibernate', HIBERNATE_LOGO_URL]
};

const WEB_SKILLS = {
	'html5': ['HTML5', HTML5_LOGO_URL], 
	'css3': ['CSS3', CSS3_LOGO_URL],
	'bootstrap': ['Bootstrap', BOOTSTRAP_LOGO_URL],
	'jquery': ['jQuery', JQUERY_LOGO_URL],
	'reactjs': ['ReactJs', REACTJS_LOGO_URL]
};

const OTHER_SKILLS = {
	'git': ['Git', GIT_LOGO_URL],
	'selenium': ['Selenium', SELENIUM_LOGO_URL]
}



const Skills = () => {
	return (
		<div className="Skills container-fluid pt-5">
			<div className="row">
				<h1 className="section-heading">Skills</h1>
			</div>

			{/* PROGRAMMING */}
			<div className="programming">
				<h3>Programming</h3>
			</div>
			<div className="programming-skills pt-3">
				<div>
					<SkillsCard title={PROG_SKILLS.java[0]} image_url={PROG_SKILLS.java[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={PROG_SKILLS.javascript[0]} image_url={PROG_SKILLS.javascript[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={PROG_SKILLS.python[0]} image_url={PROG_SKILLS.python[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={PROG_SKILLS.cpp[0]} image_url={PROG_SKILLS.cpp[1]} body=""></SkillsCard>
				</div>
			</div>



			{/* DATABASES */}
			<div className="databases pt-5">
				<h3>Databases</h3>
			</div>
			<div className="databases-skills pt-3">
				<div>
					<SkillsCard title={DB_SKILLS.oraclesql[0]} image_url={DB_SKILLS.oraclesql[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={DB_SKILLS.mysql[0]} image_url={DB_SKILLS.mysql[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={DB_SKILLS.sqlite[0]} image_url={DB_SKILLS.sqlite[1]} body=""></SkillsCard>
				</div>
			</div>



			{/* FRAMEWORKS */}
			<div className="frameworks pt-5">
				<h3>Frameworks</h3>
			</div>
			<div className="frameworks-skills pt-3">
				<div>
					<SkillsCard title={FW_SKILLS.spring[0]} image_url={FW_SKILLS.spring[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={FW_SKILLS.hibernate[0]} image_url={FW_SKILLS.hibernate[1]} body=""></SkillsCard>
				</div>
			</div>



			{/* WEB TECHNOLOGIES */}
			<div className="web-technologies pt-5">
				<h3>Web Technologies</h3>
			</div>
			<div className="web-technologies-skills pt-3">
				<div>
					<SkillsCard title={WEB_SKILLS.html5[0]} image_url={WEB_SKILLS.html5[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={WEB_SKILLS.css3[0]} image_url={WEB_SKILLS.css3[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={WEB_SKILLS.bootstrap[0]} image_url={WEB_SKILLS.bootstrap[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={WEB_SKILLS.jquery[0]} image_url={WEB_SKILLS.jquery[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={WEB_SKILLS.reactjs[0]} image_url={WEB_SKILLS.reactjs[1]} body=""></SkillsCard>
				</div>
			</div>



			{/* OTHER TECHNOLOGIES */}
			<div className="other-technologies pt-5">
				<h3>Other Technologies</h3>
			</div>
			<div className="other-technologies-skills pt-3">
				<div>
					<SkillsCard title={OTHER_SKILLS.git[0]} image_url={OTHER_SKILLS.git[1]} body=""></SkillsCard>
				</div>

				<div className="padding-left-2">
					<SkillsCard title={OTHER_SKILLS.selenium[0]} image_url={OTHER_SKILLS.selenium[1]} body=""></SkillsCard>
				</div>
			</div>

		</div>
	)
}

export default Skills
