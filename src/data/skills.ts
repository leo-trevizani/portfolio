import { SkillItem } from '../types';

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    level: 'Expert / Master',
    iconName: 'Figma',
    description: {
      pt: 'Arquitetura de componentes, auto-layout avançado, variáveis, tokens de design e bibliotecas escaláveis.',
      en: 'Component architecture, advanced auto-layout, variables, design tokens, and scalable system libraries.',
      es: 'Arquitectura de componentes, auto-layout avanzado, variables, tokens de diseño y bibliotecas escalables.'
    }
  },
  {
    id: 'adobe',
    name: 'Pacote Adobe',
    category: 'design',
    level: 'Senior Specialist',
    iconName: 'Layers',
    description: {
      pt: 'Photoshop, Illustrator, After Effects e Premiere para direção de arte visual, edição vetorial e micro-interações.',
      en: 'Photoshop, Illustrator, After Effects, and Premiere for visual art direction, vector editing, and motion graphics.',
      es: 'Photoshop, Illustrator, After Effects y Premiere para dirección de arte visual, edición vectorial y microinteracciones.'
    }
  },
  {
    id: 'motion',
    name: 'Motion',
    category: 'design',
    level: 'Advanced',
    iconName: 'Sparkles',
    description: {
      pt: 'Prototipagem de alta fidelidade, animações de transição, Lottie, Framer Motion e micro-feedbacks acessíveis.',
      en: 'High-fidelity prototyping, transition animations, Lottie, Framer Motion, and accessible micro-interactions.',
      es: 'Prototipado de alta fidelidad, animaciones de transición, Lottie, Framer Motion y microinteracciones accesibles.'
    }
  },
  {
    id: 'frontend',
    name: 'Front-end (HTML/CSS)',
    category: 'dev',
    level: 'Senior Full Stack',
    iconName: 'Code',
    description: {
      pt: 'React, TypeScript, Tailwind CSS, HTML5 semântico, CSS3 moderno e arquitetura de componentes reutilizáveis.',
      en: 'React, TypeScript, Tailwind CSS, semantic HTML5, modern CSS3, and reusable component architecture.',
      es: 'React, TypeScript, Tailwind CSS, HTML5 semántico, CSS3 moderno y arquitectura de componentes reutilizables.'
    }
  },
  {
    id: 'designops',
    name: 'DesignOps',
    category: 'management',
    level: 'Lead / Strategist',
    iconName: 'Workflow',
    description: {
      pt: 'Otimização de fluxos de trabalho de design, pontes entre design e engenharia, governança e eficiência operacional.',
      en: 'Design workflow optimization, design-to-engineering alignment, governance, and operational efficiency.',
      es: 'Optimización de flujos de trabajo de diseño, integración entre diseño e ingeniería, gobernanza y eficiencia.'
    }
  },
  {
    id: 'design-system',
    name: 'Design System',
    category: 'design',
    level: 'Architect',
    iconName: 'Box',
    description: {
      pt: 'Criação e escala de Design Systems com suporte multi-plataforma, documentação rigorosa e acessibilidade WCAG 2.1.',
      en: 'Building and scaling multi-platform Design Systems with strict documentation and WCAG 2.1 accessibility.',
      es: 'Creación y escala de Sistemas de Diseño multiplataforma con documentación rigurosa y accesibilidad WCAG 2.1.'
    }
  },
  {
    id: 'agile',
    name: 'Liderança Ágil',
    category: 'management',
    level: 'Leader',
    iconName: 'Users',
    description: {
      pt: 'Gestão de times multidisciplinares de UX, facilitação de Sprints, OKRs, mentorias e rituais ágeis de produto.',
      en: 'Leading cross-functional UX teams, facilitating Design Sprints, OKRs, mentoring, and agile product rituals.',
      es: 'Liderazgo de equipos multidisciplinarios de UX, facilitación de Sprints, OKRs, tutorías y rituales ágiles.'
    }
  },
  {
    id: 'community',
    name: 'Gestão de Comunidades',
    category: 'education',
    level: 'Community Manager',
    iconName: 'Globe',
    description: {
      pt: 'Engajamento de comunidades de tecnologia e design, hackathons, encontros técnicos e disseminação de boas práticas.',
      en: 'Tech and design community engagement, hackathons, tech meetups, and fostering design culture.',
      es: 'Compromiso con comunidades de tecnología y diseño, hackathons, encuentros técnicos y cultura de diseño.'
    }
  },
  {
    id: 'teaching',
    name: 'Docência em Ensino Superior',
    category: 'education',
    level: 'Professor',
    iconName: 'GraduationCap',
    description: {
      pt: 'Professor universitário em disciplinas de UX, Branding e Comunicação Social.',
      en: 'University professor teaching courses in UX, Branding, and Communication.',
      es: 'Profesor universitario en asignaturas de UX, Branding y Comunicación Social.'
    }
  }
];
