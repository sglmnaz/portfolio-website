import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.scss';

export default function Header() {
	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/projects' },
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
			<span
				className="initials desktop"
				style={{ cursor: 'pointer' }}
				onClick={() => {
					window.scrollTo(0, 0);
				}}
			>
				DG
			</span>
			<ul>
				{links.map((link) => {
					return <HeaderLink key={link.href} label={link.label} href={link.href} />;
				})}
			</ul>
		</header>
	);
}

function HeaderLink({ label, href }: { label: string; href: string }) {
	const resolvedPath = useResolvedPath(href);
	const isActive = useMatch({ path: resolvedPath.pathname });

	return (
		<li>
			<Link className={isActive ? 'active' : ''} to={href}>
				{label}
			</Link>
		</li>
	);
}
