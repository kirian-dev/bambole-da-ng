import { FC } from 'react';

import Image from 'next/image';
import logoExtra from '@/assets/images/logo-dop.svg';

export const SectionContacts: FC = () => {
	return (
		<section className="contacts__section">
			<div className="wrapper-width flex justify-center items-center flex-col">
				<div className="divider" />
				<h3 className="pt-16 text-2xl md:text-3xl lg:text-4xl font-bold pb-7">I NOSTRI CONTATTI</h3>
				<p className="text-xl lg:text-2xl pb-16 text-center">
					Contattaci per qualsiasi domanda via mail o telefono
				</p>
				<div>
					<p className="text-md lg:text-lg pb-2 font-bold">Telefono: +3800000000</p>
					<p className="text-md lg:text-lg pb-2 font-bold">E-mail: hello@company.com</p>
				</div>
			</div>
			<div className='w-full flex justify-center items-center'>
				<Image src={logoExtra} width={150} height={150} alt="logo-extra" />
			</div>
		</section>
	);
};
