import img from '../Assets/moon.svg';
const Moon = () => {
	return (
		<img
			src={img}
			style={{
				position: 'fixed',
				width: '50vw',
				left: '100%',
				transform: `translate(-50%,-50%)`,
			}}
		/>
	);
};

export default Moon;
