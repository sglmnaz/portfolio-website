import React from 'react';
import './Skills.scss';
const { skills } = require('src/config/config.json');
const images = require.context('../../../../../assets/icons/skills', true);

function Skills() {
	return <div className="skills">{getSkillsItems(skills)}</div>;
}

function getSkillsItems(skills: skill[]) {
	return skills.map((skill, index) => {
		return (
			<div key={index} className="skill">
				<img src={images(skill.src)} alt={skill.title}></img>
				<span>{skill.title}</span>
			</div>
		);
	});
}

type skill = {
	src: string;
	title: string;
};

export default Skills;
