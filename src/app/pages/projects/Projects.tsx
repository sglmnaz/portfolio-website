import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './Projects.scss';
import { FaGithub, FaEnvelope, FaLinkedin, FaBehance, FaGlobe } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
const { projects } = require('src/config/config.json');
const covers = require.context('src/assets/images/projects', true);

function Projects() {
	return (
		<div className="page projects">
			<section style={{ padding: '12rem 0' }}>{renderProjects(projects)}</section>
		</div>
	);
}

function renderProjects(projects: ProjectData[]) {
	return projects.reverse().map((project) => {
		return (
			<section className="project" key={project.title}>
				<div className={'container'}>
					<div className="cover" style={{ backgroundImage: `url(${covers(project.cover)})` }}></div>
					<div className="body">
						<h1 className="title">{project.title}</h1>
						<div className="technologies">
							{project.technologies.map((t: string) => {
								return <span className="technology">{t}</span>;
							})}
						</div>
						<div className="description">
							{project.description.map((paragraph) => {
								return <p>{paragraph}</p>;
							})}
						</div>
						<div className="footer">
							<span className="role">{project.role}</span>
							<div className="links">
								{project.links.map((link) => {
									return (
										<a href={link.url} target="_blank" aria-label={link.title}>
											{getIcon(link.title)}
										</a>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	});
}

type ProjectData = {
	title: string;
	role: string;
	technologies: string[];
	description: string[];
	links: {
		title: string;
		url: string;
	}[];
	cover: string;
};

function getIcon(title: string) {
	const map: { [key: string]: any } = {
		behance: (
			<>
				<span>preview on</span>
				<FaBehance />
			</>
		),
		github: (
			<>
				<span>source code</span>
				<FaGithub />
			</>
		),
		website: (
			<>
				<span>navigate</span>
				<GoBrowser />
			</>
		),
		playstore: (
			<>
				<span>download page</span>
				<IoLogoGooglePlaystore />
			</>
		),
	};

	return map[title];
}

export default Projects;
