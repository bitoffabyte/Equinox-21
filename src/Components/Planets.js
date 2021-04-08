// import { useEffect, memo } from 'react';
// import Neptune from '../Assets/neptune.svg';
// import green from '../Assets/green.svg';
// import uranus from '../Assets/uranus.svg';
// import saturn from '../Assets/saturn.svg';
// import purple from '../Assets/purple.svg';
// import mars from '../Assets/mars.svg';
// import Parallax from 'parallax-js';
// import './Planets.css';

// const layers = [
// 	{
// 		name: 'Planet-1',
// 		image: Neptune,
// 		dataDepth: '0.01',
// 	},
// 	{
// 		name: 'Planet-2',
// 		image: green,
// 		dataDepth: '0.05',
// 	},
// 	{
// 		name: 'Planet-3',
// 		image: uranus,
// 		dataDepth: '0.03',
// 	},
// 	{
// 		name: 'Planet-4',
// 		image: saturn,
// 		dataDepth: '-0.06',
// 	},
// 	{
// 		name: 'Planet-5',
// 		image: purple,
// 		dataDepth: '0.07',
// 	},
// 	{
// 		name: 'Planet-6',
// 		image: mars,
// 		dataDepth: '0.04',
// 	},
// ];
// const Planets = () => {
// 	useEffect(() => {
// 		const scene = document.getElementById('scene');
// 		new Parallax(scene);
// 	});
// 	return (
// 		<div
// 			id='scene'
// 			style={{
// 				width: '100vw',
// 				height: '100vh',
// 				position: 'fixed',
// 				top: 0,
// 				zIndex: '10',
// 				// background: 'red',
// 			}}
// 		>
// 			{layers.map((l, index) => (
// 				<img
// 					key={index}
// 					data-depth={l.dataDepth}
// 					src={l.image}
// 					alt={l.name}
// 					className={`planets ${l.name}`}
// 				/>
// 			))}
// 		</div>
// 	);
// };

// export default memo(Planets);
