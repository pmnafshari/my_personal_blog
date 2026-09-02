import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Skills } from '../components/Skills/Skills';
import { Projects } from '../components/Projects/Projects';
import { Research } from '../components/Research/Research';
import { Background } from '../components/Background/Background';
import { Contact } from '../components/Contact/Contact';
import { useReveal } from '../hooks/useReveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function Home() {
  useDocumentMeta({
    title: 'Peyman Afshari — AI & Computer Engineer',
    description:
      "Computer Engineer specializing in Artificial Intelligence — machine learning, deep learning, and computer vision applied to healthcare and intelligent systems. Master's student at the University of Genoa.",
    path: '/',
  });

  useReveal();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Background />
      <Contact />
    </>
  );
}
