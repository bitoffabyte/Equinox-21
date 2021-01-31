import React, { useEffect, useState } from 'react';
import { useScroll } from '../UseScroll';
import Moon from './Moon';
import Sun from './Sun';
import useDimension from '../useDimensions';
const TurningDiv = () => {
	const scroll = useScroll();
	const [radius, updateRadius] = useState(0);
	const { height, width } = useDimension();
	useEffect(() => {
		updateRadius(2 * Math.sqrt(height * height + width * width));
	}, [height, width]);
	return (
		<div
			style={{
				position: 'fixed',
				top: '100%',
				width: `${radius}px`,
				transform: `translateX(-50%) rotate(-${
					(scroll * 360) / 100 + 30
				}deg)`,
				zIndex: '100',
				background: '#ffffff',
			}}
		>
			<Moon />
			<Sun />
		</div>
	);
};

export default TurningDiv;
