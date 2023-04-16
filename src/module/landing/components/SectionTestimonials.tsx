import React, { FC, useState } from 'react';
import { Testimonial } from '@/components/ui/testimonial';
import { testimonialsData } from '../testimonialsData';

export const SectionTestimonials: FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const lastIndex = testimonialsData.length - 1;

	const prevSlide = () => {
		setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
	};

	const nextSlide = () => {
		setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
	};

	return (
		<section className="w-full flex items-center justify-center bg-[#47694f]">
			<div className=" wrapper-width lg:m-0 px-4 py-12  sm:px-6 py12 md:py-24 lg:mr-0 lg:pl-8 lg:pr-0">
				<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
					<div className="max-w-xl text-center sm:text-left">
						<h2 className="text-2xl text-left  md:text-4xl  block pb-6">
							Testimonianze
						</h2>
						<p className="pb-10 text-left md:text-lg">
							Leggi cosa hanno detto gli altri sul mio lavoro e sui servizi che
							offro
						</p>

						<div className="hidden lg:mt-8 lg:flex lg:gap-4">
							<button
								className="prev-button rounded-full border border-[#4a905d] p-4 text-[#4a905d] hover:bg-[#4a905d] hover:text-white"
								onClick={prevSlide}
							>
								<span className="sr-only">Previous Slide</span>
								<svg
									className="h-5 w-5 -rotate-180 transform"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9 5l7 7-7 7"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
									/>
								</svg>
							</button>

							<button
								className="next-button rounded-full border border-[#4a905d] p-4 text-[#4a905d] hover:bg-[#4a905d] hover:text-white"
								onClick={nextSlide}
							>
								<span className="sr-only">Next Slide</span>
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9 5l7 7-7 7"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
									/>
								</svg>
							</button>
						</div>
					</div>

					<div className="-mx-4 lg:col-span-2 lg:mx-0">
						<div className="swiper-container !overflow-hidden">
							<div
								className="swiper-wrapper"
								style={{ transform: `translateX(-${currentIndex * 100}%)` }}
							>
								{testimonialsData.map((testimonial, index) => (
									<Testimonial key={index} {...testimonial} />
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-2 flex justify-center gap-4 lg:hidden">
					<button
						aria-label="Previous slide"
						className="prev-button rounded-full border border-[#4a905d] p-4 text-[#4a905d] hover:bg-[#4a905d] hover:text-white"
						onClick={prevSlide}
					>
						<svg
							className="h-5 w-5 -rotate-180 transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 5l7 7-7 7"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					</button>

					<button
						aria-label="Next slide"
						className="next-button rounded-full border border-[#4a905d] p-4 text-[#4a905d] hover:bg-[#4a905d] hover:text-white"
						onClick={nextSlide}
					>
						<svg
							className="h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 5l7 7-7 7"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};
