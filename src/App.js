import './App.css';
import Earth from './Components/Earth';
import Moon from './Components/Moon';
import Sun from './Components/Sun';
import img from './Assets/star.svg';
import TurningDiv from './Components/TurningDiv';
import { useScroll } from './UseScroll';
import { useEffect } from 'react';
function App() {
	const scroll = useScroll();
	console.log(scroll);
	useEffect(() => {
		if (scroll == 100) {
			window.scrollTo({ top: 0 });
		}
	}, [scroll]);
	return (
		<div className='App'>
			<div
				style={{
					height: '700vh',
					width: '100vw',
					background:
						'linear-gradient(178.33deg, #8415AA -0.79%, #3D0678 6.05%, #100259 12.42%, #150864 18.69%, #1A1D85 23.78%, #2034A9 29.99%, #1662D8 36.6%, #1F91E4 43.09%, #26B1ED 47.72%, #71C8ED 52.2%, #94D9F6 56.19%, #99E0FF 63.55%, #6BC9F1 69.44%, #77B6E7 73.9%, #8895E7 79.37%, #9D77D5 84.48%, #A938C6 89.96%, #8415AA 95.04%, #3D0678 98.43%)',
					backgroundBlendMode: 'multiply',
					zIndex: '1',
				}}
			></div>
			<div
				style={{
					position: 'fixed',
					width: '100vw',
					height: '100vh',
					zIndex: '10',
					top: 0,
				}}
			>
				<Earth />
			</div>
			<TurningDiv />
			<div
				style={{
					position: 'fixed',
					top: '0',
					width: '100vw',
					height: '100vh',
					zIndex: '200',
				}}
			></div>
		</div>
	);
}

export default App;
