import React from 'react';
import './Timeline.scss';
const { timelineData } = require('src/config/config.json');

function Timeline({ reverse = false }) {
	return <div className={'timeline ' + (reverse ? 'reverse' : '')}>{getTimelineItems(timelineData)}</div>;
}

function getTimelineItems(entries: TimelineEntry[]) {
	return entries.map((entry: TimelineEntry, index: number) => {
		return (
			<div className="timeline-row" key={index}>
				<div className="date">
					{entry.startDate} - {entry.endDate}
				</div>
				<div className="line">
					<div className="point"></div>
				</div>
				<div className="data">
					<h3 className="title">{entry.title}</h3>
					<span className="company">{entry.company}</span>
					<p className="description">{entry.description}</p>
				</div>
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
