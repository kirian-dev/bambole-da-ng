import { FC } from 'react';

export const SectionToys: FC = () => {
	return (
		<section className="section toys__section">
			<div className="toys__cover">
				<div className="w-full text-center flex justify-center items-center h-full flex-col">
					<h2 className="text-white block py-6 text-4xl md:text-5xl lg:text-7xl font-semibold">
						Giocattoli
					</h2>
					<p className="md:py-4 text-white text-xl font-normal">
						Fatto con amore
					</p>
				</div>
			</div>
		</section>
	);
};
