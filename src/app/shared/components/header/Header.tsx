import React, { useState } from 'react';
import './Header.scss';

export default function Header() {
	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/about' },
		{ label: 'Contact', href: '/contact' },
		// { label: 'Services', href: '/services' },
	];

	const [headerClass, setHeaderClass] = useState('transparent');

	const listenScrollEvent = (e: any) => {
		if (window.scrollY > 0) {
			setHeaderClass('filled');
		} else {
			setHeaderClass('transparent');
		}
	};

	window.addEventListener('scroll', listenScrollEvent);

	return (
		<header className={headerClass}>
			<span>
				<b>D.G.</b>
			</span>
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
