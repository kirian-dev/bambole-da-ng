import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
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

interface CarouselProps {
	images: StaticImageData;
}

export const Carousel: FC<CarouselProps> = ({ images }) => {
	return (
		<div className={styles.container}>
			<Swiper
				slidesPerView={1}
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
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="mySwiper"
			>
				{/* {images.map((image, index) => ( */}
					<SwiperSlide>
						<Image
							alt="image"
							src={images}
							width={500}
							height={500}
							className={styles.image}
						/>
					</SwiperSlide>
				{/* ))} */}
				<div className="swiper-button-prev" />
				<div className="swiper-button-next" />
			</Swiper>
		</div>
	);
};
