import React, { useEffect, useState } from 'react';
import Load from './Components/Styles/Load';
import Main from './Main';

const App = () => {
	const [load, setLoad] = useState(true);
	useEffect(() => {
		setLoad(false);
	}, []);
	return (
		<div>
			{load ? <Load /> : null}
			<Main />
		</div>
	);
};

export default App;
