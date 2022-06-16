import React, { useState } from 'react';
import './Header.scss';

export default function Header() {
	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Services', href: '/services' },
	];

	const [backgroundColor, setBackgroundColor] = useState('transparent');

	const listenScrollEvent = (e: any) => {
		if (window.scrollY > 100) {
			setBackgroundColor('#3bab87');
		} else {
			setBackgroundColor('transparent');
		}
	};

	window.addEventListener('scroll', listenScrollEvent);

	return (
		<header style={{ backgroundColor: backgroundColor }}>
			<ul>
				{links.map((link) => {
					return (
						<li>
							<a href={link.href}>{link.label}</a>
						</li>
					);
				})}
			</ul>
		</header>
	);
}
