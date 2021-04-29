import useWindowDimensions from '../../useDimensions';
import './Page4.css';
import i from '../../Assets/j1.jpeg';
import ii from '../../Assets/j2.jpeg';
import iii from '../../Assets/j3.png';

const Page4 = ({ fadeIn, reff }) => {
	const { width, height } = useWindowDimensions();
	// if (width > 720)
	return (
		<div className='page4bg' ref={reff}>
			<div className={`Page4Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>JUDGES</h1>
				<div className='judges'>
					<div className='cardJ cardJ1'>
						<img src={i} className='bor' />
						<p style={{ margin: '0 10%' }}>Lavanya Arora</p>
						{width > 720 ? (
							<p className='p2' style={{ marginTop: '-5%' }}>
								Product Manager at Google and leads Fraud
								Defense for Google Maps.
							</p>
						) : null}
					</div>
					<div className='cardJ cardJ1'>
						<img src={ii} className='bor' />
						<p style={{ margin: '0 10%' }}>Ankit Chaudhary</p>
						{width > 720 ? (
							<p className='p2' style={{ marginTop: '-5%' }}>
								Senior Product Manager at Microsoft
							</p>
						) : null}
					</div>{' '}
					<div className='cardJ cardJ1'>
						<img src={iii} className='bor' />
						<p style={{ margin: '0 10%' }}>Vinay Kumar</p>
						{width > 720 ? (
							<p className='p2' style={{ marginTop: '-5%' }}>
								Chief Executive Officer at Datawise Graphic
							</p>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
	// else return <div></div>;
};

export default Page4;
