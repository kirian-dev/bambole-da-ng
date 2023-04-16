import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import logo from '@/assets/images/logo.svg';

export const Footer: FC = () => {
	return (
		<footer className="w-full flex justify-center items-center py-12 md:py-24 px-4">
			<div className="wrapper-width flex flex-col ">
				<div className="flex justify-between items-center">
					<Link href="/" className="py-6 block ">
						<Image src={logo} width={75} height={75} alt="logo" />
					</Link>
					<div className="flex gap-4 items-center">
						<p className="text-lg">Seguimi su</p>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram className="text-3xl text-[#f7f7d5] hover:text-[#388a67]" />
						</a>
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook className="text-3xl text-[#f7f7d5] hover:text-[#388a67]" />
						</a>
					</div>
				</div>
				<div className="flex justify-center items-center pt-10 w-full">
					<p>© 2023 Bambole da NG</p>
				</div>
			</div>
		</footer>
	);
};
