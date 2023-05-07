import { FC, useState } from 'react';

import image1 from '@/assets/images/product-1.jpg';
import image2 from '@/assets/images/product-4.jpg';
import image3 from '@/assets/images/product-3.jpg';
import { Product } from '@/components/ui/product';
import { ModalOrder } from '@/components/ui/order';
interface SectionProductsProps {
	type: 'accessories' | 'products';
}

export const SectionProducts: FC<SectionProductsProps> = ({ type }) => {
	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal(prev => !prev);
	};

	return (
		<section className="w-full flex justify-center items-center pt-[75px]  lg:pt-[150px] lg:pb-[100px]">
			<div className="wrapper-width">
				<h2 className="text-3xl text-center font-bold pb-10">
					{type === 'products' ? 'Ultimi aggiornamenti' : 'Migliori accessori'}
				</h2>
				<ul className="section__products__list grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center gap-5 justify-center">
					<Product
						image={image1}
						title={'Toys'}
						price={1999}
						description={'Miglior prodotto'}
						handleModal={handleModal}
					/>
					<Product
						image={image2}
						title={'Toys1'}
						price={1999}
						description={'Miglior prodotto'}
						handleModal={handleModal}
					/>
					<Product
						image={image3}
						title={'Toys2'}
						price={1999}
						description={'Miglior prodotto'}
						handleModal={handleModal}
					/>
				</ul>
			</div>
			{showModal && <ModalOrder handleModal={handleModal} />}
		</section>
	);
};
