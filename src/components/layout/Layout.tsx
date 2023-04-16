import { FC } from 'react';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';

// Props for the Layout component.
type LayoutProps = {
	children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<Header />
			<main className="flex justify-center w-full pt-24">
				<div>{children}</div>
			</main>
			<Footer />
		</div>
	);
};
