import React from 'react';
import './About.scss';

function About() {
	return (
		<div className="page about header-padding">
			{/* about */}
			<section>
				<div className={'container'}>
					{/* presentation */}
					<div className={'column center'}>
						<h1 style={{ width: '100%' }}>
							<span className={'mask'}>Ciao</span>, I'm Daniele.
						</h1>
						<p className="l" style={{ width: '100%' }}>
							I’m a <b>Software developer</b> working remotely for <b>CodicePlastico</b> and their clients.
						</p>
						<p className="l" style={{ width: '100%' }}>
							I’ve spent the past 3+ years working across different areas of web development; front-end, back-end, UI/UX,
							animation, database... Most of my time is spent researching, designing, prototyping, and coding.
						</p>
						<p className="l" style={{ width: '100%' }}>
							When i'm not at work you’ll find me playing games, watching cartoons or walking around my city.
						</p>
					</div>
				</div>
			</section>

			{/* skills */}
			<section>
				<div className={'container bg-dark2'}></div>
			</section>
		</div>
	);
}

export default About;
