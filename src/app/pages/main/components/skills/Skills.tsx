import React from 'react';
import './Skills.scss';
const images = require.context('../../../../../assets/icons/skills', true);

function Skills() {
	const skills: skill[] = [
		{
			src: './typescript.svg',
			title: 'Typescript',
		},
		{
			src: './javascript.svg',
			title: 'Javascript',
		},
		{
			src: './nodejs.svg',
			title: 'Node.js',
		},
		{
			src: './react.svg',
			title: 'React',
		},
		{
			src: './angular.svg',
			title: 'Angular',
		},
		{
			src: './postgresql.svg',
			title: 'PostgreSQL',
		},
		{
			src: './git.svg',
			title: 'Git',
		},
		// {
		// 	src: './github.svg',
		// 	title: 'GitHub',
		// },
		{
			src: './unity.svg',
			title: 'Unity',
		},
		// {
		// 	src: './visual-studio-code.svg',
		// 	title: 'VSCode',
		// },
		// {
		// 	src: './chrome.svg',
		// 	title: 'Google',
		// },
		{
			src: './css-3.svg',
			title: 'CSS',
		},
		{
			src: './html-5.svg',
			title: 'HTML',
		},
		{
			src: './sass.svg',
			title: 'SASS',
		},
		// {
		// 	src: './terminal.svg',
		// 	title: 'cmd',
		// },
		{
			src: './figma.svg',
			title: 'Figma',
		},
		{
			src: './java.svg',
			title: 'Java',
		},
	];

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
