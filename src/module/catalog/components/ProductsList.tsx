import { productsData } from '@/common/data/products.data';
import { FC } from 'react';
import { ProductsListItem } from './ProductsListItem';

import styles from './ProductsList.module.css';
export const ProductsList: FC = () => {
	return (
		<section className="wrapper-width">
			<ul className="flex flex-wrap gap-5">
				{productsData.map(product => (
					<ProductsListItem key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
};
