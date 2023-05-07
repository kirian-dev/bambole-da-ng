import { FC } from 'react';

import { Header } from './header/Header';

type LayoutProps = {
	children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<Header />
			<main className="flex justify-center w-full ">
				<div>{children}</div>
			</main>
		</div>
	);
};
