/**
 * Single source of truth for personal information.
 * Every component reads from here — change a value once, it updates everywhere.
 */
export const profile = {
  name: 'Peyman Afshari',
  fullName: 'Peyman Afshari Bijarbaneh',
  initials: 'PA',
  role: 'Computer Engineer · Artificial Intelligence',
  location: 'Genoa, Italy',

  // Primary address, used for every mailto: on the site.
  email: 'pmn.afshari@outlook.com',
  // Secondary address, listed as an alternate in the Contact section.
  emailAlt: 'pmnafshari@gmail.com',

  github: 'https://github.com/pmnafshari',
  linkedin: 'https://www.linkedin.com/in/peyman-afshari-936149378/',
  scholar: 'https://scholar.google.com/citations?user=WY-q-TsAAAAJ&hl=en',

  /**
   * Drop a cv.pdf into public/ to switch the "Download CV" button on.
   * Set to '' to hide the button entirely.
   */
  cv: '',

  availability: 'Open to research collaboration & AI roles',

  headline: ['Building intelligent', 'systems through', 'machine learning.'],

  intro:
    'I design and develop intelligent solutions using machine learning, deep learning, computer vision, and modern software engineering — with a focus on healthcare and applied research.',
};

export const about = {
  paragraphs: [
    "I'm a Computer Engineering master's student at the University of Genoa, working on artificial intelligence applied to real problems. My current research classifies meningioma tumour grades from atomic force microscopy force curves and histology slides, using temporal CNNs, transformers, and attention-based multiple instance learning.",
    'I build end to end: preparing and annotating data, training and evaluating models, and putting the results somewhere they can be inspected. Before returning to study I spent over a year leading ERP and CRM delivery as an IT project manager, which is where I learned to make technical work legible to the people who depend on it.',
  ],
  highlights: [
    'Deep Learning',
    'Computer Vision',
    'Medical AI',
    'Research & Development',
    'Data Engineering',
  ],
  stats: [
    { value: '3', label: 'IEEE publications' },
    { value: '30/30', label: 'Multimodal Systems & Software Engineering' },
    { value: 'EQF 7', label: "Master's, University of Genoa" },
  ],
};
