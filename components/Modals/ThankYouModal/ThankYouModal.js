import styles from './style.module.scss';
import styled from "styled-components";
//import $ from 'jquery'; 
import Button1 from '@components/Typography/Button1/Button1'
//import functions from '@components/Modals/ModalWrapper/functions.js'

const Modal = styled.div`
	
	&.active{
		transform: translate3d(-50%,-50%,0);
		opacity: 1;
		pointer-events: auto;
	}
	
`;

export default function ThankYouModal({ 
  //page vars
}) {
return (
<Modal className={styles.ThankYouModal + " modal"} data-modal="ThankYouModal">
	<div className={styles.modalCloseSection}>
		<div className={styles.modalClose + " modal_close"}>
			<span>&#10005;</span>
		</div>
	</div>
	
	<div className={styles.copy}>
		<header className={styles.headline}>
			THANK YOU MODAL
		</header>
		<p className={styles.main}>
			Lorem ipsum dolor sit amet, consectetur adipiscing 
			elit.Mauris varius iaculis mauris, in lacinia purus 
			congue porta.Nulla a semper mi, ac vehicula elit.Donec 
			inia justo vitae libero viverra aliquet.Nam vitae semper 
			ligula. Praesent volutpat purus et lectus elementum 
			molestie. 
		</p>		
	</div>
	
</Modal>  	
)}