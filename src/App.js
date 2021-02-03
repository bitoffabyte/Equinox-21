import './App.css';
import Earth from './Components/Earth';
import Pages from './Components/Pages';

import TurningDiv from './Components/TurningDiv';

function App() {
	return (
		<div className='App'>
			<div className='mainDiv'>
				<Pages />
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
