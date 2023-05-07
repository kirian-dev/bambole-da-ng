import { FC } from 'react';
import { ProductsList } from './components/ProductsList';
import { motion } from 'framer-motion';
import { Footer } from '@/components/ui/footer';

interface CatalogProps {
	type: 'toys' | 'accessories';
}

export const Catalog: FC<CatalogProps> = ({ type }) => {
	return (
		<section className="w-full flex items-center justify-center flex-col">
			<div
				className={`section ${
					type === 'toys' ? 'toys__section' : 'accessories__section'
				} catalog`}
			>
				<div className="toys__cover catalog">
					<div className="w-full text-center flex justify-center items-center h-full flex-col">
						<h1 className="text-white block py-6 text-4xl md:text-5xl lg:text-7xl font-semibold">
							{type === 'toys' ? 'Giocattoli unici' : 'Accessori unici'}
						</h1>
						<p className="md:py-4 text-white text-xl font-normal">
							Grande regalo
						</p>
					</div>
				</div>
			</div>
			<h2 className="py-10 md:pt-16 pb-11 text-xl md:text-2xl px-8 text-center">
				Amiamo creare cose speciali e uniche per decorare la tua vita e la tua
				casa.
			</h2>
			<ProductsList />
			<Footer />
		</section>
	);
};
