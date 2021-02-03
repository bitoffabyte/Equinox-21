import './App.css';
import Earth from './Components/Earth';
import Page1 from './Components//Pages/Page1';
import { FullPage, Slide } from 'react-full-page';

import TurningDiv from './Components/TurningDiv';
import Page2 from './Components/Pages/Page2';
import Page3 from './Components/Pages/Page3';
import Page4 from './Components/Pages/Page4';
import Page5 from './Components/Pages/Page5';
import Page6 from './Components/Pages/Page6';
import Page7 from './Components/Pages/Page7';

function App() {
	return (
		<div className='App'>
			<div className='mainDiv'>
				<FullPage>
					<Slide>
						<Page1 />
					</Slide>
					<Slide>
						<Page2 />
					</Slide>
					<Slide>
						<Page3 />
					</Slide>
					<Slide>
						<Page4 />
					</Slide>
					<Slide>
						<Page5 />
					</Slide>
					<Slide>
						<Page6 />
					</Slide>
					<Slide>
						<Page7 />
					</Slide>
				</FullPage>
			</div>
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
				<TurningDiv />
			</div>
		</div>
	);
}

export default App;
