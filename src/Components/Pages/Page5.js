import './Page5.css';
import useDimension from '../../useDimensions';
import { useState } from 'react';
import arrow from '../../Assets/Arrow.svg';
import Accordion from '../Accordion';
import { FAQ as data } from './faq-data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const Page5 = ({ fadeIn, reff }) => {
	const { width, height } = useDimension();
	const [show1, updateShow1] = useState(false);
	const [show2, updateShow2] = useState(false);
	const [show3, updateShow3] = useState(false);
	const [show4, updateShow4] = useState(false);
	const [show5, updateShow5] = useState(false);
	const [show6, updateShow6] = useState(false);
	const [show7, updateShow7] = useState(false);
	const [show8, updateShow8] = useState(false);
	const [show9, updateShow9] = useState(false);
	const [show10, updateShow10] = useState(false);
	const [show11, updateShow11] = useState(false);
	const [show12, updateShow12] = useState(false);
	const [show13, updateShow13] = useState(false);
	const [page, updatePage] = useState(0);

	const updateHandler = (func, s) => {
		updateShow1(false);
		updateShow2(false);
		updateShow3(false);
		updateShow4(false);
		updateShow5(false);
		updateShow6(false);
		updateShow7(false);
		updateShow8(false);
		updateShow9(false);
		updateShow10(false);
		updateShow11(false);
		updateShow12(false);
		updateShow13(false);
		func(s);
	};

	return (
		<div className='page5bg' ref={reff}>
			<div className={`Page5Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>FAQs</h1>

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
					className='carou'>
					<div>
						<Accordion
							title={data[0].q}
							body={data[0].a}
							state={show1}
							updateState={updateShow1}
							updateHandler={updateHandler}
							s={true}
						/>
						<Accordion
							title={data[1].q}
							body={data[1].a}
							state={show2}
							updateState={updateShow2}
							updateHandler={updateHandler}
						/>
						<Accordion
							title={data[2].q}
							body={data[2].a}
							state={show3}
							updateState={updateShow3}
							updateHandler={updateHandler}
						/>
					</div>
					<div>
						<Accordion
							title={data[3].q}
							body={data[3].a}
							state={show4}
							updateState={updateShow4}
							updateHandler={updateHandler}
						/>
						<Accordion
							title={data[4].q}
							body={data[4].a}
							state={show5}
							updateState={updateShow5}
							updateHandler={updateHandler}
						/>
						<Accordion
							title={data[5].q}
							body={data[5].a}
							state={show6}
							updateState={updateShow6}
							updateHandler={updateHandler}
						/>
					</div>

					<div>
						<Accordion
							title={data[6].q}
							body={data[6].a}
							state={show7}
							updateState={updateShow7}
							updateHandler={updateHandler}
						/>
						<Accordion
							title={data[7].q}
							body={data[7].a}
							state={show8}
							updateState={updateShow8}
							updateHandler={updateHandler}
						/>
						<Accordion
							title={data[8].q}
							body={data[8].a}
							state={show9}
							updateState={updateShow9}
							updateHandler={updateHandler}
						/>
					</div>
					<div>
						<Accordion
							title={data[9].q}
							body={data[9].a}
							state={show10}
							updateState={updateShow10}
							updateHandler={updateHandler}
						/>
						<Accordion
							title={data[10].q}
							body={data[10].a}
							state={show11}
							updateState={updateShow11}
							updateHandler={updateHandler}
						/>
						<Accordion
							title={data[11].q}
							body={data[11].a}
							state={show12}
							updateState={updateShow12}
							updateHandler={updateHandler}
						/>
					</div>
					<div>
						<Accordion
							title={data[12].q}
							body={data[12].a}
							state={show13}
							updateState={updateShow13}
							updateHandler={updateHandler}
						/>
					</div>
				</Carousel>

				<div className='asssd'>
					<img
						src={arrow}
						style={{ transform: 'rotate(180deg)' }}
						className={`btn ${page == 0 ? ' dis' : ''}`}
						onClick={() =>
							updatePage((prev) => {
								if (prev == 0) {
									return prev;
								} else {
									return prev - 1;
								}
							})
						}
					/>
					<img
						src={arrow}
						className={`btn ${page == 4 ? ' dis' : ''}`}
						onClick={() =>
							updatePage((prev) => {
								if (prev == 4) {
									return 4;
								} else {
									return prev + 1;
								}
							})
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Page5;
