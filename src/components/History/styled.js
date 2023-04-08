import styled from "styled-components";

export const HistoryOption = styled.div`
	padding: 0.15rem;
	cursor: pointer;
`

export const Dropdown = styled.div`
	margin-right: 10px;
	align-self: end;
	width: 12rem;
	position: relative;
`

const Panel = styled.div`
	position: absolute;
	border: 1px solid ${props => props.theme.color};
	border-radius: 0.25rem;
	width: 100%;
	padding: 0.75rem;
	cursor: pointer;
	background-color: ${props => props.theme.background.root};
`

export const HistoryPanel = styled(Panel)`
	position: static;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${props => props.theme.color};
`

export const HistoryList = styled(Panel)`
	z-index: 10;
	top: 100%;
	color: ${props => props.theme.color};
`