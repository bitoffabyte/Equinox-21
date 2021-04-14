import './App.css';
import Earth from './Components/Earth';
import Page1 from './Components/Pages/Page1';
import { FullPage, Slide } from 'react-full-page';
import TurningDiv from './Components/TurningDiv';
import Page2 from './Components/Pages/Page2';
import Page3 from './Components/Pages/Page3';
import Page4 from './Components/Pages/Page4';
import Page5 from './Components/Pages/Page5';
import Page6 from './Components/Pages/Page6';
import Page7 from './Components/Pages/Page7';
import { useState, useEffect } from 'react';
import MLH from './Components/MLH';
import Bg from './Components/Bg';
import PPage6 from './Components/Pages/PPage6';
import Robo from './Components/Robo';
function App() {
	const [page2, updatePage2] = useState(1);
	useEffect(() => {
		window.addEventListener(
			'keydown',
			function (e) {
				// space and arrow keys
				if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
					e.preventDefault();
				}
			},
			false
		);

		return () => {
			window.removeEventListener(
				'keydown',
				function (e) {
					// space and arrow keys
					if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
						e.preventDefault();
					}
				},
				false
			);
		};
	}, []);
	return (
		<>
			<div className='App'>
				{/* <MouseTrails /> */}
				<MLH />
				<Bg />
				<Robo />
				<div
					style={{
						position: 'fixed',
						width: '100vw',
						height: '100vh',
						zIndex: '0',
						top: 0,
					}}>
					<Earth />
					<TurningDiv />
				</div>
				<div className='mainDiv'>
					<FullPage
						duration={10000}
						normalScrollElements='.carou'
						beforeChange={({ from, to }) => {
							updatePage2(to);
						}}
						duration={1000}>
						<Slide>
							<Page1 fadeIn={page2 === 0} />
						</Slide>
						<Slide>
							<Page2 fadeIn={page2 === 1} />
						</Slide>
						<Slide>
							<Page3 fadeIn={page2 === 2} />
						</Slide>
						<Slide>
							<Page4 fadeIn={page2 === 3} />
						</Slide>
						<Slide>
							<Page5 fadeIn={page2 === 4} />
						</Slide>
						<Slide>
							<PPage6 fadeIn={page2 === 5} />
						</Slide>
						<Slide>
							<Page7 fadeIn={page2 === 6} />
						</Slide>
					</FullPage>
				</div>
			</div>
		</>
	);
}

export default App;
