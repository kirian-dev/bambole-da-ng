import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';
import Button from '../button/Button';
import { ModalImage } from './ModalImage';

interface ProductProps {
	image: StaticImageData;
	title: string;
	description?: string;
	price: number;
	size?: 'small' | 'large';
	handleModal: () => void;
}
export const Product: FC<ProductProps> = ({
	image,
	title,
	description,
	price,
	size,
	handleModal,
}) => {
	const [showModal, setShowModal] = useState(false);

	const handleModalImage = () => {
		setShowModal(prev => !prev);
	};
	return (
		<li
			className={`flex justify-center flex-col items-center  ${
				size === 'small' ? 'pb-0' : 'pb-10'
			}`}
		>
			<Image
				src={image}
				alt={title}
				width={size === 'small' ? 260 : 350}
				height={size === 'small' ? 292 : 380}
				className={`rounded-md transition-all hover:scale-105 ${
					size === 'small' ? 'h-[292px]' : 'h-[380px]'
				} cursor-pointer`}
				onClick={handleModalImage}
			/>
			<h3 className="pt-4 text-lg font-bold">{title}</h3>
			<p className="pt-2 text-[12px] font-light">{description}</p>
			<p className="pt-2 text-[14px] font-medium">€{price}</p>
			<Button className="mt-4 text-[14px]" onClick={handleModal}>
				Acquistare
			</Button>
			{showModal && <ModalImage handleModal={handleModalImage} title={title} images={image}/>}
		</li>
	);
};
