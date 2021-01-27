import styled, { keyframes } from 'styled-components';
import earth from '../../Assets/earth.svg';

const floatAnim = (angle) => keyframes`
	0% {
		transform: translate(0, -1%) rotate(${angle}deg);
	}
	50% {
		transform: translate(0, 1%) rotate(${angle}deg);
	}
	100% {
		transform: translate(0, -1%) rotate(${angle}deg);
	}
`;
export const EarthDiv = styled.div`
	position: fixed;
	top: 100%;
	left: 0;
	width: 100px;
	transform: translate(-25vw, -50%);
`;
export const EarthImg = styled.img.attrs({
	src: `${earth}`,
})`
	width: 50vw;
	height: auto;
	animation: ${(props) => floatAnim(props.angle)} 6s ease-in-out infinite;
`;
