import { useEffect, useState } from 'react';
import './timer.css';
const Timer = () => {
	const [beep, updateBeep] = useState({
		d: '00',
		h: '00',
		m: '00',
		s: '00',
	});

	useEffect(() => {
		const updateTimer = () => {
			let future = Date.parse('March 26, 2021 21:00:00');
			let now = new Date();
			let diff = future - now;
			let days = Math.floor(diff / (1000 * 60 * 60 * 24));
			let hours = Math.floor(diff / (1000 * 60 * 60));
			let mins = Math.floor(diff / (1000 * 60));
			let secs = Math.floor(diff / 1000);
			let d = days;
			let h = hours - days * 24;
			let m = mins - hours * 60;
			let s = secs - mins * 60;
			if (s < 10) {
				s = '0' + s;
			}
			if (m < 10) {
				m = '0' + m;
			}
			if (h < 10) {
				h = '0' + h;
			}
			if (d < 10) {
				d = '0' + d;
			}
			updateBeep((prev) => ({
				...prev,
				d,
				m,
				s,
				h,
			}));
		};

		let s = setInterval(updateTimer, 1000);

		return () => {
			clearInterval(s, 1000);
		};
	}, []);
	return (
		<div className='tim'>
			<p className='timer'>{`${beep.d} : ${beep.h} : ${beep.m} : ${beep.s}`}</p>
		</div>
	);
};

export default Timer;
