import styled, { keyframes } from 'styled-components';
import earth from '../../Assets/Earth.png';

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
	position: absolute;
	top: 100%;
	left: 0;
	width: 100px;
	transform: translate(-23vw, -50%);
	@media screen and (max-width: 720px) {
		top: 100%;
		left: 0vw;
		transform: translate(35%, -50%);
		transition: transform 1s linear;
	}
`;
export const EarthImg = styled.img.attrs({
	src: `${earth}`,
})`
	width: 40vw;
	height: auto;
	animation: ${(props) => floatAnim(props.angle)} 6s ease-in-out infinite;
	transition: transform 0.3s;

	@media screen and (max-width: 720px) {
		width: 80vw;
	}
`;
