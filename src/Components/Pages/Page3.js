import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Page3.css';
import arrow from '../../Assets/Arrow.svg';
import useWindowDimensions from '../../useDimensions';

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
							className='arr'
							style={{ transform: 'rotate(180deg)' }}
							onClick={() => {
								setPage(0);
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
								<div className='cardJ cardJ1 prizee'>
									<p>To Be Announced</p>
								</div>
								<div className='cardJ cardJ2 prizee'>
									<p>To Be Announced</p>
								</div>
								<div className='cardJ cardJ3'>
									<p>To Be Announced</p>
								</div>
							</div>
							<div className='prizes'>
								<div className='cardJ cardJ1 prizee'>
									<p>To Be Announced</p>
								</div>
								<div className='cardJ cardJ2 prizee'>
									<p>To Be Announced</p>
								</div>
								<div className='cardJ cardJ3'>
									<p>To Be Announced</p>
								</div>
							</div>
						</Carousel>
						<img
							src={arrow}
							className='arr'
							onClick={() => {
								setPage(1);
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
							<div className='cardJ cardJ1 prizee'>
								<p>To Be Announced</p>
							</div>
						</div>
						<div className='prizes'>
							<div className='cardJ cardJ1 prizee'>
								<p>To Be Announced</p>
							</div>
						</div>
						<div className='prizes'>
							<div className='cardJ cardJ2 prizee'>
								<p>To Be Announced</p>
							</div>
						</div>
						<div className='prizes'>
							<div className='cardJ cardJ2 prizee'>
								<p>To Be Announced</p>
							</div>
						</div>
						<div className='prizes'>
							<div className='cardJ cardJ2 prizee'>
								<p>To Be Announced</p>
							</div>
						</div>
						<div className='prizes'>
							<div className='cardJ cardJ2 prizee'>
								<p>To Be Announced</p>
							</div>
						</div>
					</Carousel>
					<img
						src={arrow}
						className='arr'
						onClick={() => {
							if (page < 5) setPage((p) => p + 1);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Page3;
