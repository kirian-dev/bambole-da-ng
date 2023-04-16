import { FC } from 'react';

import { Meta } from '@/common/utils/meta';
import { SectionHero } from './components/SectionHero';
import { SectionInfo } from './components/SectionInfo';
import { SectionProducts } from './components/SectionProducts';
import { SectionTestimonials } from './components/SectionTestimonials';

export const Landing: FC = () => {
	return (
		<Meta title="">
			<SectionHero />
			<SectionInfo />
			<SectionProducts />
			<SectionTestimonials />
		</Meta>
	);
};
