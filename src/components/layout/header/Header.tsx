import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import logo from '@/assets/images/logo.svg';
import { menuListData } from './menuListData';
import styles from './Header.module.css';
import { LanguageDropdown } from './components/LanguageDropdown';
import { HamburgerMenu } from './components/BurgerMenu';
import menuIcon from '@/assets/images/menu.svg';

export const Header: FC = () => {
	const [menuActive, setMenuActive] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.pageYOffset);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const headerClasses = `${styles.header} w-full fixed top-0 px-8 ${
		scrollPosition > 0 ? `${styles.header__background}` : ''
	}`;

	return (
		<header className={headerClasses}>
			<div
				className={`${styles.header__wrapper} `}
			>
				<div className="flex w-full items-center justify-between h-full">
					<Link href="/">
						<Image
							src={logo}
							width={80}
							height={80}
							alt="logo"
							className={styles.image}
						/>
					</Link>
					<ul className="w-full hidden items-center justify-center lg:flex">
						{menuListData &&
							menuListData.map((item, index) => (
								<li key={index} className="mr-8 text-lg ">
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
