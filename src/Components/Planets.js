import React from 'react';
import Neptune from '../Assets/neptune.svg';
import green from '../Assets/green.svg';
import uranus from '../Assets/uranus.svg';
import saturn from '../Assets/saturn.svg';
import purple from '../Assets/purple.svg';
import mars from '../Assets/mars.svg';
import './Planets.css';
const Planets = () => {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				position: 'fixed',
				top: 0,
				zIndex: '10',
				// background: 'red',
			}}
		>
			<img src={Neptune} className='neptune' />
			<img src={green} className='neptune' />
			<img src={uranus} className='neptune' />
			<img src={saturn} className='neptune' />
			<img src={purple} className='neptune' />
			<img src={mars} className='neptune' />
		</div>
	);
};

export default Planets;
