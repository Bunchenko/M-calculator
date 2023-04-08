import styled from "styled-components";
import Button from "../Button/Button";

export const KeypadContainer = styled.div`
	margin-top: 0.2em;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
`

export const KeypadButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100px;
	font-size: 20px;
	background: ${props => props.functional ? 'orange' : '#CCC'};
	background: ${props => props.isCurrent ? 'white' : props.functional ? 'orange' : '#CCC'};
	border-color: ${props => props.functional ? 'orange' : '#CCC'};
`