import './Page3.css';
import { memo } from 'react';
import Tilt from 'react-tilt';
const Page3 = ({ fadeIn }) => {
	return (
		<Tilt className='Tilt' options={{ max: 25, scale: 1 }}>
			<div className='page3bg'>
				<div className={`Page3Content ${fadeIn ? 'fadeIn' : ''} `}>
					<br />
					<h1>PRIZES</h1>
					<div className='prizesC'>
						<p>To Be Announced</p>
					</div>
				</div>
			</div>
		</Tilt>
	);
};

export default memo(Page3);
