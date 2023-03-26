import { productsData } from '@/common/data/products.data';
import { FC } from 'react';
import { ProductsListItem } from './ProductsListItem';

export const ProductsList: FC = () => {
	return (
		<section className="wrapper-width">
			<ul className="flex flex-wrap gap-5">
				{productsData.map((product: any) => (
					<ProductsListItem key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
};
