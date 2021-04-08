import styled from 'styled-components';
import img from '../../Assets/Moon.png';

export const MoonImg = styled.img.attrs({
	src: `${img}`,
})`
	position: absolute;
	width: 50vw;
	left: 100%;
	transform: translate(-50%, -50%);
	z-index: 1;
`;
