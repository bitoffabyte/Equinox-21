import './Page3.css';
import { memo } from 'react';
const Page3 = ({ fadeIn }) => {
	return (
		<div className='page3bg'>
			<div className={`Page3Content ${fadeIn ? 'fadeIn' : ''} `}>
				<br />
				<h1>PRIZES</h1>
				<div className='prizesC'>
					<p>To Be Announced</p>
				</div>
			</div>
		</div>
	);
};

export default memo(Page3);
