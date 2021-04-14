import './PPage6.css';
import img from '../../Assets/oi.png';
import img2 from '../../Assets/blo.png';
import img3 from '../../Assets/ar.png';
import img4 from '../../Assets/rename.png';
import img5 from '../../Assets/def.png';
import img6 from '../../Assets/hel.png';
import img7 from '../../Assets/aids.png';
import arrow from '../../Assets/Arrow.svg';

import { useState } from 'react';
import useWindowDimensions from '../../useDimensions';
import { Carousel } from 'react-responsive-carousel';
const Card = ({ imgs, c }) => {
	return (
		<div className='flip-card'>
			<div className='flip-card-inner'>
				<div className='flip-card-front'>
					<img className='ssas' src={imgs} />
				</div>
				<div className='flip-card-back'>
					<p className='ps'>{c} </p>
				</div>
			</div>
		</div>
	);
};
const PPage6 = ({ fadeIn, reff }) => {
	const { width, height } = useWindowDimensions();
	const [page, setPage] = useState(0);
	if (width > 1200)
		return (
			<div className='page6bg' ref={reff}>
				<div className={`Page6Content ${fadeIn ? 'fadeIn' : ''} `}>
					<h1>TRACKS</h1>
					<div className='organizers'>
						<div className='cardd'>
							<Card
								imgs={img7}
								c={
									<>
										AI <br />
										and
										<br /> Data Science
									</>
								}
							/>
							<Card imgs={img3} c='AR and VR' />
							<Card imgs={img2} c='Blockchain' />
							<Card imgs={img5} c='Defence' />
						</div>

						<div className='cardd stupid'>
							<Card imgs={img6} c='Health and Safety' />
							<Card imgs={img4} c='Robotics' />
							<Card imgs={img} c='Open Innovation' />
						</div>
					</div>
				</div>
			</div>
		);
	else
		return (
			<>
				<div className='page6bg' ref={reff}>
					<div className={`Page6Content ${fadeIn ? 'fadeIn' : ''} `}>
						<h1>TRACKS</h1>
						<div className='organizers'>
							<Carousel
								autoPlay={false}
								emulateTouch={true}
								showIndicators={false}
								showArrows={false}
								showStatus={false}
								transitionTime={200}
								selectedItem={page}
								emulateTouch={false}
								showThumbs={false}
								swipeable={false}>
								<Card
									imgs={img7}
									c={
										<>
											AI <br />
											and
											<br /> Data Science
										</>
									}
								/>
								<Card imgs={img} c='Open Innovation' />
								<Card imgs={img2} c='Blockchain' />
								<Card imgs={img3} c='AR - VR' />
								<Card imgs={img4} c='Robotics' />
								<Card imgs={img5} c='Defence' />
								<Card imgs={img6} c='Healthcare' />
							</Carousel>
							<div className='arrows aarrows'>
								<img
									src={arrow}
									className={`al arrow aarrow ${
										page == 0 ? 'dis' : ''
									}`}
									onClick={() => {
										if (page != 0)
											setPage((prev) => prev - 1);
									}}
								/>
								<img
									src={arrow}
									className={`arrow aarrow${
										page == 7 ? ' dis' : ''
									}`}
									onClick={() => {
										if (page != 7)
											setPage((prev) => prev + 1);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</>
		);
};
export default PPage6;
