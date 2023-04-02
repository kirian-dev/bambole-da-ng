import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import logo from '@/assets/images/logo.svg';

export const Footer: FC = () => {
	return (
		<footer className="w-full flex justify-center items-center py-24 ">
			<div className="wrapper-width flex flex-col ">
				<div className="flex justify-between items-center">
					<Link href="/" className="py-6 block ">
						<Image src={logo} width={100} height={100} alt="logo" />
					</Link>
					<div>Follow us</div>
				</div>
				<div className="flex justify-between items-center pt-20">
					<p>© 2023 Handmade Toys</p>
					<p>made by Kirill Polozenko</p>
				</div>
			</div>
		</footer>
	);
};
