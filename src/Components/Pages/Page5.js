import './Page5.css';
const Page5 = ({ fadeIn }) => {
	return (
		<div className='page5bg'>
			<div className={`Page5Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>Faqs</h1>
			</div>
		</div>
	);
};

export default Page5;
