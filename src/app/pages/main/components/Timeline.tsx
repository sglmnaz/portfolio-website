import React from 'react';
import './Timeline.scss';

function Timeline() {
	const timelineEntries = [
		{
			startDate: '2019',
			endDate: '2019',
			company: 'Self-Employed',
			title: 'Freelancer game developer',
			description:
				'I started working as a freelancer in 2019. I was working on a project for a client, and I was able to get a job as a freelancer.',
		},
		{
			startDate: '2019',
			endDate: '2019',
			company: 'Apple Developer Academy',
			title: 'iOS Developer Apprentice',
			description:
				'I started working as a full-time developer in 2020. I was working on a project for a client, and I was able to get a job as a full-time developer.',
		},
		{
			startDate: '2019',
			endDate: '2020',
			company: 'SyncLab',
			title: 'Full stack developer',
			description:
				'I started working as a part-time developer in 2020. I was working on a project for a client, and I was able to get a job as a part-time developer.',
		},
		{
			startDate: '2020',
			endDate: new Date().getFullYear().toString(),
			company: 'CodicePlastico',
			title: 'Full stack developer',
			description:
				'I started working as a remote developer in 2020. I was working on a project for a client, and I was able to get a job as a remote developer.',
		},
	];

	return <div className="timeline">{getTimelineItems(timelineEntries)}</div>;
}

function getTimelineItems(entries: TimelineEntry[]) {
	return entries.map((entry: TimelineEntry, index: number) => {
		return (
			<div className="timeline-card" key={index}>
				<div className="header row">
					<div className="company">{entry.company}</div>
					<div className="date">
						{entry.startDate} - {entry.endDate}
					</div>
				</div>
				<div className="title">{entry.title}</div>
				<div className="description">{entry.description}</div>
			</div>
		);
	});
}

type TimelineEntry = {
	startDate: string;
	endDate: string;
	title: string;
	description: string;
	company: string;
};

export default Timeline;
