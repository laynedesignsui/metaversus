'use client';

// these code snippets define two components, TypingText and TitleText, using the Framer Motion library to create animated text elements

// MOTION IMPORT
import { motion } from 'framer-motion';
// MOTION VARIANTS
import { textContainer, textVariant2 } from '../utils/motion';

// animates each letter in the title, providing a typing effect
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

// creates a title with an animation when it comes into view
export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
