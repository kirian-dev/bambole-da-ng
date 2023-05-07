import { productsData } from '@/common/data/products.data';
import { ModalOrder } from '@/components/ui/order';
import { Product } from '@/components/ui/product';
import { FC, useState } from 'react';

export const ProductsList: FC = () => {
	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal(prev => !prev);
	};
	return (
		<section className="wrapper-width pb-16 md:pb-24 lg:pb-[180px]">
			<ul className="flex flex-wrap gap-10 justify-center">
				{productsData.map((product: any) => (
					<Product key={product.id} {...product} size="small" handleModal={handleModal}/>
				))}
			</ul>
			{showModal && <ModalOrder handleModal={handleModal} />}
		</section>
	);
};
