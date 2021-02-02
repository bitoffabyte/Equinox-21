import styled from 'styled-components';
import img from '../../Assets/sun.svg';
export const SunImg = styled.img.attrs({
	src: `${img}`,
})`
	position: absolute;
	width: 50vw;
	left: 0;
	transform: translate(-50%, -50%);
`;
