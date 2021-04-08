import styled from 'styled-components';
import img from '../../Assets/Sun.png';
export const SunImg = styled.img.attrs({
	src: `${img}`,
})`
	position: absolute;
	width: 50vw;
	left: 0;
	transform: translate(-50%, -50%);
	z-index: 1;
`;
