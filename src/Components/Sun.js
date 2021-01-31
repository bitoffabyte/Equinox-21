import img from '../Assets/sun.svg';
const Sun = () => {
	return (
		<img
			src={img}
			style={{
				position: 'absolute',
				width: '50vw',
				left: '0',
				transform: `translate(-50%,-50%)`,
			}}
		/>
	);
};

export default Sun;
