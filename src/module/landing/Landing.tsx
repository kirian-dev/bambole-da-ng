import { Meta } from '@/common/utils/meta';
import { SectionHero } from './components/SectionHero';
import { SectionInfo } from './components/SectionInfo';
import { SectionProducts } from './components/SectionProducts';
import { SectionTestimonials } from './components/SectionTestimonials';
import { SectionVideo } from 'module/landing/components/SectionVideo';
import { FC } from 'react';

export const Landing: FC = () => {
	return (
		<Meta title="">
			<SectionHero />
			<SectionInfo />
			<SectionProducts />
			<SectionTestimonials />
			<SectionVideo />
		</Meta>
	);
};
