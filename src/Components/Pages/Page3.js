import './Page3.css';
const Page3 = ({ fadeIn }) => {
	return (
		<div className='page3bg'>
			<div className={`Page3Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>Prizes</h1>
			</div>
		</div>
	);
};

export default Page3;
