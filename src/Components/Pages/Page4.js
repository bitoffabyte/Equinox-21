import './Page4.css';
import { memo } from 'react';

const Page4 = ({ fadeIn }) => {
	return (
		<div className='page4bg'>
			<div className={`Page4Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>JUDGES</h1>
				<div className='judges'>
					<div className='cardJ cardJ1'>
						<p>To Be Announced</p>
					</div>
					<div className='cardJ cardJ2'>
						<p>To Be Announced</p>
					</div>
					<div className='cardJ cardJ3'>
						<p>To Be Announced</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Page4);
