import { FC } from 'react';
import { ProductsList } from './components/ProductsList';

export const Catalog: FC = () => {
	return (
		<div className="w-full flex items-center justify-center flex-col pt-24">
			<h1 className='block w-full pb-24 text-5xl'>TOYS CATALOG</h1>
			<ProductsList />
		</div>
	);
};
