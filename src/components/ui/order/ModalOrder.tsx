import { FC } from 'react';
import {
	FaEnvelope,
	FaWhatsapp,
	FaTelegram,
	FaTimes,
	FaInstagram,
} from 'react-icons/fa';

import { Modal } from '../modal';
import Button from '../button/Button';

interface ModalOrderProps {
	handleModal: () => void;
}

export const ModalOrder: FC<ModalOrderProps> = ({ handleModal }) => {
	return (
		<Modal onClose={handleModal}>
			<div className="p-6 relative ">
				<button
					className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
					onClick={handleModal}
				>
					<FaTimes />
				</button>
				<h2 className="text-xl font-bold mb-4">Come ordinare</h2>
				<p className="mb-4">
					Per ordinare i nostri prodotti, contattaci tramite uno dei seguenti
					recapiti metodi:
				</p>
				<ul className="list-inside mb-4 list-none">
					<li className="pb-2">
						<a
							href="https://t.me/Nataliia_bambole_da_ng"
							target="_blank"
							className="text-md   transition-all block"
						>
							<FaWhatsapp className="inline-block mr-2 text-xl" />
							<span className="hover:text-[#ce5b79]">+39 327 141 6165</span>
						</a>
					</li>
					<li className="pb-2">
						<a
							href="https://t.me/Nataliia_bambole_da_ng"
							target="_blank"
							className="text-md"
						>
							<FaTelegram className="inline-block mr-2 text-xl" />
							<span className="hover:text-[rgb(206,91,121)]">
								Nataliia_bambole_da_ng
							</span>
						</a>
					</li>
					<li>
						<a
							href="mailto:info@bamboledang.com"
							target="_blank"
							className="text-md   transition-all block"
						>
							<FaEnvelope className="inline-block mr-2 text-xl" />
							<span className="hover:text-[#ce5b79]">info@bamboledang.com</span>
						</a>
					</li>
				</ul>
				<p className="mb-4 pt-2">
					Puoi anche seguirci su Instagram per aggiornamenti e offerte speciali:
				</p>
				<Button className="w-full">
					<a
						href="https://instagram.com/bambole_da_ng?igshid=NjNlMDhmYTc="
						target="_blank"
						className="flex items-center justify-center"
					>
						<FaInstagram className="inline-block mr-2 text-xl" />
						Seguici su Instagram
					</a>
				</Button>
			</div>
		</Modal>
	);
};
