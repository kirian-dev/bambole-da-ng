import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import logo from '@/assets/images/logo.svg';
import { menuListData } from './menuListData';
import styles from './Header.module.css';
import { LanguageDropdown } from './components/LanguageDropdown';
import { HamburgerMenu } from './components/BurgerMenu';
import menuIcon from '@/assets/images/menu.svg';
export const Header: FC = () => {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<header
			className="backdrop-blur-md w-full fixed top-0"
			style={{ zIndex: '999' }}
		>
			<div className="flex pt-6 wrapper-width  z-50 ">
				<div className=" flex  w-full items-center justify-between px-4 ">
					<Link href="/" className="py-2 ">
						<Image
							src={logo}
							width={85}
							height={85}
							alt="logo"
							className={styles.image}
						/>
					</Link>
					<ul className="w-full hidden items-center justify-center lg:flex">
						{menuListData &&
							menuListData.map((item, index) => (
								<li key={index} className="mr-8 text-2xl ">
									<Link className={styles.link} href={item.link}>
										{item.title.toUpperCase()}
									</Link>
								</li>
							))}
					</ul>
					<div className="flex items-center">
						<LanguageDropdown />
						<div
							className="menu__btn block lg:hidden"
							onClick={() => setMenuActive(!menuActive)}
						>
							<Image src={menuIcon} alt="menu" />
						</div>
					</div>
				</div>
				<HamburgerMenu active={menuActive} setMenuActive={setMenuActive} />
			</div>
		</header>
	);
};
