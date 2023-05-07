import { FC } from 'react';

import { Meta } from '@/common/utils/meta';
import { SectionHero } from './components/SectionHero';
import { SectionToys } from './components/SectionToys';
import { SectionProducts } from './components/SectionProducts';
import { SectionWelcome } from './components/SectionWelcome';
import { SectionAccessories } from './components/SectionAccessories';
import { SectionMaterials } from './components/SectionMaterials';
import { SectionContacts } from './components/SectionContacts';

export const Landing: FC = () => {
	return (
		<Meta title="">
			<SectionWelcome />
			<SectionHero />
			<SectionToys />
			<SectionProducts type="products" />
			<SectionAccessories />
			<SectionProducts type="accessories" />
			<SectionMaterials />
			<SectionContacts />
		</Meta>
	);
};
