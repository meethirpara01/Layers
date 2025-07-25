import React from 'react';
import { motion } from 'framer-motion';
import './About.scss'; // import your SCSS
import Aimg1 from '../assets/agents_of_chaos_1.webp'
import Aimg2 from '../assets/lowkeychaotic_1.webp'
import Aimg3 from '../assets/founders_2.webp'

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, className = "" }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`flip-link ${className}`}
    >
      {/* Top layer */}
      <div className="flip-top">
        {children.split("").map((l, i) => {
          const char = l === " " ? "\u00A0" : l; // replace spaces with nbsp
          return (
            <motion.span
              key={`top-${i}`}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>

      {/* Bottom layer */}
      <div className="flip-bottom">
        {children.split("").map((l, i) => {
          const char = l === " " ? "\u00A0" : l; // replace spaces with nbsp
          return (
            <motion.span
              key={`bottom-${i}`}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

const About = () => {
  return (
    <div className="about-section">
      <FlipLink href="#" className="mainheading">Chaos  is  Creativity</FlipLink>
      <div className='headingdescription'>
        <h2 className="headingdescriptiontext">They've told us the rules.</h2>
        <h2 className="headingdescriptiontext">Fall in Line. play it sefe.</h2>
        <h2 className="headingdescriptiontext">There's a Place For Everything.</h2>
        <h2 className="headingdescriptiontext">And everyone has a place.</h2>
      </div>
      <div className='view-2'>
        <div className='imagecontent'>
          <img src={Aimg1} alt="" />
        </div>
        <div className='textcontent'>
          <div className='text'>
            <h2 className="h2text">Success must have a formula.</h2>
            <h2 className="h2text">Find it, and repeat it.</h2>
            <h2 className="h2text">Over and over and over again.</h2>
          </div>
          <div className='text'>
            <h2 className="h2text">But in this order-obsessed world,</h2>
            <h2 className="h2text">creativity cannot breathe,</h2>
            <h2 className="h2text">and innovation dies.</h2>
          </div>
          <div className='text'>
            <h2 className="h2text">That’s why we chase chaos </h2>
            <h2 className="h2text">And trade logic for magic.</h2>
          </div>
        </div>
      </div>
      <div className='view-3'>
        <div className='imagecontent'>
          <img src={Aimg2} alt="" />
        </div>
        <div className='textcontent'>
          <div className='text'>
            <h2 className="h2text">Chaos challenges us to find new <br /> inspiration. </h2>
            <h2 className="h2text">And rejects the user manual of this-is <br /> -how-it-has-always-been-done.</h2>
            <h2 className="h2text">Do your own thing, it says.</h2>
            <h2 className="h2text">Find your own place.</h2>
            <h2 className="h2text">Chaos has its own mess and methods, <br /> The source of light-bulbs and bright <br /> ideas. Crazy experiments and <br /> accidental genius.</h2>
            <h2 className="h2text">The world will always demand order,</h2>
            <h2 className="h2text">But creativity craves chaos.</h2>
          </div>
        </div>
      </div>
      <div className='view-4'>
        <div className='fimage'>
          <img src={Aimg3} alt="" />
        </div>
        <div className='ftextcontent'>
          <div className='firsttextcontent'>
              <h2 className="fh2text">At Layers, we believe Chaos is a superpower. It helps you break out of moulds, do your own thing, find your own place.</h2>
          </div>
          <div className='secoendtextcontent'>
              <h2 className="fh2text1">Without chaos there would be no innovation. Without chaos there would be no new ideas of greatness.</h2>
              <h2 className="fh2text2">Chaos unsettles those who can’t deal with it. We chase it.</h2>
              <h2 className="fname">Neel & Shlok, <br /> Co-founders of Layers</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
