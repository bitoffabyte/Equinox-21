import './App.css';
import Earth from './Components/Earth';
function App() {
	return (
		<div className='App'>
			<Earth />
			<div
				style={{
					height: '100vh',
					width: '100vw',
					backgroundImage: `linear-gradient(180deg, #061891, #4db6e0)`,
				}}
			></div>
			<div
				style={{
					height: '100vh',
					width: '100vw',
					backgroundImage: `linear-gradient(180deg, #4db6e0, #f6d686)`,
				}}
			></div>
			<div
				style={{
					height: '100vh',
					width: '100vw',
					backgroundImage: `linear-gradient(180deg, #f6d686, #fc965a)`,
				}}
			></div>
			<div
				style={{
					height: '100vh',
					width: '100vw',
					backgroundImage: `linear-gradient(180deg, #fc965a, #b75c99)`,
				}}
			></div>
			<div
				style={{
					height: '100vh',
					width: '100vw',
					backgroundImage: `linear-gradient(180deg, #b75c99, #72439a)`,
				}}
			></div>
			<div
				style={{
					height: '100vh',
					width: '100vw',
					backgroundImage: `linear-gradient(180deg, #72439a, #171e92)`,
				}}
			></div>
		</div>
	);
}

export default App;
