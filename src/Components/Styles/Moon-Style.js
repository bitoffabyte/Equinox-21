import styled from 'styled-components';
import img from '../../Assets/moon.svg';

export const MoonImg = styled.img.attrs({
	src: `${img}`,
})`
	position: absolute;
	width: 50vw;
	left: 100%;
	transform: translate(-50%, -50%);
`;
