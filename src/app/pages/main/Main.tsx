import './Main.scss';
// import { ReactComponent as PinIcon } from '../../../assets/icons/pin.svg';
import Timeline from './components/timeline/Timeline';
import Skills from './components/skills/Skills';

function Main() {
	return (
		<div className="page main">
			{/* banner */}
			<section className={'banner'}>
				<video autoPlay playsInline muted loop style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}>
					<source src={require('../../../assets/videos/video2.mp4')} type="video/mp4" />
				</video>
				<div className="gradient"></div>
				<div className={'container'}>
					<div className={'column center'} style={{ marginRight: '4rem' }}>
						<h2>Daniele Gargiulo</h2>
						<h3>Software developer</h3>
					</div>
				</div>
			</section>

			{/* about */}
			<section className=" hero">
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

			{/* skills */}
			<section className={'bg-dark0'}>
				<span className="section-title">Skills</span>
				<div className={'container dark0'}>
					<Skills />
				</div>
			</section>

			{/* timeline */}
			<section>
				<span className="section-title">Timeline</span>
				<div className={'container'}>
					<Timeline />
				</div>
			</section>
		</div>
	);
}

export default Main;
