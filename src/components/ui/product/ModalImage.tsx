import { FC } from 'react';

import { StaticImageData } from 'next/image';

import { Modal } from '../modal';
import { FaTimes } from 'react-icons/fa';
import { Carousel } from '../carousel';

interface ModalImageProps {
	handleModal: () => void;
	title: string;
	images: StaticImageData;
}

export const ModalImage: FC<ModalImageProps> = ({ handleModal, title, images }) => {
	return (
		<Modal onClose={handleModal} size="large">
			<div className="p-6 relative">
				<button
					className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
					onClick={handleModal}
				>
					<FaTimes />
				</button>
				<h2 className="text-xl font-bold mb-4">{title}</h2>
				<Carousel images={images}/>
			</div>
		</Modal>
	);
};
