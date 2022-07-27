import React, { useState, useEffect } from 'react';
import styles from './ModalWrapper.module.scss'
import styled from "styled-components";
import $ from 'jquery'; 

import ModalOverlay from '@components/Modals/ModalOverlay/ModalOverlay'
import DefaultModal from '@components/Modals/DefaultModal/DefaultModal'
import VideoModal from '@components/Modals/VideoModal/VideoModal'
import ThankYouModal from '@components/Modals/ThankYouModal/ThankYouModal'

//import functions from '@components/Modals/ModalWrapper/functions.js'

export default function ModalWrapper({ 
  //page vars  
}) {

	useEffect(() => {
    $(document).ready(function() {
      	
      	console.log('modal script connected');

      	//OPEN
      		$('body').on('click','.modal_open',function(e) {
      			console.log('.modal_open clicked');
      			e.preventDefault();
      			var modal_get = $(this).data('modal');
      			console.log(modal_get);
      			$('.modal_overlay').addClass('active');
      			$('.modal[data-modal="'+modal_get+'"]').addClass('active');
      		});

      	//VIDEO
      		$('body').on('click','.modal_open[data-modal="VideoModal"]',function(e) {
      			e.preventDefault();
      			var video_id = $(this).attr('data-youtube-id');
      			$('.modal.video iframe').attr('src', 'https://www.youtube.com/embed/' + video_id + '?rel=0');
      			$('.modal_overlay').addClass('active');
      			$('.modal.video').addClass('active');
      		});

      	//THANK YOU
      		var urlParams = new URLSearchParams(window.location.search);
      		if(urlParams.has('thank_you')){
      			var modal_get = "ThankYouModal";
      			console.log(modal_get);
      			$('.modal_overlay').addClass('active');
      			$('.modal[data-modal="'+modal_get+'"]').addClass('active');
      		}


      	//CLOSE
      		$('body').on('click','.modal_overlay',function(e) {
      			e.preventDefault();
      			$('.modal_overlay').removeClass('active');
      			$('.modal').removeClass('active');

      			//only affects video modals
      			setTimeout(
      				function(){
      					$('.modal.video iframe').attr('src', '');
      				}, 500);
      		});

      		//Modal Close
      		$('body').on('click','.modal_close',function(e) {
      			e.preventDefault();
      			$('.modal_overlay').removeClass('active');
      			$('.modal').removeClass('active');

      			//only affects video modals
      			setTimeout(
      				function() {
      					$('.modal.video iframe').attr('src', '');
      				}, 500);
      		});

      		//Close on Link Click
      		$('body').on('click','.modal a',function(e) {
      			e.preventDefault();
      			$('.modal_overlay').removeClass('active');
      			$('.modal').removeClass('active');

      			//only affects video modals
      			setTimeout(
      				function(){
      					$('.modal.video iframe').attr('src', '');
      				}, 500);
      		});

      	//ESC Key Close
      		var esc_key = 27;

      		$(document).keyup(function(e) {
      		  if (e.keyCode == esc_key && $('.modal_overlay').hasClass('active')){
      		  	e.preventDefault();
      		  	$('.modal_overlay').removeClass('active');
      		  	$('.modal').removeClass('active');

      		  	//only affects video modals
      		  	setTimeout(
      		  		function(){
      		  			$('.modal.video iframe').attr('src', '');
      		  		}, 500);
      		  }
      		});

      });
    
  });

return (
	<div className={styles.ModalWrapper}>

		<ModalOverlay className={styles.overlay}/>

		<DefaultModal className={styles.modal}/>
		<VideoModal className={styles.modal}/>
		<ThankYouModal className={styles.modal}/>
	</div>  	
)}