import { Language } from '../types';

export const TRANSLATIONS: Record<Language, {
  nav: {
    about: string;
    stack: string;
    cases: string;
    playground: string;
    contact: string;
    backToHome: string;
    downloadCV: string;
  };
  hero: {
    role: string;
    title: string;
    subtitle: string;
    highlight1Value: string;
    highlight1Label: string;
    highlight2Value: string;
    highlight2Label: string;
    highlight3Value: string;
    highlight3Label: string;
    viewCases: string;
    getInTouch: string;
  };
  stackSection: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    clickPrompt: string;
  };
  casesSection: {
    badge: string;
    title: string;
    subtitle: string;
    viewFullCase: string;
    keyMetric: string;
    impact: string;
  };
  playgroundSection: {
    badge: string;
    title: string;
    subtitle: string;
    inspectDetail: string;
  };
  footerSection: {
    title: string;
    subtitle: string;
    copyEmail: string;
    copied: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    rights: string;
  };
  caseDetail: {
    clientLabel: string;
    yearLabel: string;
    roleLabel: string;
    overview: string;
    challengeTitle: string;
    solutionTitle: string;
    resultsTitle: string;
    futureVisionTitle: string;
    prevCase: string;
    nextCase: string;
    backToCases: string;
  };
}> = {
  pt: {
    nav: {
      about: 'Sobre',
      stack: 'Stack',
      cases: 'Cases',
      playground: 'Playground',
      contact: 'Contato',
      backToHome: 'Voltar para Home',
      downloadCV: 'Baixar CV'
    },
    hero: {
      role: 'Full Stack Design Engineer',
      title: 'Full Stack Design Engineer',
      subtitle: 'Há 10 anos projetando experiências digitais de alto impacto para marcas globais como Hilton, AB InBev, Nissan e Julius Baer. Especialista em Design Systems, DesignOps e pontes fluidas entre design e engenharia.',
      highlight1Value: '10 Anos',
      highlight1Label: 'Experiência em Design & Dev',
      highlight2Value: '96% Agilidade',
      highlight2Label: 'Otimização com Design System',
      highlight3Value: '4 Grandes',
      highlight3Label: 'Cases de Impacto Global',
      viewCases: 'Explorar Cases de Sucesso',
      getInTouch: 'Entrar em Contato'
    },
    stackSection: {
      badge: 'Minhas Competências',
      title: 'Stack & Ferramentas Essenciais',
      subtitle: 'Conjunto de habilidades técnicas e estratégicas consolidadas na prática de liderança de produtos complexos.',
      filterAll: 'Todas as Habilidades',
      clickPrompt: 'Clique para saber mais'
    },
    casesSection: {
      badge: 'Projetos de Alto Impacto',
      title: 'Cases de Sucesso Selecionados',
      subtitle: 'Transformações de negócios lideradas através do design centrado no usuário e arquitetura de sistemas.',
      viewFullCase: 'Ver Case Completo',
      keyMetric: 'Métrica de Impacto:',
      impact: 'Impacto Principal:'
    },
    playgroundSection: {
      badge: 'Craft & Experimentos',
      title: 'Playground Visual & UI Studio',
      subtitle: 'Uma amostra da atenção aos detalhes visuais, micro-interações, tokens de design e exploração estética.',
      inspectDetail: 'Inspecionar Detalhes'
    },
    footerSection: {
      title: 'Vamos fazer design crítico juntos?',
      subtitle: 'Estou sempre aberto a conversar sobre liderança de design, Design Systems e novos desafios estratégicos.',
      copyEmail: 'Copiar e-mail',
      copied: 'Copiado!',
      emailLabel: 'leonardort92@gmail.com',
      linkedinLabel: 'Perfil LinkedIn',
      githubLabel: 'Repositório GitHub',
      rights: '© 2026 Leo Trevizani. Todos os direitos reservados. Projetado com precisão e acessibilidade.'
    },
    caseDetail: {
      clientLabel: 'Cliente / Empresa',
      yearLabel: 'Período',
      roleLabel: 'Minha Atuação',
      overview: 'Visão Geral do Projeto',
      challengeTitle: 'O Desafio',
      solutionTitle: 'A Solução',
      resultsTitle: 'Resultados e Métricas',
      futureVisionTitle: 'Visão de Futuro',
      prevCase: 'Case Anterior',
      nextCase: 'Próximo Case',
      backToCases: 'Voltar para Todos os Cases'
    }
  },
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      cases: 'Cases',
      playground: 'Playground',
      contact: 'Contact',
      backToHome: 'Back to Home',
      downloadCV: 'Download Resume'
    },
    hero: {
      role: 'Full Stack Design Engineer',
      title: 'Full Stack Design Engineer',
      subtitle: '10 years shaping high-impact digital experiences for global brands like Hilton, AB InBev, Nissan, and Julius Baer. Specialist in Design Systems, DesignOps, and seamless design-to-engineering execution.',
      highlight1Value: '10 Years',
      highlight1Label: 'Design & Engineering Exp.',
      highlight2Value: '96% Faster',
      highlight2Label: 'Delivery with Design Systems',
      highlight3Value: '4 Global',
      highlight3Label: 'High-Impact Cases',
      viewCases: 'Explore Success Cases',
      getInTouch: 'Get in Touch'
    },
    stackSection: {
      badge: 'Core Competencies',
      title: 'Essential Stack & Tools',
      subtitle: 'Technical and strategic skill sets honed through leading complex digital product teams.',
      filterAll: 'All Skills',
      clickPrompt: 'Click to learn more'
    },
    casesSection: {
      badge: 'High-Impact Work',
      title: 'Featured Success Cases',
      subtitle: 'Real business transformations and measurable results driven by user-centered product design.',
      viewFullCase: 'View Full Case',
      keyMetric: 'Key Impact Metric:',
      impact: 'Core Impact:'
    },
    playgroundSection: {
      badge: 'Craft & Explorations',
      title: 'Visual Playground & UI Studio',
      subtitle: 'A showcase of visual precision, micro-interactions, design tokens, and aesthetic experimentation.',
      inspectDetail: 'Inspect Details'
    },
    footerSection: {
      title: 'Let\'s do critical design together!',
      subtitle: 'Always open for discussions on design leadership, Design Systems, and strategic design challenges.',
      copyEmail: 'Copy email',
      copied: 'Copied!',
      emailLabel: 'leonardort92@gmail.com',
      linkedinLabel: 'LinkedIn Profile',
      githubLabel: 'GitHub Repo',
      rights: '© 2026 Leo Trevizani. All rights reserved. Crafted with precision and accessibility.'
    },
    caseDetail: {
      clientLabel: 'Client / Company',
      yearLabel: 'Timeline',
      roleLabel: 'My Role',
      overview: 'Project Overview',
      challengeTitle: 'The Challenge',
      solutionTitle: 'The Solution',
      resultsTitle: 'Results & Impact',
      futureVisionTitle: 'Future Vision',
      prevCase: 'Previous Case',
      nextCase: 'Next Case',
      backToCases: 'Back to All Cases'
    }
  },
  es: {
    nav: {
      about: 'Sobre',
      stack: 'Stack',
      cases: 'Casos',
      playground: 'Playground',
      contact: 'Contacto',
      backToHome: 'Voltar al Inicio',
      downloadCV: 'Descargar CV'
    },
    hero: {
      role: 'Full Stack Design Engineer',
      title: 'Full Stack Design Engineer',
      subtitle: 'Hace 10 años creando experiencias digitales de alto impacto para marcas globales como Hilton, AB InBev, Nissan y Julius Baer. Especialista en Sistemas de Diseño y DesignOps.',
      highlight1Value: '10 Años',
      highlight1Label: 'Experiencia en Diseño y Dev',
      highlight2Value: '96% Agilidad',
      highlight2Label: 'Optimización con Design Systems',
      highlight3Value: '4 Casos',
      highlight3Label: 'Proyectos de Impacto Global',
      viewCases: 'Explorar Casos de Éxito',
      getInTouch: 'Ponerse en Contacto'
    },
    stackSection: {
      badge: 'Competencias Clave',
      title: 'Stack y Herramientas Esenciales',
      subtitle: 'Conjunto de habilidades técnicas y estratégicas consolidadas en el liderazgo de productos complejos.',
      filterAll: 'Todas las Habilidades',
      clickPrompt: 'Haga clic para saber más'
    },
    casesSection: {
      badge: 'Proyectos de Alto Impacto',
      title: 'Casos de Éxito Destacados',
      subtitle: 'Métricas reales y transformaciones de negocios lideradas a través del diseño centrado en el usuario.',
      viewFullCase: 'Ver Caso Completo',
      keyMetric: 'Métrica de Impacto:',
      impact: 'Impacto Principal:'
    },
    playgroundSection: {
      badge: 'Arte y Experimentos',
      title: 'Playground Visual y Estúdio UI',
      subtitle: 'Una muestra del cuidado por los detalles visuales, microinteracciones y exploración estética.',
      inspectDetail: 'Inspeccionar Detalles'
    },
    footerSection: {
      title: '¿Hacemos diseño crítico juntos?',
      subtitle: 'Siempre abierto a conversar sobre liderazgo de diseño, Sistemas de Diseño y nuevos desafíos.',
      copyEmail: 'Copiar correo',
      copied: '¡Copiado!',
      emailLabel: 'leonardort92@gmail.com',
      linkedinLabel: 'Perfil de LinkedIn',
      githubLabel: 'Repositorio GitHub',
      rights: '© 2026 Leo Trevizani. Todos los derechos reservados. Diseñado con precisión y accesibilidad.'
    },
    caseDetail: {
      clientLabel: 'Cliente / Empresa',
      yearLabel: 'Periodo',
      roleLabel: 'Mi Rol',
      overview: 'Visión General del Proyecto',
      challengeTitle: 'El Desafío',
      solutionTitle: 'La Solución',
      resultsTitle: 'Resultados e Impacto',
      futureVisionTitle: 'Visión de Futuro',
      prevCase: 'Caso Anterior',
      nextCase: 'Siguiente Caso',
      backToCases: 'Volver a Todos los Casos'
    }
  }
};
