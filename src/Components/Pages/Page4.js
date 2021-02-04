import './Page4.css';
const Page4 = ({ fadeIn }) => {
	return (
		<div className='page4bg'>
			<div className={`Page4Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>Judges</h1>
			</div>
		</div>
	);
};

export default Page4;
