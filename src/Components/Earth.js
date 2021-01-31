import { EarthImg, EarthDiv } from './Styles/Earth-Style.js';
import { useScroll } from '../UseScroll';

const Earth = () => {
	const scroll = useScroll();
	return (
		<EarthDiv className='float_div'>
			<EarthImg angle={(scroll * 360) / 100}></EarthImg>
		</EarthDiv>
	);
};

export default Earth;
