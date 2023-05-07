import { FC } from 'react';

export const SectionProducts: FC = () => {
	return (
		<section className="w-full flex justify-center items-center py-12 md:py-24 px-4">
			<div className="wrapper-width flex flex-col justify-center items-start">
				<h2 className="text-2xl  md:text-left  md:text-4xl  block pb-6">
					Cosa creo
				</h2>
				<p className="pb-10 md:text-lg">Qui puoi vedere esempi di lavoro</p>
				<div className="pt-10 md:text-lg">
					<p className="pb-6">
						Come artigiano appassionato, amo creare cose uniche e belle. Una
						delle cose che preferisco creare sono i giocattoli a maglia. Queste
						creazioni fatte a mano sono il modo perfetto per aggiungere un tocco
						di personalità e fantasia a qualsiasi spazio. Dagli adorabili
						animali ai personaggi stravaganti, amo dare vita alla mia
						immaginazione con filati morbidi e coccolosi.
					</p>
					<p className="pb-6">
						Quando creo i miei giocattoli a maglia, sono orgoglioso di ogni
						punto. Ognuno è realizzato con cura e attenzione ai dettagli,
						assicurando che ogni giocattolo sia il più perfetto possibile. Sia
						che stia lavorando a un nuovo design o modificando un vecchio
						preferito, metto il mio cuore e la mia anima in ogni creazione.
						Credo che questa dedizione sia ciò che rende i miei giocattoli a
						maglia davvero speciali.
					</p>
					<p>
						Se stai cercando un`aggiunta unica e affascinante alla tua casa, o
						un regalo unico per una persona speciale, i miei giocattoli a maglia
						sono la scelta perfetta. Non sono solo carini e coccolosi; sono
						anche realizzati con amore e cura, e questo è qualcosa che non puoi
						trovare in un giocattolo prodotto in serie. Che tu stia cercando una
						nuova aggiunta alla tua collezione o semplicemente qualcosa per
						rallegrare la tua giornata, spero che prenderai in considerazione
						uno dei miei giocattoli fatti a mano.
					</p>
				</div>
			</div>
		</section>
	);
};
