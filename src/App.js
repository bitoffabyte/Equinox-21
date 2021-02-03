import './App.css';
import Earth from './Components/Earth';
import Page1 from './Components//Pages/Page1';
import { FullPage, Slide } from 'react-full-page';

import TurningDiv from './Components/TurningDiv';

function App() {
	return (
		<div className='App'>
			<div className='mainDiv'>
				<FullPage>
					<Slide>
						<Page1 />
					</Slide>
					<Slide>
						<Page1 />
					</Slide>
					<Slide>
						<Page1 />
					</Slide>
					<Slide>
						<Page1 />
					</Slide>
					<Slide>
						<Page1 />
					</Slide>
					<Slide>
						<Page1 />
					</Slide>
					<Slide>
						<Page1 />
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
