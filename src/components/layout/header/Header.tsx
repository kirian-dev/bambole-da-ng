import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logo from '@/assets/images/logo.svg';
import { menuListData } from './menuListData';
import styles from './Header.module.css';
import { LanguageDropdown } from './components/LanguageDropdown';
import Button from '@/components/ui/button/Button';

export const Header: FC = () => {
	return (
		<header className="flex pt-6 w-[1280px]">
			<div className=" flex  w-full items-center justify-between px-4">
				<Link href="/" className="py-6 ">
					<Image src={logo} width={85} height={85} alt="logo" />
				</Link>
				<ul className="w-full flex items-center justify-center ">
					{menuListData &&
						menuListData.map((item, index) => (
							<li key={index} className="mr-8 text-2xl">
								<Link className={styles.link} href={item.link}>
									{item.title.toUpperCase()}
								</Link>
							</li>
						))}
				</ul>

				<LanguageDropdown />
			</div>
		</header>
	);
};
