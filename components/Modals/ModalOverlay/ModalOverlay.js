import styles from './style.module.scss'
import styled from "styled-components";
import $ from 'jquery'; 

const Overlay = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100vh;
	background-color: rgba(0,0,0,0.25);
	backdrop-filter: blur(2px);

	transition: .15s ease-in-out;
	opacity: 0;
	pointer-events: none;
	will-change: opacity;

	&.active{
		opacity: 1;
		pointer-events: auto;
	}
`;

export default function ModalOverlay({ 
  //page vars
}) {
return (
	<Overlay className={styles.ModalOverlay + " modal_overlay"}></Overlay>  	
)}