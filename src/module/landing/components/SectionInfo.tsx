import { FC } from 'react';

export const SectionInfo: FC = () => {
	return (
		<div className="xl:w-screen bg-second">
			<section className="flex items-center justify-center py-12 md:py-16">
				<div className="flex items-start justify-center md:justify-between wrapper-width flex-col md:flex-row px-4">
					<div className="w-full text-center lg:text-left md:w-1/2 block">
						<h2 className="text-2xl  md:text-left lg:max-w-[500px] md:text-4xl  block">
							GIOCATTOLI A MAGLIA REALIZZATI CON MATERIALI NATURALI
						</h2>
					</div>
					<div className="w-full md:w-1/2 text-left md:text-lg pt-10 md:pt-0">
						<p className="pb-6">
							I giocattoli amichevoli sono giocattoli in legno fatti a mano dal
							design accattivante creati con una particolare attenzione ai
							dettagli e alla qualità. Lavoriamo solo con i materiali che sono
							naturali, biodegradabili e sicuri per i bambini.
						</p>
						<p className="pb-6">
							Realizziamo i nostri giocattoli utilizzando legno di betulla
							raccolto in modo sostenibile, non tossico Milk Paint a base
							d`acqua, olio di lino grezzo e corde di lino, quindi sono
							completamente sicuri sia per i nostri bambini che per il pianeta.
						</p>
						<p>
							Noi crea anche giocattoli personalizzati, facci solo sapere su
							quale nome scrivere il giocattolo e riceverai un prezioso
							giocattolo cimelio da tenere nel tuo famiglia da generazioni.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};
