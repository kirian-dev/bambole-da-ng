import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const ProductsListItem: FC = ({ product }) => {
	const { image, type, name, price } = product;
	return (
		<li className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[350px] mx-auto cursor-pointer hover:shadow-2xl text-green-800">
			<Link href={`/catalog/${product.id}`}>
				<Image src={image} alt="" className="mb-8" />
				<div className='mb-4 flex gap-x-2 text-sm flex-col'>
					<p>{name}</p>
					<p>{type}</p>
					<p>${price}</p>
				</div>
			</Link>
		</li>
	);
};
