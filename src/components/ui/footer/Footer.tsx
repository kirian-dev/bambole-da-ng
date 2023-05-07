import Image from 'next/image';
import { FC } from 'react';
import { FaTelegramPlane, FaFacebookF, FaInstagram } from 'react-icons/fa';
import logoExtra from '@/assets/images/logo-dop.svg';

export const Footer: FC = () => {
	return (
		<footer className="pt-5 md:pt-10 lg:pt-16">
			<div className="w-full flex justify-center items-center">
				<Image src={logoExtra} width={150} height={150} alt="logo-extra" />
			</div>
			<div className="pt-14  pb-24 max-w-[560px]">
				<p className="text-xl lg:text-2xl pb-2 text-center font-normal">
					+1 123 456 78 90
				</p>
				<p className="text-xl lg:text-2xl pb-10 text-center font-normal">
					shetuka@store.com
				</p>
				<p className="text-md lg:text-lg pb-2 text-center">
					Per qualsiasi domanda e per effettuare un ordine, vi preghiamo di
					contattarci per telefono, mail e social network.
				</p>
				<div className="flex justify-center items-center pt-12">
					<a href="https://t.me/Nataliia_bambole_da_ng" target="_blank">
						<div className="bg-black rounded-full p-2">
							<FaTelegramPlane className="text-white text-3xl" />
						</div>
					</a>
					<a
						href="https://www.facebook.com/people/%D0%9D%D0%B0%D1%82%D0%B0%D0%BB%D0%B8%D1%8F-%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE/pfbid02jfj57d1LAiNFbpwua1bVD9XytEWaFSEeA6yL6fKKcsFABLB73eo8ktKmtPuJPbSPl/"
						target="_blank"
					>
						<div className="bg-black rounded-full p-2 mx-5">
							<FaFacebookF className="text-white text-3xl" />
						</div>
					</a>
					<a
						href="https://instagram.com/bambole_da_ng?igshid=NjNlMDhmYTc="
						target="_blank"
					>
						<div className="bg-black rounded-full p-2">
							<FaInstagram className="text-white text-3xl" />
						</div>
					</a>
				</div>
			</div>
		</footer>
	);
};
