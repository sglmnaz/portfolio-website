import React from 'react';
import './Main.scss';

function Main() {
	return (
		<div>
			<section className={'bg-dark1 block'}>
				<div className={'container'}>
					<div className={'column bg-dark1 center'} style={{ marginRight: '4rem' }}>
						<h1 className={'mask'} style={{ width: '100%' }}>
							Hi, I'm Daniele.
						</h1>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolores neque reprehenderit velit facere ducimus
							dolorum pariatur, aspernatur expedita? Fuga?
						</span>
					</div>
					<div className={'column bg-dark2'}></div>
				</div>
			</section>
			<section className={'bg-dark1 block'}>
				<div className={'container bg-dark2'}></div>
			</section>
		</div>
	);
}

export default Main;
