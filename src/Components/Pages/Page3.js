import './Page3.css';
import { memo } from 'react';
const Page3 = ({ fadeIn, reff }) => {
	return (
		<div className='page3bg' ref={reff}>
			<div className={`Page3Content ${fadeIn ? 'fadeIn' : ''} `}>
				<br />
				<h1>PRIZES</h1>
				<div className='prizesC'>
					<p className='aboutCont'>
						Stay tuned for interstellar schwag and prizes!!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Page3;
