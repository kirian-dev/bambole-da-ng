import { FC } from 'react';

export const SectionInfo: FC = () => {
	return (
		<div className="w-screen">
			<section className="bg-second w-full flex items-center justify-center py-24">
				<div className="flex items-start justify-between wrapper-width">
					<div className="w-1/2 block">
						<h2 className="text-3xl max-w-[500px] block">
							KNITTED TOYS MADE OF NATURAL MATERIALS
						</h2>
					</div>

					<p className="w-1/2">
						Friendly Toys are beautifully designed handmade wooden toys created
						with a special attention to detail and quality. We only work with
						the materials that are natural, biodegradable and safe for children.
						We make our toys using sustainably harvested birch wood, non-toxic
						water based Milk Paint, raw linseed oil and linen ropes, therefore
						they are completely safe for both, our children and the planet. We
						make personalized toys, too, just let us know what name to write on
						the toy and you will receive a precious heirloom toy to stay in your
						family for generations.
					</p>
				</div>
			</section>
		</div>
	);
};
