import { EarthImg, EarthDiv } from './Styles/Earth-Style.js';
import { useScroll } from '../UseScroll';
import { memo } from 'react';
const Earth = () => {
	const scroll = useScroll();
	return (
		<EarthDiv>
			<EarthImg angle={-(scroll * 360) / 100}></EarthImg>
		</EarthDiv>
	);
};

export default memo(Earth);
