import { FC } from 'react';
import { motion, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const SectionMaterials: FC = () => {
	const [ref, inView] = useInView({
		threshold: 0.5, // trigger when the section is 50% in view
		triggerOnce: true, // trigger the animation only once
	});
	return (
		<motion.section
			className="w-full flex justify-center items-center section materials__section"
			ref={ref}
		>
			<div className="flex justify-center items-start flex-col wrapper-width">
				<div className="flex flex-col justify-center items-start">
					<motion.h3
						className="text-3xl font-bold pb-6 text-center md:text-left"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
					>
						Materiali naturali
					</motion.h3>
					<motion.div
						className="max-w-xl text-left lg:text-lg"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						<p className="pb-8">
							Utilizziamo solo i migliori materiali come tessuti di alta qualità
							e altri materiali che garantiscono la durata e la longevità dei
							nostri prodotti.
						</p>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};
