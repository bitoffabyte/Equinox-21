import './Page1.css';
import logo from '../../Assets/Equinox_Logo.png';
import discord from '../../Assets/Discord.svg';
import facebook from '../../Assets/Facebook.svg';
import insta from '../../Assets/Insta.svg';
import at from '../../Assets/@.svg';
import phone from '../../Assets/Phone.svg';
import apply from '../../Assets/Apply.svg';
import { useState, memo } from 'react';
import Timer from '../Timer';
import Tilt from 'react-parallax-tilt';

const Page1 = ({ fadeIn }) => {
	const [show, updateShow] = useState(false);

	return (
		// <Tilt glareEnable={true} glareMaxOpacity={1} glareColor='#ffffff'>
		<div className='page1bg'>
			<div className={`Page1Content ${fadeIn ? 'fadeIn' : ''} `}>
				<div className='left'>
					<img
						src={logo}
						alt='Equinox Logo'
						className='equinoxlogo'
					/>
				</div>
				<div className='right'>
					<p className='dates'>30 April - 2 May</p>
					<Timer />
					<br />
					{/*<button
						id='devfolio-apply-now'
						onClick={() => {
							window.open(
								'https://devfolio.co/external-apply/equinox21',
								'_blank'
							);
						}}
					>
						<svg
							className='logo'
							xmlns='http://www.w3.org/2000/svg'
							fill='#fff'
							viewBox='0 0 115.46 123.46'
							style={{
								height: '24px',
								width: '24px',
								marginRight: '8px',
							}}
						>
							<path d='M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z' />
							<path d='M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z' />
						</svg>
						Apply with Devfolio
					</button>
					<img src = {discord}/> */}
					{/* <img
						src={apply}
						className='applyimg'
						onClick={() =>
							window.open(
								'https://di6oe3ych67.typeform.com/to/DKsjL0Il',
								'_blank'
							)
						}
					/> */}
					<div
						className='regNow'
						onClick={() =>
							window.open(
								'https://di6oe3ych67.typeform.com/to/DKsjL0Il',
								'_blank'
							)
						}>
						Register Now
					</div>
					<br />
					<div className='links'>
						<i
							className='fas fa-phone-alt linklogos at '
							onClick={() => {
								updateShow((prev) => !prev);
							}}></i>

						<i
							className='fas fa-at linklogos at'
							onClick={() => {
								window.open(
									'mailto: equinox.robovitics@gmail.com',
									'_blank'
								);
							}}></i>

						<i
							className='fab fa-instagram linklogos at '
							onClick={() => {
								window.open(
									'https://www.instagram.com/equinox_robovitics/',
									'_blank'
								);
							}}></i>

						<i
							className='fab fa-facebook-square linklogos at'
							onClick={() => {
								window.open(
									'https://www.facebook.com/Equinox-Robovitics-110054387359678',
									'_blank'
								);
							}}></i>

						<i
							className='fab fa-discord linklogos at '
							onClick={() => {
								window.open(
									'https://discord.gg/EfV4kK3Bgu',
									'_blank'
								);
							}}></i>
					</div>
					<p className={`contact ${show ? 'showContact' : ''}`}>
						Contact: +91 98980 56388
					</p>
				</div>
			</div>
		</div>
		// </Tilt>
	);
};

export default Page1;
