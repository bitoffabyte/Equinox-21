import './Page2.css';

const Page2 = ({ fadeIn, reff }) => {
	return (
		<div className='page2bg' ref={reff}>
			<div className={`Page2Content ${fadeIn ? 'fadeIn' : ''} `}>
				<div>
					<h1>ABOUT EQUINOX</h1>
					<div className='aboutStuff'>
						<p className='aboutCont'>
							Equinox'21 is a 36-hour hackathon which aims to
							crank the creative cogs of the participants. You
							have the opportunity and the resources to express
							your creativity, ingenuity and determination to
							explore anything you want. Whether you’re new to
							hacks or a seasoned pro, there’s something for
							everyone! We will provide resources and mentors for
							your aid. Also, did we mention exciting goodies and
							takeaways? So, what are you waiting for? Come build
							using hardware, software, or anything you want with
							other hackers!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page2;
