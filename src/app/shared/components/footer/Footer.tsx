import React from 'react';
import './Footer.scss';

function Footer() {
	return (
		<footer>
			<video autoPlay playsInline muted loop>
				<source src={require('../../../../assets/videos/video3.mp4')} type="video/mp4" />
			</video>
		</footer>
	);
}

export default Footer;
