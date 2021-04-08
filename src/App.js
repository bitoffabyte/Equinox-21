import React, { useEffect, useState, Component } from 'react';
import Load from './Components/Styles/Load';
import Main from './Main';

class App extends Component {
	state = {
		loading: true,
	};
	componentDidMount() {
		// alert('asd');
		this.setState({ loading: false });
	}
	render() {
		return (
			<div>
				{this.state.load ? <Load /> : null}
				<Main />
			</div>
		);
	}
}

export default App;
