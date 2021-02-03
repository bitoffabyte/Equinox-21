import React from 'react';
import Page1 from './Pages/Page1';

const Pages = () => {
	return (
		<div
			style={{
				margin: '0',
				zIndex: '1000',
				top: 0,
			}}
		>
			<Page1 />
			<Page1 />
		</div>
	);
};

export default Pages;
