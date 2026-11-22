import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { Skills } from '../sections/Skills';
import { Education } from '../sections/Education';
import { Contact } from '../sections/Contact';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};
