import React, { FC } from 'react';
import Link from 'next/link';
import logo from '@/assets/images/logo.svg';
import { menuListData } from '../menuListData';
import Image from 'next/image';
interface HamburgerMenuProps {
	active: boolean;
	setMenuActive: (active: boolean) => void;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({
	active,
	setMenuActive,
}) => {
	return (
		<nav
			className={active ? 'menu-active menu ' : 'menu'}
			onClick={() => setMenuActive(false)}
		>
			<div className="blur" />
			<ul className="menu__box" onClick={e => e.stopPropagation()}>
				<li className="relative flex justify-between items-start w-full">
					<Link href="/">
						<Image src={logo} width={85} height={85} alt="logo" />
					</Link>
					<div className="relative top-3" onClick={() => setMenuActive(false)}>
						<span className="menu-close"></span>
					</div>
				</li>
				{menuListData.map((item, index) => (
					<li className="pt-5 pb-4" key={index}>
						<Link
							className="header__link"
							href={item.link}
							onClick={() => setMenuActive(false)}
						>
							{item.title.toUpperCase()}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
