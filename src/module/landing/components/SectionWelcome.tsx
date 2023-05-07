import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
export const SectionWelcome: FC = () => {
	return (
		<motion.section className="section welcome">
			<motion.div className="welcome__cover">
				<motion.div
					className="relative flex justify-center items-center flex-col h-full wrapper-width"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div>
						<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold pt-6 pb-4 md:pb-10 text-center">
							Bambole da NG
						</h1>
						<p className="text-2xl md:text-3xl lg-text-5xl font-semibold text-center">
							Benvenuto nel mio negozio!
						</p>
					</div>

					<motion.div className="absolute bottom-6 animate-bounce">
						<a href="#perfect-handmade">
							<FiChevronDown size={60} className="arrow" />
						</a>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};
