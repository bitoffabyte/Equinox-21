// import './Page6.css';
import ad from '../../Assets/ad.svg';
import an from '../../Assets/an.svg';
import v from '../../Assets/v.svg';
const Page6 = ({ fadeIn, reff }) => {
	return (
		<div className='page6bg' ref={reff}>
			<div className={`Page6Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>ORGANISERS</h1>
				<div className='organizers'>
					<div className='card card1'>
						<br />
						<br />
						<img src={ad} />
						<p>ADITI CHOWDHURI</p>
					</div>
					<div className='card card2'>
						<br />
						<br />

						<img src={an} />
						<p>ANIRUDH RAMESH</p>
					</div>
					<div className='card card3'>
						<br />
						<br />

						<img src={v} />
						<p>AJAY VENKATESH</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page6;
