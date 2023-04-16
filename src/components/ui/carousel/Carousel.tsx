import { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	EffectCards,
	Pagination,
	Navigation,
	Autoplay,
	EffectCoverflow,
} from 'swiper';

import styles from './Carousel.module.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images: string[] = [
	require('@/assets/images/slider/slider-photo-5.jpg'),
	require('@/assets/images/slider/slider-photo-6.jpg'),
	require('@/assets/images/slider/slider-photo-10.jpg'),
	require('@/assets/images/slider/slider-photo-4.jpg'),
	require('@/assets/images/slider/slider-photo-8.jpg'),
	require('@/assets/images/slider/slider-photo-9.jpg'),
	require('@/assets/images/slider/slider-photo-2.jpg'),
	require('@/assets/images/slider/slider-photo-3.jpg'),
	require('@/assets/images/slider/slider-photo-1.jpg'),
	require('@/assets/images/slider/slider-photo-7.jpg'),
];

export const Carousel: FC = () => {
	return (
		<div className={styles.container}>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 10,
					stretch: 0,
					depth: 100,
					modifier: 2,
					slideShadows: true,
				}}
				pagination={{
					clickable: true,
					renderBullet: function(index, className) {
						return `<span class="${className}" style="background-color: green; margin-top: 24px;"></span>`;
					},
				}}
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
				breakpoints={{
					580: {
						slidesPerView: 2,
					},
					990: {
						slidesPerView: 3,
					},
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="mySwiper"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<Image
							alt="image"
							src={image}
							width={700}
							height={700}
							className={styles.image}
						/>
					</SwiperSlide>
				))}
				<div className="swiper-button-prev" />
				<div className="swiper-button-next" />
			</Swiper>
		</div>
	);
};
