import { FC } from 'react';
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Carousel.module.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import imgToy from '@/assets/images/toy.webp';
import Image from 'next/image';
import img2 from '@/assets/images/banner.png';

export const Carousel: FC = () => {
	return (
		<div className={styles.container}>
			<Swiper
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					type: 'fraction',
				}}
				navigation={true}
				scrollbar={{
					draggable: true,
				}}
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards, Pagination, Navigation, Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Image alt="image" src={imgToy} />
				</SwiperSlide>
				<SwiperSlide>
					<Image alt="image" src={img2} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
