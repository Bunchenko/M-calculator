import styled from "styled-components";

const Button = styled.button`
	display:inline-block;
	padding:0.2em 1.45em;
	margin:0.2em;
	border:0.15em solid #CCCCCC;
	box-sizing: border-box;
	text-decoration:none;
	font-family:'Segoe UI','Roboto',sans-serif;
	font-weight:400;
	color:#000000;
	background-color:#CCCCCC;
	text-align:center;
	position:relative;
	transition: border-color 0.3s linear;
	&:hover {
		border-color:#7a7a7a;
	}
	&:active {
		background-color:#999999;
	}
`

export default Button