import './Page7.css';
const Page7 = ({ fadeIn }) => {
	return (
		<div className='page7bg'>
			<div className={`Page7Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>Sponsors</h1>
			</div>
		</div>
	);
};

export default Page7;
