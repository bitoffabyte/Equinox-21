import './Page3.css';
const Page3 = ({ fadeIn, reff }) => {
	return (
		<div className='page3bg' ref={reff}>
			<div className={`Page3Content ${fadeIn ? 'fadeIn' : ''} `}>
				<br />
				<h1>PRIZES</h1>
				<div className='prizesC'>
					<p className='aboutCont dsa'>
						Stay tuned for interstellar schwag and prizes!!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Page3;
