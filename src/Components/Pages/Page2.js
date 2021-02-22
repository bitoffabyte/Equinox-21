import './Page2.css';
import { memo } from 'react';
const Page2 = ({ fadeIn }) => {
	return (
		<div className='page2bg'>
			<div className={`Page2Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>ABOUT EQUINOX</h1>
				<div className='aboutStuff'>
					<p className='aboutCont'>
						Equinox is a 36-Hour hackathon in which the
						participants’ ideas will not just be limited to problem
						statements based on Web development, hardware,
						Artificial Intelligence etc. The hack aims to crank the
						creative cogs of the participants. You have the
						opportunity and the resources to express your
						creativity, ingenuity and determination to explore
						anything you want. Whether you’re new to hacks or a
						seasoned pro, there’s something for everyone! You’re
						welcome with or without a team. We will provide
						resources and mentors for your aid. Also, did we mention
						exciting goodies and takeaways? The domains of the hack
						include Robotics, Industrial Automation, Healthcare,
						Financial-Technology and open innovation. Let us make
						you an offer you can’t refuse: Timely and precise
						reviews for each participant and ample time with the
						judges. So, what are you waiting for? Come build using
						hardware, software, or anything you want with other
						hackers! You don’t have to know how to code to be a
						hacker. Hackers can be students, designers, or just any
						tech-lover out there!
					</p>
				</div>
			</div>
		</div>
	);
};

export default memo(Page2);
