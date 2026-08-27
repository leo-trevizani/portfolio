import { SkillItem } from '../types';

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'figma',
    name: {
      pt: 'Figma',
      en: 'Figma',
      es: 'Figma'
    },
    category: 'design',
    level: {
      pt: 'Especialista / Master',
      en: 'Expert / Master',
      es: 'Especialista / Master'
    },
    iconName: 'Figma',
    description: {
      pt: 'Arquitetura de componentes, auto-layout avançado, variáveis, tokens de design e bibliotecas escaláveis.',
      en: 'Component architecture, advanced auto-layout, variables, design tokens, and scalable system libraries.',
      es: 'Arquitectura de componentes, auto-layout avanzado, variables, tokens de diseño y bibliotecas escalables.'
    },
    practicalApplications: {
      pt: [
        'Arquitetura e manutenção de bibliotecas globais com Tokens e Variáveis.',
        'Desenvolvimento de plugins customizados para automação de DesignOps e exportação.'
      ],
      en: [
        'Architecture and maintenance of global libraries with Tokens and Variables.',
        'Custom plugin development for DesignOps automation and token export.'
      ],
      es: [
        'Arquitectura y mantenimiento de bibliotecas globales con Tokens y Variables.',
        'Desarrollo de plugins personalizados para automatización de DesignOps y exportación.'
      ]
    }
  },
  {
    id: 'adobe',
    name: {
      pt: 'Pacote Adobe',
      en: 'Adobe Creative Suite',
      es: 'Paquete Adobe'
    },
    category: 'design',
    level: {
      pt: 'Especialista Sênior',
      en: 'Senior Specialist',
      es: 'Especialista Sénior'
    },
    iconName: 'Layers',
    description: {
      pt: 'Photoshop, Illustrator, After Effects e Premiere para direção de arte visual, edição vetorial e micro-interações.',
      en: 'Photoshop, Illustrator, After Effects, and Premiere for visual art direction, vector editing, and motion graphics.',
      es: 'Photoshop, Illustrator, After Effects y Premiere para dirección de arte visual, edición vectorial y microinteracciones.'
    },
    practicalApplications: {
      pt: [
        'Direção de arte visual de alto impacto com Photoshop e Illustrator.',
        'Criação de animações e micro-interações vetoriais com After Effects e Premiere.'
      ],
      en: [
        'High-impact visual art direction with Photoshop and Illustrator.',
        'Vector animations and micro-interactions with After Effects and Premiere.'
      ],
      es: [
        'Dirección de arte visual de alto impacto con Photoshop e Illustrator.',
        'Animaciones y microinteracciones vectoriales con After Effects y Premiere.'
      ]
    }
  },
  {
    id: 'motion',
    name: {
      pt: 'Motion Design',
      en: 'Motion Design',
      es: 'Motion Design'
    },
    category: 'design',
    level: {
      pt: 'Avançado',
      en: 'Advanced',
      es: 'Avanzado'
    },
    iconName: 'Sparkles',
    description: {
      pt: 'Prototipagem de alta fidelidade, animações de transição, Lottie, Framer Motion e micro-feedbacks acessíveis.',
      en: 'High-fidelity prototyping, transition animations, Lottie, Framer Motion, and accessible micro-interactions.',
      es: 'Prototipado de alta fidelidad, animaciones de transición, Lottie, Framer Motion y microinteracciones accesibles.'
    },
    practicalApplications: {
      pt: [
        'Prototipagem de alta fidelidade com micro-feedbacks táteis e fluidos.',
        'Integração de animações Lottie e Framer Motion diretamente no código de produção.'
      ],
      en: [
        'High-fidelity prototyping with tactile and fluid micro-feedbacks.',
        'Integration of Lottie and Framer Motion animations directly into production code.'
      ],
      es: [
        'Prototipado de alta fidelidad con micro-feedbacks táctiles y fluidos.',
        'Integración de animaciones Lottie y Framer Motion directamente en código de producción.'
      ]
    }
  },
  {
    id: 'frontend',
    name: {
      pt: 'Front-end (HTML / CSS / React)',
      en: 'Front-end (HTML / CSS / React)',
      es: 'Front-end (HTML / CSS / React)'
    },
    category: 'dev',
    level: {
      pt: 'Full Stack Sênior',
      en: 'Senior Full Stack',
      es: 'Full Stack Sénior'
    },
    iconName: 'Code',
    description: {
      pt: 'React, TypeScript, Tailwind CSS, HTML5 semântico, CSS3 moderno e arquitetura de componentes reutilizáveis.',
      en: 'React, TypeScript, Tailwind CSS, semantic HTML5, modern CSS3, and reusable component architecture.',
      es: 'React, TypeScript, Tailwind CSS, HTML5 semántico, CSS3 moderno y arquitectura de componentes reutilizables.'
    },
    practicalApplications: {
      pt: [
        'Implementação e manutenção de bibliotecas de componentes em React e TypeScript.',
        'Ponte direta entre Figma Tokens e CSS semântico com acessibilidade WCAG 2.1.'
      ],
      en: [
        'Implementation and maintenance of React and TypeScript component libraries.',
        'Direct bridge between Figma Tokens and semantic CSS with WCAG 2.1 accessibility.'
      ],
      es: [
        'Implementación y mantenimiento de bibliotecas de componentes en React y TypeScript.',
        'Puente directo entre Figma Tokens y CSS semántico con accesibilidad WCAG 2.1.'
      ]
    }
  },
  {
    id: 'designops',
    name: {
      pt: 'DesignOps',
      en: 'DesignOps',
      es: 'DesignOps'
    },
    category: 'management',
    level: {
      pt: 'Líder / Estrategista',
      en: 'Lead / Strategist',
      es: 'Líder / Estratega'
    },
    iconName: 'Workflow',
    description: {
      pt: 'Otimização de fluxos de trabalho de design, pontes entre design e engenharia, governança e eficiência operacional.',
      en: 'Design workflow optimization, design-to-engineering alignment, governance, and operational efficiency.',
      es: 'Optimización de flujos de trabajo de diseño, integración entre diseño e ingeniería, gobernanza y eficiencia.'
    },
    practicalApplications: {
      pt: [
        'Estruturação de governança de design para times distribuídos em escala global.',
        'Otimização de handoff e eliminação de retrabalho entre design e desenvolvimento.'
      ],
      en: [
        'Structuring design governance for large-scale distributed global teams.',
        'Handoff optimization and elimination of rework between design and engineering.'
      ],
      es: [
        'Estructuración de gobernanza de diseño para equipos distribuidos a escala global.',
        'Optimización del handoff y eliminación de reprocesos entre diseño e ingeniería.'
      ]
    }
  },
  {
    id: 'design-system',
    name: {
      pt: 'Design System',
      en: 'Design System',
      es: 'Design System'
    },
    category: 'design',
    level: {
      pt: 'Arquiteto de Sistemas',
      en: 'Systems Architect',
      es: 'Arquitecto de Sistemas'
    },
    iconName: 'Box',
    description: {
      pt: 'Criação e escala de Design Systems com suporte multi-plataforma, documentação rigorosa e acessibilidade WCAG 2.1.',
      en: 'Building and scaling multi-platform Design Systems with strict documentation and WCAG 2.1 accessibility.',
      es: 'Creación y escala de Sistemas de Diseño multiplataforma con documentación rigurosa y accesibilidad WCAG 2.1.'
    },
    practicalApplications: {
      pt: [
        'Construção e governança de Design Systems corporativos como Prism e Zafire.',
        'Definição de semântica de tokens, documentação viva e testes automatizados de contraste.'
      ],
      en: [
        'Building and governing enterprise Design Systems such as Prism and Zafire.',
        'Token semantics definition, living documentation, and automated contrast testing.'
      ],
      es: [
        'Construcción y gobernanza de Sistemas de Diseño corporativos como Prism y Zafire.',
        'Definición semántica de tokens, documentación viva y pruebas automáticas de contraste.'
      ]
    }
  },
  {
    id: 'agile',
    name: {
      pt: 'Liderança Ágil',
      en: 'Agile Leadership',
      es: 'Liderazgo Ágil'
    },
    category: 'management',
    level: {
      pt: 'Líder de Design',
      en: 'Design Leader',
      es: 'Líder de Diseño'
    },
    iconName: 'Users',
    description: {
      pt: 'Gestão de times multidisciplinares de UX, facilitação de Sprints, OKRs, mentorias e rituais ágeis de produto.',
      en: 'Leading cross-functional UX teams, facilitating Design Sprints, OKRs, mentoring, and agile product rituals.',
      es: 'Liderazgo de equipos multidisciplinarios de UX, facilitación de Sprints, OKRs, tutorías y rituales ágiles.'
    },
    practicalApplications: {
      pt: [
        'Facilitação de Design Sprints, rituais ágeis, alinhamento de OKRs e métricas de UX.',
        'Mentoria técnica e desenvolvimento de carreira para designers de produto.'
      ],
      en: [
        'Facilitation of Design Sprints, agile rituals, OKR alignment, and UX metrics.',
        'Technical mentorship and career progression for product designers.'
      ],
      es: [
        'Facilitación de Design Sprints, rituales ágiles, alineación de OKRs y métricas de UX.',
        'Mentoría técnica y desarrollo de carrera para diseñadores de producto.'
      ]
    }
  },
  {
    id: 'community',
    name: {
      pt: 'Gestão de Comunidades',
      en: 'Community Management',
      es: 'Gestión de Comunidades'
    },
    category: 'education',
    level: {
      pt: 'Gestor de Comunidade',
      en: 'Community Manager',
      es: 'Gestor de Comunidad'
    },
    iconName: 'Globe',
    description: {
      pt: 'Engajamento de comunidades de tecnologia e design, hackathons, encontros técnicos e disseminação de boas práticas.',
      en: 'Tech and design community engagement, hackathons, tech meetups, and fostering design culture.',
      es: 'Compromiso con comunidades de tecnología y diseño, hackathons, encuentros técnicos y cultura de diseño.'
    },
    practicalApplications: {
      pt: [
        'Organização de meetups, hackathons e palestras sobre Design Systems e Front-end.',
        'Disseminação da cultura de produto e compartilhamento de boas práticas na comunidade.'
      ],
      en: [
        'Organizing meetups, hackathons, and talks on Design Systems and Front-end.',
        'Fostering product culture and sharing best practices across the design community.'
      ],
      es: [
        'Organización de meetups, hackathons y charlas sobre Sistemas de Diseño y Front-end.',
        'Fomento de la cultura de producto y difusión de buenas prácticas en la comunidad.'
      ]
    }
  },
  {
    id: 'teaching',
    name: {
      pt: 'Docência em Ensino Superior',
      en: 'Higher Education Teaching',
      es: 'Docencia en Educación Superior'
    },
    category: 'education',
    level: {
      pt: 'Professor Universitário',
      en: 'University Professor',
      es: 'Profesor Universitario'
    },
    iconName: 'GraduationCap',
    description: {
      pt: 'Professor universitário em disciplinas de UX, Branding e Comunicação Social.',
      en: 'University professor teaching courses in UX, Branding, and Communication.',
      es: 'Profesor universitario en asignaturas de UX, Branding y Comunicación Social.'
    },
    practicalApplications: {
      pt: [
        'Ministração de disciplinas de UX/UI, Arquitetura de Informação e Branding.',
        'Formação de novos talentos e orientação de projetos práticos alinhados ao mercado.'
      ],
      en: [
        'Teaching university courses in UX/UI, Information Architecture, and Branding.',
        'Training new talents and mentoring market-oriented practical projects.'
      ],
      es: [
        'Impartición de asignaturas universitarias de UX/UI, Arquitectura de Información y Branding.',
        'Formación de nuevos talentos y tutoría de proyectos prácticos alineados al mercado.'
      ]
    }
  }
];
