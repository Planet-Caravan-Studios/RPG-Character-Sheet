import React, { useState } from 'react';
import styles from './style.module.scss'
import styled from "styled-components";

import BasicSlide from '@components/Sliders/BasicSlide/BasicSlide'


//import BlogListing from '@components/BlogListing/BlogListing'


// import Swiper core and required modules
import SwiperCore, { Controller, Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



// install Swiper modules
SwiperCore.use([Controller, Navigation, Pagination, A11y, Autoplay]);


export default function DefaultSlider({ 
  //page vars
}) {
  return (
	<Swiper
		className={styles.Slider}
		//Settings
		centeredSlides={true}
		spaceBetween={100}
		slidesPerView={1}
		loop={true}
		speed={500}
		
		//Navigation
		navigation
		pagination={{ clickable: true }}

		//Actions
		onSwiper={(swiper) => console.log(swiper)}
		onSlideChange={() => console.log('slide change')}
	>
		<SwiperSlide className={styles.SlideOutter}>
			<div className={styles.SlideInner}>
				
				<BasicSlide
					image="/img/hm-logo-nav.png"
					imageAlt="The Holy Mountain"
					titleCopy="BasicSlide Component"
					bodyCopy="This slide is its own component, with 
						image, imageAlt, titleCopy, and bodyCopy props."
				/>

			</div>
		</SwiperSlide>

		<SwiperSlide className={styles.SlideOutter}>
			<div className={styles.SlideInner}>
				
				<div className={styles.image}>
					<img src="/img/hm-logo-nav.png" alt="Holy Mountain Logo" />
				</div>
				<div className={styles.copy}>
					<p className={styles.title}>The Holy Mountain</p>
					<p className={styles.body}>
						Lorem ipsum dolor sit amet, 
						consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut l
						abore et dolore magna aliqua. Ut enim 
						ad minim veniam, quis nostrud 
						exercitation ullamco laboris 
						nisi ut aliquip ex ea commodo consequat. 
					</p>
				</div>

			</div>
		</SwiperSlide>

		<SwiperSlide className={styles.SlideOutter}>
			<div className={styles.SlideInner}>
				
				<div className={styles.image}>
					<img src="/img/hm-logo-nav.png" alt="Holy Mountain Logo" />
				</div>
				<div className={styles.copy}>
					<p className={styles.title}>The Holy Mountain</p>
					<p className={styles.body}>
						Lorem ipsum dolor sit amet, 
						consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut l
						abore et dolore magna aliqua. Ut enim 
						ad minim veniam, quis nostrud 
						exercitation ullamco laboris 
						nisi ut aliquip ex ea commodo consequat. 
					</p>
				</div>

			</div>
		</SwiperSlide>
	</Swiper>
  	
  )
}
