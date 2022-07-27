import styles from './style.module.scss'
import styled from "styled-components";

//import BlogListing from '@components/BlogListing/BlogListing'


// import Swiper core and required modules
import React, { useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, Controller]);




export default function MultiPartSlider({ 
  //page vars
}) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
	<div className={styles.wrapper}>

		<Swiper 
			className={styles.ContentSlider}
			onSwiper={setFirstSwiper} 
			controller={{ control: secondSwiper }}
			spaceBetween={100}
			slidesPerView={1}
			loop={true}
			speed={500}
			pagination={{ clickable: true }}
		>
			
			<SwiperSlide>
				<div className={styles.SlideInner}>
					SLIDE 1
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div className={styles.SlideInner}>
					SLIDE 2
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div className={styles.SlideInner}>
					SLIDE 3
				</div>
			</SwiperSlide>

		</Swiper>

		<Swiper 
			className={styles.CopySlider}
			onSwiper={setSecondSwiper} 
			controller={{ control: firstSwiper }}
			spaceBetween={100}
			slidesPerView={1}
			loop={true}
			speed={500}
			navigation={{ clickable: true }}
		>
			
			<SwiperSlide>
				<div className={styles.SlideInner}>
					Slide 1
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.SlideInner}>
					Slide 2
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.SlideInner}>
					Slide 3
				</div>
			</SwiperSlide>

		</Swiper>

	</div>
  	
  )
}
