import React, { useState } from 'react';
import './Header.scss';

export default function Header() {
	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Services', href: '/services' },
	];

	const [headerClass, setHeaderClass] = useState('transparent');

	const listenScrollEvent = (e: any) => {
		if (window.scrollY > 100) {
			setHeaderClass('filled');
		} else {
			setHeaderClass('transparent');
		}
	};

	window.addEventListener('scroll', listenScrollEvent);

	return (
		<header className={headerClass}>
			<ul>
				{links.map((link) => {
					return (
						<li>
							<a href={link.href}>{link.label}</a>
						</li>
					);
				})}
			</ul>
			<h2 className="mask">Daniele Gargiulo</h2>
		</header>
	);
}
