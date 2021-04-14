import React, { useEffect, useState } from 'react';
import { useScroll } from '../UseScroll';
import Moon from './Moon';
import Sun from './Sun';
import useDimension from '../useDimensions';
import { TurningDiv } from './Styles/TurningDiv-Style';
const TurningDivs = () => {
	const [scroll] = useScroll();
	const [radius, updateRadius] = useState(0);
	const { height, width } = useDimension();
	useEffect(() => {
		updateRadius(2 * Math.sqrt(height * height + width * width));
	}, [height, width]);
	return (
		<TurningDiv scroll={scroll * 3.6 + 30} radius={radius}>
			<Moon />
			<Sun />
		</TurningDiv>
	);
};
export default TurningDivs;
