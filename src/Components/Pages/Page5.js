import './Page5.css';
import useDimension from '../../useDimensions';
import { useState, memo } from 'react';
import arrow from '../../Assets/Arrow.svg';
import Accordion from '../Accordion';
import { FAQ as data } from './faq-data';
const Page5 = ({ fadeIn }) => {
	const { width, height } = useDimension();
	const [show1, updateShow1] = useState(false);
	const [show2, updateShow2] = useState(false);
	const [show3, updateShow3] = useState(false);
	const [show4, updateShow4] = useState(false);
	const [show5, updateShow5] = useState(false);
	const [show6, updateShow6] = useState(false);
	const [page, updatePage] = useState(1);
	const updateHandler = (func, s) => {
		updateShow1(false);
		updateShow2(false);
		updateShow3(false);
		updateShow4(false);
		updateShow5(false);
		updateShow6(false);
		func(s);
	};
	return (
		<div className='page5bg'>
			<div className={`Page5Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>FAQs</h1>
				<div className='faqs'>
					<div className={`leftfaq ${page == 1 ? 'pageReveal' : ''}`}>
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
					<div
						className={`rightfaq ${page == 2 ? 'pageReveal' : ''}`}>
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
					{width < 720 ? (
						<div className='btnBt'>
							<img
								src={arrow}
								style={{ transform: 'rotate(180deg)' }}
								className={`btn ${page == 1 ? 'dis' : ''}`}
								onClick={() => updatePage(1)}
							/>
							<img
								src={arrow}
								className={`btn ${page == 2 ? 'dis' : ''}`}
								onClick={() => updatePage(2)}
							/>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default memo(Page5);
