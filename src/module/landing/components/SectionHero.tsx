import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const SectionHero = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, // trigger when the section is 50% in view
    triggerOnce: true, // trigger the animation only once
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const h3Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  const pVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } },
  };

  return (
    <motion.section
      className="w-full flex justify-center items-center section hero"
      id="perfect-handmade"
      ref={ref} // add ref to the section
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // trigger the animation when the section is in view
    >
      <div className="flex justify-center items-start flex-col wrapper-width">
        <div className="flex flex-col justify-center items-start">
          <motion.h3
            className="text-3xl font-bold  pb-6 md:text-left"
            variants={h3Variants}
          >
            Giocattoli fatti a mano perfetti
          </motion.h3>
          <motion.div
            className="max-w-xl text-left  lg:text-lg"
            variants={pVariants}
          >
            <p className="pb-5">
              Benvenuti al mio sito personale! Sono Natalia Golovchenko, una
              creatrice di giocattoli a maglia e sono entusiasta di condividere
              la mia passione per i giocattoli fatti a mano con voi.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
