import styled from 'styled-components';
export const TurningDiv = styled.div`
	position: fixed;
	top: 100%;
	width: ${(props) => props.radius}px;
	transform: translateX(-50%) rotate(-${(props) => props.scroll}deg);
	z-index: 0;
	background: #ffffff;
	transition: transform 0.3s;
	@media screen and (max-width: 720px) {
		width: 185vh;
		transform: translateX(-25%) rotate(-${(props) => props.scroll + 60}deg);
	}
`;
