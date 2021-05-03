import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Page3.css';
import arrow from '../../Assets/Arrow.svg';
import useWindowDimensions from '../../useDimensions';
import img from '../../Assets/oi.png';
import img2 from '../../Assets/blo.png';
import img3 from '../../Assets/ar.png';
import img4 from '../../Assets/rename.png';
import img5 from '../../Assets/def.png';
import img6 from '../../Assets/hel.png';
import img7 from '../../Assets/aids.png';
import img8 from '../../Assets/bp.png';
import f from '../../Assets/1.png';
import s from '../../Assets/2.png';
import t from '../../Assets/3.png';
import Wtf from './Wtf';

const Card = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>{Wtf}</div>
			</div>
		</div>
	);
};

const Card1 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<div className='backc'>
						<div>Prize worth 25,000 INR</div>
						<div>1000 KRPT from Krypto </div>
						<div>Schwag Bundle</div>
						<div>Wolfram Award</div>
						<div>
							Access to Online Learning Course on GeeksforGeeks
						</div>
						<div>
							Access to any Online Learning Course on GirlScript
						</div>
						<div>Online training with Internshala</div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Card2 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<div className='backc'>
						<div>Prize worth 15,000 INR</div>
						<div>1000 KRPT from Krypto </div>

						<div>Schwag Bundle</div>
						<div>Wolfram Award</div>
						<div>
							Access to Online Learning Course on GeeksforGeeks
						</div>
						<div>
							Access to any Online Learning Course on GirlScript
						</div>
						<div>Mock Async Interviews from Interview Buddy</div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const Card3 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<div className='backc'>
						<div>Prize worth 10,000 INR</div>
						<div>1000 KRPT from Krypto </div>

						<div>Schwag Bundles</div>
						<div>Wolfram Award</div>
						<div>
							Access to Online Learning Course on GeeksforGeeks
						</div>
						<div>
							Access to any Online Learning Course on GirlScript
						</div>
						<div>Mock Async Interviews from Interview Buddy</div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const Card4 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<p className='lk'>Open Innovation</p>
					<div className='backc'>
						<div>Prize worth 2,000 INR</div>
						<div>USDT worth 1000 INR</div>
						<div>Schwag Bundles</div>
						<div>Wolfram Award</div>
						<div>1-year subscription to egghead.io </div>
						<div>1-year Pro subscription to TheCodex </div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const Card5 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<p className='lk'>Blockchain</p>
					<div className='backc'>
						<div>100 USD on behalf of Cosmos India</div>
						<div>Schwag Bundles</div>
						<div>Wolfram Award</div>
						<div>
							Access to Online Learning Course on GeeksforGeeks
						</div>
						<div>Mock Async Interviews from Interview Buddy</div>
						<div>Best Implementation of Cosmos SDK 75 USD</div>
						<div>Best DeFi Application using Cosmos SDK 75 USD</div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Card6 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<p className='lk'>AR - VR</p>
					<div className='backc'>
						<div>Amazon Gift Card worth 50 USD</div>
						<div>
							3 months of licensed access to echoAR Business Tier
							Plan Chance to get featured on echoAR’s Inspiration
						</div>
						<div>Schwag Bundles</div>
						<div>Wolfram Award </div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Card7 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<p className='lk'>Robotics</p>
					<div className='backc'>
						<div>Prize worth 2,000 INR</div>
						<div>USDT worth 1000 INR</div>

						<div>Schwag Bundles</div>
						<div>Wolfram Award </div>
						<div>1-year Pro subscription to TheCodex</div>
						<div>
							Access to Online Learning Course on GeeksforGeeks
						</div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Card8 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<p className='lk'>Defence</p>
					<div className='backc'>
						<div>Prize worth 2,000 INR</div>
						<div>USDT worth 1000 INR</div>

						<div>Schwag Bundles</div>
						<div>Wolfram Award </div>
						<div>1-year Pro subscription to TheCodex</div>
						<div>
							Access to Online Learning Course on GeeksforGeeks
						</div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Card9 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<p className='lk'>Health and Safety</p>
					<div className='backc'>
						<div>Prize worth 2,000 INR</div>
						<div>USDT worth 1000 INR</div>

						<div>Schwag Bundles</div>
						<div>Wolfram Award </div>
						<div>1-year Pro subscription to TheCodex</div>
						<div>
							Access to Online Learning Course on GeeksforGeeks
						</div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Card10 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<p className='lk'>AI - Data Science</p>
					<div className='backc'>
						<div>Prize worth 2,000 INR</div>

						<div>Schwag Bundles</div>
						<div>Wolfram Award </div>
						<div>
							Opportunity of a paid internship at Internshala
						</div>
						<div>1-year Pro subscription to TheCodex</div>
						<div>
							Access to Online Learning Course on GeeksforGeeks
						</div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Card11 = ({ imgs, children, b }) => {
	return (
		<div className='flip-cardd cj '>
			<div className='flip-cardd-inner'>
				<div className='flip-cardd-front'>{children}</div>
				<div className='flip-cardd-back'>
					<p className='lk'>Best Pitch</p>
					<div className='backc'>
						<div>Prize worth 2,000 INR</div>
						<div>USDT worth 1000 INR</div>

						<div>Schwag Bundles</div>
						<div>Wolfram Award </div>
						<div>
							1-year of licensed access to Axure RP Team Edition{' '}
						</div>
						<div>1-year Pro subscription to TheCodex</div>
						<div>
							Access to Online Learning Course on GeeksforGeeks
						</div>
						<div>Mock Async Interviews from Interview Buddy</div>
						<div>And many more……</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Page3 = ({ fadeIn, reff }) => {
	const [page, setPage] = useState(0);
	const { width, height } = useWindowDimensions();
	if (width > 720)
		return (
			<div className='page4bg' ref={reff}>
				<div className={`Page3Content ${fadeIn ? 'fadeIn' : ''} `}>
					<h1>PRIZES</h1>
					<div className='lllk'>
						<img
							src={arrow}
							className={`arr ${page === 0 ? 'ds' : ''}`}
							style={{ transform: 'rotate(180deg)' }}
							onClick={() => {
								if (page != 0) setPage((p) => p - 1);
							}}
						/>
						<Carousel
							showThumbs={false}
							autoPlay={false}
							emulateTouch={true}
							showIndicators={false}
							showArrows={false}
							showStatus={false}
							transitionTime={200}
							selectedItem={page}
							emulateTouch={false}
							swipeable={false}
							className='carous'>
							<div className='prizes'>
								<Card1>
									<img src={f} className='dfg' />
								</Card1>
								<Card2 a='cj cj2 prizee'>
									<img src={s} className='dfg' />
								</Card2>
								<Card3 a='cj cj3'>
									<img src={t} className='dfg' />
								</Card3>
							</div>
							<div className='prizes'>
								<Card4 a='cj cj1 prizee'>
									<img src={img} className='dfg' />
								</Card4>
								<Card5 a='cj cj2 prizee'>
									<img src={img2} className='dfg' />
								</Card5>
								<Card6 a='cj cj3'>
									<img src={img3} className='dfg' />
								</Card6>
							</div>
							<div className='prizes'>
								<Card7 a='cj cj1 prizee'>
									<img src={img4} className='dfg' />
								</Card7>
								<Card8 a='cj cj2 prizee'>
									<img src={img5} className='dfg' />
								</Card8>
								<Card9 a='cj cj3'>
									<img src={img6} className='dfg' />
								</Card9>
							</div>
							<div className='prizes'>
								<Card10 a='cj cj1 prizee'>
									<img src={img7} className='dfg' />
								</Card10>

								<Card11 a='cj cj1 prizee'>
									<img src={img8} className='dfg' />
								</Card11>
							</div>
						</Carousel>
						<img
							src={arrow}
							className={`arr ${page === 3 ? 'ds' : ''}`}
							onClick={() => {
								if (page < 3) setPage((p) => p + 1);
							}}
						/>
					</div>
				</div>
			</div>
		);

	return (
		<div className='page4bg' ref={reff}>
			<div className={`Page3Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>PRIZES</h1>
				<div className='lllk'>
					<img
						src={arrow}
						className='arr'
						style={{ transform: 'rotate(180deg)' }}
						onClick={() => {
							if (page != 0) setPage((p) => p - 1);
						}}
					/>
					<Carousel
						showThumbs={false}
						autoPlay={false}
						emulateTouch={true}
						showIndicators={false}
						showArrows={false}
						showStatus={false}
						transitionTime={200}
						selectedItem={page}
						emulateTouch={false}
						swipeable={false}
						className='carous'>
						<div className='prizes'>
							<Card1 a='cj cj1 prizee'>
								<img src={f} className='dfg' />
							</Card1>
						</div>
						<div className='prizes'>
							<Card2 a='cj cj1 prizee'>
								<img src={s} className='dfg' />
							</Card2>
						</div>
						<div className='prizes'>
							<Card3 a='cj cj2 prizee'>
								<img src={t} className='dfg' />
							</Card3>
						</div>
						<div className='prizes'>
							<Card4 a='cj cj2 prizee'>
								<img src={img} className='dfg' />
							</Card4>
						</div>
						<div className='prizes'>
							<Card5 a='cj cj2 prizee'>
								<img src={img2} className='dfg' />
							</Card5>
						</div>
						<div className='prizes'>
							<Card6 a='cj cj2 prizee'>
								<img src={img3} className='dfg' />
							</Card6>
						</div>
						<div className='prizes'>
							<Card7 a='cj cj2 prizee'>
								<img src={img4} className='dfg' />
							</Card7>
						</div>
						<div className='prizes'>
							<Card8 a='cj cj2 prizee'>
								<img src={img5} className='dfg' />
							</Card8>
						</div>
						<div className='prizes'>
							<Card9 a='cj cj2 prizee'>
								<img src={img6} className='dfg' />
							</Card9>
						</div>
						<div className='prizes'>
							<Card10 a='cj cj2 prizee'>
								<img src={img7} className='dfg' />
							</Card10>
						</div>
					</Carousel>
					<img
						src={arrow}
						className='arr'
						onClick={() => {
							if (page < 9) setPage((p) => p + 1);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Page3;
