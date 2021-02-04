import { useState } from 'react';
export const useTimer = () => {
	const [timer, updateTimer] = useState({});
	let future = Date.parse('March 26, 2021 21:00:00');
	let now = new Date();
	let diff = future - now;
	console.log(now, future);
	let days = Math.floor(diff / (1000 * 60 * 60 * 24));
	let hours = Math.floor(diff / (1000 * 60 * 60));
	let mins = Math.floor(diff / (1000 * 60));
	let secs = Math.floor(diff / 1000);

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
	if (days < 10) {
		days = '0' + days;
	}
	updateTimer((prev) => ({ ...prev, days, h, m, s }));
	return timer;
};
export default useTimer;
