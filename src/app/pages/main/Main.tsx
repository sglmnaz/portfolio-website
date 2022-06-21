import React from 'react';
import './Main.scss';
import { ReactComponent as PinIcon } from '../../../assets/icons/pin.svg';
import Timeline from './components/Timeline';

function Main() {
	return (
		<div className="page main">
			{/* banner */}
			<section className={'napoli'}>
				<div className={'container'}>
					<div className={'column center'} style={{ marginRight: '4rem' }}>
						<h2>Software developer</h2>
						<h3>
							<PinIcon style={{ display: 'inline', width: '1.2rem' }}></PinIcon> Napoli metropolitan area
						</h3>
					</div>
				</div>
				<div className="gradient"></div>
			</section>

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

					{/* portrait */}
					<div className={'column center'} style={{ flex: '0.75' }}>
						<div className="portrait-container ">
							<img className="portrait" src={require('../../../assets/images/portrait_4_square_2.png')} alt="" />
						</div>
					</div>
				</div>
			</section>

			{/* timeline */}
			<section>
				<div className={'container'}>
					<Timeline />
				</div>
			</section>
		</div>
	);
}

export default Main;
