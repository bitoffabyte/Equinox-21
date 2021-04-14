import React from 'react';
import img from '../Assets/robovitics.png';
const Robo = () => {
	return (
		<img
			src={img}
			style={{
				position: 'fixed',
				bottom: '3%',
				right: '1%',
				width: '15%',
				zIndex: '1000000000',
			}}></img>
	);
};

export default Robo;
