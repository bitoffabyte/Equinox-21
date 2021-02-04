import './Page6.css';
const Page6 = ({ fadeIn }) => {
	return (
		<div className='page6bg'>
			<div className={`Page6Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>Organizers</h1>
			</div>
		</div>
	);
};

export default Page6;
