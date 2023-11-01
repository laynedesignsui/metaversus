'use client';

// MOTION IMPORT
import { motion } from 'framer-motion';
// CONSTANTS
import { newFeatures } from '../constants';
// STYLES IMPORTS
import styles from '../styles';
// MOTION FRAGMENTS
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
// COMPONENTS
import { NewFeatures, TitleText, TypingText } from '../components';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What's New" />
        <TitleText title={<>What's new about Metaversus? </>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature, index) => (
            <NewFeatures key={feature} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] translate-y-8 object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
