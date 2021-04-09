import React from 'react';
import img from '../Assets/qwe.png';
import './Img.css';
import useDimension from '../useDimensions';
const Bg = () => {
	const { width, height } = useDimension();
	return <>{width > 720 ? <img src={img} className='bgimg' /> : null}</>;
};

export default Bg;
