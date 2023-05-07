import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import logo from '@/assets/images/logo.svg';

export const Footer: FC = () => {
	return (
		<footer className="w-full flex justify-center items-center py-12 md:py-24 px-4 md:pb-10">
			<div className="wrapper-width flex flex-col ">
				<div className="flex justify-between items-center">
					<Link href="/" className="py-6 block ">
						<Image src={logo} width={75} height={75} alt="logo" />
					</Link>
					<div className="flex  items-center">
						<p className="text-lg pr-2">Seguimi su</p>
						<a
							href="https://instagram.com/bambole_da_ng?igshid=NjNlMDhmYTc="
							target="_blank"
							rel="noopener noreferrer"
							className="pr-2"
						>
							<FaInstagram className="text-3xl text-[#f7f7d5] hover:text-[#388a67]" />
						</a>
						<a
							href="https://www.facebook.com/people/%D0%9D%D0%B0%D1%82%D0%B0%D0%BB%D0%B8%D1%8F-%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE/pfbid02jfj57d1LAiNFbpwua1bVD9XytEWaFSEeA6yL6fKKcsFABLB73eo8ktKmtPuJPbSPl/"
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
