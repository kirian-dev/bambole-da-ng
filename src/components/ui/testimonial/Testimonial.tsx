import React, { FC } from 'react';

interface TestimonialProps {
	name: string;
	text: string;
	date: string;
}
export const Testimonial: FC<TestimonialProps> = ({ name, text , date}) => {
	return (
		<div className="swiper-slide">
			<blockquote className="flex h-full flex-col justify-between bg-[#f7f7d5] py-12 px-4">
				<div>
					<div className="flex gap-0.5 text-[gold]">
						{Array(5)
							.fill(null)
							.map((star, index) => (
								<React.Fragment key={index}>
									<svg
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</React.Fragment>
							))}
					</div>

					<div className="mt-4">
						<p className="text-2xl font-bold text-[#4a905d] sm:text-3xl">
							{name}
						</p>

						<p className="mt-4 leading-relaxed text-gray-600">{text}</p>
						<p className='mt-2 text-slate-300 text-sm'>{date}</p>
					</div>
				</div>
			</blockquote>
		</div>
	);
};
