import './Page5.css';
import useDimension from '../../useDimensions';
import { useState } from 'react';
import arrow from '../../Assets/Arrow.svg';
const Page5 = ({ fadeIn }) => {
	const { width, height } = useDimension();
	const [show1, updateShow1] = useState(false);
	const [show2, updateShow2] = useState(false);
	const [show3, updateShow3] = useState(false);
	const [show4, updateShow4] = useState(false);
	const [show5, updateShow5] = useState(false);
	const [show6, updateShow6] = useState(false);
	const [page, updatePage] = useState(1);

	return (
		<div className='page5bg'>
			<div className={`Page5Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>FAQs</h1>
				<div className='faqs'>
					<div className={`leftfaq ${page == 1 ? 'pageReveal' : ''}`}>
						<div
							className={`faq ${show1 ? 'show' : ''}`}
							onClick={() => {
								updateShow1((prev) => !prev);
								updateShow2(false);
								updateShow3(false);
								updateShow4(false);
								updateShow5(false);
								updateShow6(false);
							}}
						>
							<div className='question'> What are the rules?</div>
							<div className='answer'>
								We want our Hack to be fun and fair to everyone.
								Your project should be started from scratch and
								worked on only during the 36 hours, and you may
								only incorporate outside resources (code,
								graphics, sound, etc) that are freely licensed
								and accessible to all participants equally. Of
								course, maintain a positive, respectful attitude
								toward your fellow hackers throughout the event.
								We ask that all attendees follow the MLH Code of
								Conduct.
							</div>
						</div>
						<div
							className='faq'
							className={`faq ${show2 ? 'show' : ''}`}
							onClick={() => {
								updateShow2((prev) => !prev);
								updateShow1(false);
								updateShow3(false);
								updateShow4(false);
								updateShow5(false);
								updateShow6(false);
							}}
						>
							<div className='question'> What can I build?</div>
							<div className='answer'>
								You can build whatever your heart desires,
								whether it’s a web app, mobile app, hardware
								hack, or an open source tool. Our main focus is
								to bring you a learning experience where you can
								have fun, ask questions, and experiment with
								technology.
							</div>
						</div>
						<div
							className={`faq ${show3 ? 'show' : ''}`}
							onClick={() => {
								updateShow3((prev) => !prev);
								updateShow2(false);
								updateShow1(false);
								updateShow4(false);
								updateShow5(false);
								updateShow6(false);
							}}
						>
							<div className='question'>
								{' '}
								Are hardware hacks allowed?
							</div>
							<div className='answer'>Yes, of course!</div>
						</div>
					</div>
					<div
						className={`rightfaq ${page == 2 ? 'pageReveal' : ''}`}
					>
						<div
							className={`faq ${show4 ? 'show' : ''}`}
							onClick={() => {
								updateShow4((prev) => !prev);
								updateShow2(false);
								updateShow3(false);
								updateShow1(false);
								updateShow5(false);
								updateShow6(false);
							}}
						>
							<div className='question'>
								{' '}
								How much does it cost?
							</div>
							<div className='answer'>
								Thanks to the generosity of our sponsors, we’re
								able to put up events like these for free.
							</div>
						</div>
						<div
							className={`faq ${show5 ? 'show' : ''}`}
							onClick={() => {
								updateShow5((prev) => !prev);
								updateShow2(false);
								updateShow3(false);
								updateShow4(false);
								updateShow1(false);
								updateShow6(false);
							}}
						>
							<div className='question'>
								{' '}
								How many people in a team?
							</div>
							<div className='answer'>Five sounds good.</div>
						</div>
						<div
							className={`faq ${show6 ? 'show' : ''}`}
							onClick={() => {
								updateShow6((prev) => !prev);
								updateShow2(false);
								updateShow3(false);
								updateShow4(false);
								updateShow5(false);
								updateShow1(false);
							}}
						>
							<div className='question'>
								I still have a question...
							</div>
							<div className='answer'>
								We’d be happy to help! Send the inquiry over to
								robovitics@vit.ac.in and we’ll get back to you
								as soon as possible or call +91 98673 48865.
							</div>
						</div>
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

export default Page5;
