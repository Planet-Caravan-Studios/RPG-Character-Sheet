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
		transition-delay: .25s;
	}	
	
`;

export default function VideoModal({ 
  //page vars
}) {
return (
<Modal className={styles.VideoModal + " modal video"} data-modal="VideoModal">
	<div className={styles.modalCloseSection}>
		<div className={styles.modalClose + " modal_close"}>
			<span>&#10005;</span>
		</div>
	</div>
	
	<div className={styles.videoFrame}>
		<iframe 
			src="https://www.youtube.com/embed/" 
			title="YouTube video player" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowFullScreen></iframe>
	</div>
	
</Modal>  	
)}