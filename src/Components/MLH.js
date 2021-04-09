import React from 'react';

const MLH = () => {
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,

				zIndex: '100000000',
			}}>
			<a
				id='mlh-trust-badge'
				style={{
					display: 'block',
					maxWidth: '100px',
					minWidth: '60px',
					position: 'fixed',
					right: '50px',
					top: '0',
					width: '10%',
					zIndex: '10000',
				}}
				href='https://mlh.io/seasons/2021/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white'
				target='_blank'>
				<img
					src='https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg'
					alt='Major League Hacking 2021 Hackathon Season'
					style={{ width: '100%' }}
				/>
			</a>
		</div>
	);
};

export default MLH;
