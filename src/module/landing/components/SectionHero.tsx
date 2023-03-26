import Button from '@/components/ui/button/Button';
import bannerImage from '@/assets/images/banner.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const SectionHero = () => {
	return (
		<section className="w-full  flex flex-col items-center py-24">
			<div className="flex justify-between items-center wrapper-width">
				<div className="flex flex-col">
					<h1 className="text-5xl pb-8 ">Perfect Handmade Knitted Toys</h1>
					<p className="pb-8 max-w-2xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<Button className=" max-w-[200px]">Start</Button>
				</div>
				<motion.div
					custom={-50}
					style={{ position: 'relative' }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				>
					<Image alt="banner" src={bannerImage} width="700" height="700" />
				</motion.div>
			</div>
		</section>
	);
};
