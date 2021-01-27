import { EarthImg, EarthDiv } from './Styles/Earth.js';
import { useEffect, useState } from 'react';
const Earth = () => {
	const [scroll, updateScroll] = useState(0);

	const scrollAnim = () => {
		const getDocHeight = () => {
			return Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.offsetHeight,
				document.body.clientHeight,
				document.documentElement.clientHeight
			);
		};
		const scrollTop = window.pageYOffset; // how much the user has scrolled by
		const winHeight = window.innerHeight;
		const docHeight = getDocHeight();

		const totalDocScrollLength = docHeight - winHeight;
		const scrollPostion = Math.floor(
			(scrollTop / totalDocScrollLength) * 100
		);
		updateScroll(scrollPostion);
	};
	useEffect(() => {
		function watchScroll() {
			window.addEventListener('scroll', scrollAnim);
		}
		watchScroll();
		return () => {
			window.removeEventListener('scroll', scrollAnim);
		};
	});

	return (
		<EarthDiv className='float_div'>
			<EarthImg angle={(scroll * 270) / 100}></EarthImg>
		</EarthDiv>
	);
};

export default Earth;
