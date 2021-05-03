import './Page1.css';
import logo from '../../Assets/Equinox_Logo.png';
import discord from '../../Assets/Discord.svg';
import facebook from '../../Assets/Facebook.svg';
import insta from '../../Assets/Insta.svg';
import at from '../../Assets/@.svg';
import phone from '../../Assets/Phone.svg';
import apply from '../../Assets/Apply.svg';
import { useState } from 'react';
import Timer from '../Timer';
import Tilt from 'react-parallax-tilt';

const Page1 = ({ fadeIn, reff }) => {
	const [show, updateShow] = useState(false);
	const [over, setOver] = useState(false);

	return (
		<div className='page1bg' ref={reff}>
			<div className={`Page1Content ${fadeIn ? 'fadeIn' : ''} `}>
				<div className='left'>
					<img
						src={logo}
						alt='Equinox Logo'
						className='equinoxlogo'
					/>
				</div>
				<div className='right'>
					{over ? (
						<>{/* <p className='dates'>Hack ends in</p> */}</>
					) : (
						<p className='dates'>30 April - 2 May</p>
					)}
					<Timer setOver={setOver} />
					<br />
					{!over ? (
						<div
							className='regNow'
							onClick={() =>
								window.open(
									'https://equinoxhack.typeform.com/to/DKsjL0Il',
									'_blank'
								)
							}>
							Register Now
						</div>
					) : null}
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
						Contact: +91 70007 95422
					</p>
				</div>
			</div>
		</div>
		// </Tilt>
	);
};

export default Page1;
