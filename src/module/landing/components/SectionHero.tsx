import Button from '@/components/ui/button/Button';
import bannerImage from '@/assets/images/banner.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const SectionHero = () => {
	return (
		<section className="w-full flex justify-center items-center wrapper-width py-12 sm:pt-1 sm:pb-12 md:py-16">
			<div className="flex justify-center items-center flex-col-reverse md:flex-row px-4">
				<div className="flex flex-col justify-center items-center md:items-start">
					<h1 className="text-5xl md:text3xl lg:text-5xl xl:text-6xl  pb-6 text-center md:text-left">
						Giocattoli fatti a mano perfetti
					</h1>
					<div className="max-w-2xl text-center md:text-left lg:text-lg">
						<p className="pb-8">
							Benvenuti al mio sito personale! Sono Natalia Golovchenko, una
							creatrice di giocattoli a maglia e sono entusiasta di condividere
							la mia passione per i giocattoli fatti a mano con voi.
						</p>
						{/* <p className="pb-6">
							Creare giocattoli a maglia unici e di alta qualità è il mio modo
							di esprimere la mia creatività e portare gioia agli altri. Ogni
							giocattolo che creo è realizzato con cura e attenzione ai
							dettagli, utilizzando solo i migliori materiali per garantire una
							creazione duratura e amabile.
						</p> */}
					</div>

					<Button className="w-[300px] md:max-w-[250px]">
						<Link href="/catalog">Prenota ora</Link>
					</Button>
				</div>
				<motion.div
					custom={-50}
					style={{ position: 'relative' }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className=""
				>
					<Image
						alt="banner"
						src={bannerImage}
						width="800"
						height="800"
						className="image"
					/>
				</motion.div>
			</div>
		</section>
	);
};
