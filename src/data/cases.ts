import { CaseStudy } from '../types';
import hiltonCover from '../assets/images/hilton_case_cover_1786018890676.jpg';
import genesisUsCover from '../assets/images/genesis_us_case_cover_1787748401374.jpg';
import genesisLatamCover from '../assets/images/genesis_latam_case_cover_1787748414476.jpg';
import abinbevCover from '../assets/images/abinbev_case_cover_1786018909060.jpg';
import nissanCover from '../assets/images/nissan_case_cover_1786018927463.jpg';
import juliusBaerCover from '../assets/images/julius_baer_cover_1786018941597.jpg';
import logcpCover from '../assets/images/logcp_case_cover_1787684338807.jpg';
import renaultCover from '../assets/images/renault_case_cover_1787684352389.jpg';

export const CASE_STUDIES: CaseStudy[] = [
{
    id: 'hilton',
    slug: 'hilton',
    client: 'Hilton Hotels & Resorts',
    category: 'Design System & DesignOps',
    year: '2025 - Presente',
    role: 'Product Designer (Property & Prism Design System via Globant)',
    metricsHighlight: {
      pt: '5d ➔ 4h',
      en: '5d ➔ 4h',
      es: '5d ➔ 4h'
    },
    metricLabel: {
      pt: 'Redução no tempo de entrega de paletas de cores',
      en: 'Reduction in color palette delivery time',
      es: 'Reducción en el tiempo de entrega de paletas de colores'
    },
    coverImage: hiltonCover,
    pullQuote: {
      pt: 'Em 8.000 hotéis, um processo manual de cinco dias não é um atraso. É uma fila que nunca esvazia.',
      en: 'At 8,000 hotels, a five-day manual process isn\'t a delay. It\'s a queue that never empties.',
      es: 'En 8.000 hoteles, un proceso manual de cinco días no es un retraso. Es una cola que nunca se vacía.'
    },
    tags: ['Prism Design System', 'Collection Level Theming', 'Figma Tokens', 'Figma Plugin', 'Property UX', 'Global Scale'],
    title: {
      pt: 'Hilton Design System: Otimizando o themer de marcas e componentes no Prism para 8.000 hotéis',
      en: 'Hilton Design System: Optimizing brand theming and Prism components for 8,000 hotels',
      es: 'Hilton Design System: Optimizando el themer de marcas y componentes en Prism para 8.000 hoteles'
    },
    subtitle: {
      pt: 'Arquitetura de tokens, plugin customizado no Figma e criação de componentes para o design system Prism em um ecossistema global de 8.000 hotéis, 33 marcas e 22 idiomas.',
      en: 'Token architecture, custom Figma plugin, and component design for Prism across a global ecosystem of 8,000 hotels, 33 brands, and 22 languages.',
      es: 'Arquitectura de tokens, plugin personalizado de Figma y diseño de componentes para Prism en un ecosistema global de 8.000 hoteles, 33 marcas y 22 idiomas.'
    },
    impactSummary: {
      pt: 'Integrando o time de Experience Design da Hilton via Globant como designer responsável pela frente de Property (páginas dos hotéis) e componentes do design system Prism, reformulei a entrega de paletas de cores (de 5 dias para 4 horas), automatizei exports manuais via plugin do Figma e entreguei 22 componentes para o ecossistema global.',
      en: 'Joined Hilton\'s Experience Design team via Globant as the sole assigned designer for Property (individual hotel pages) and Prism components, reducing color palette delivery from 5 days to 4 hours, automating manual exports via a custom Figma plugin, and shipping 22 core components.',
      es: 'Integrado al equipo de Experience Design de Hilton vía Globant como diseñador de Property y componentes de Prism, reduje la entrega de paletas de colores de 5 días a 4 horas, automaticé exportaciones manuales con un plugin de Figma y entregué 22 componentes centrales.'
    },
    challenge: {
      pt: {
        title: 'O Desafio',
        description: `O sistema de marcas da Hilton é estruturado em camadas: 33 marcas, cada uma com suas próprias cores, tipografia e bordas, sobre 4 níveis de superfície compartilhados (base, alternate, inverse, black) que precisam manter contraste acessível. Hotéis individuais ("property collections") ainda aplicam sua identidade própria sobre a marca.

O gargalo não era essa complexidade, mas o tempo necessário para transformar a identidade de um novo hotel em um conjunto de tokens testados e acessíveis: 5 dias inteiros por paleta, feitos manualmente.

Na escala da Hilton (8.000 hotéis em 103 países e 22 idiomas), esse custo acumulava rapidamente:
• Todo lançamento ou rebrand de hotel ficava preso na mesma fila manual.
• Após a tokenização, entregar os valores hexadecimais para o time de conteúdo exigia montar um documento manualmente e exportar em PDF para o CMS — cerca de 30 minutos por hotel.
• O trabalho manual repetitivo e sujeito a erros ficava entre o design system e os 8.000 hotéis que precisavam dele.`,
        keyPoints: [
          'Processo manual de 5 dias por paleta criando filas no lançamento e rebranding de hotéis.',
          'Exportação manual de valores hexadecimais para PDF consumindo 30 minutos por hotel.',
          'Garantir contraste e acessibilidade WCAG em 33 marcas com 4 níveis de superfície.'
        ]
      },
      en: {
        title: 'The Challenge',
        description: `Hilton's brand system is layered by design: 33 brands each carry their own colors, typography, and corner radii, on top of 4 shared surface levels (base, alternate, inverse, black) that every brand's pages must support with correct contrast. Individual hotels ("property collections") layer their identity on top.

The bottleneck was how long it took to turn a new hotel's brand identity into a usable, contrast-checked token set: 5 full days per palette, done manually.

At Hilton's scale (8,000 hotels across 103 countries and 22 languages), that cost compounded fast:
• Every property launch or rebrand queued behind the same manual process.
• Handing hex values to the content team required manually laying them into a document and exporting a PDF for the CMS — roughly 30 minutes per hotel.
• Repetitive, error-prone manual work stood between the design system and 8,000 hotels that needed it.`,
        keyPoints: [
          '5-day manual palette delivery creating bottlenecks for property launches and rebrands.',
          '30-minute manual hex-to-PDF export task repeated endlessly for CMS ingestion.',
          'Ensuring contrast and WCAG compliance across 33 brands with 4 surface levels.'
        ]
      },
      es: {
        title: 'El Desafío',
        description: `El sistema de marcas de Hilton funciona por capas: 33 marcas con sus propios colores, tipografías y radios de borde sobre 4 niveles de superficie compartidos (base, alternate, inverse, black) con estricto contraste. Hoteles individuales aplican además su propia identidad.

El cuello de botella era el tiempo para transformar la identidad de un nuevo hotel en tokens probados: 5 días completos por paleta de forma manual.

A la escala de Hilton (8.000 hoteles en 103 países y 22 idiomas), el costo se multiplicaba:
• Cada lanzamiento o rebrand de hotel quedaba atascado en la misma fila manual.
• Entregar valores hexadecimales al equipo de contenido requería armar manualmente un documento PDF para el CMS — unos 30 minutos por hotel.
• El trabajo manual repetitivo interfería entre el design system y los 8.000 hoteles.`,
        keyPoints: [
          'Proceso manual de 5 días por paleta generando demoras en lanzamientos de hoteles.',
          'Exportación manual de valores hex a PDF consumiendo 30 minutos por hotel.',
          'Garantizar contraste y accesibilidad WCAG en 33 marcas con 4 niveles de superficie.'
        ]
      }
    },
    solution: {
      pt: {
        title: 'A Solução Implementada',
        description: 'Atuamos em duas frentes estruturais: a reformulação da arquitetura de themer (Collection Level Theming) com automação via plugin, e o desenvolvimento direto de componentes para o design system global Prism.',
        highlights: [
          { title: 'Collection Level Theming & Live Variables', desc: 'Criamos a arquitetura de tokens com 4 níveis de superfície e documentação em variáveis do Figma, reduzindo a entrega de paletas de 5 dias para 4 horas.' },
          { title: 'Plugin Customizado no Figma (1 Clique)', desc: 'Desenvolvemos um plugin no Figma que lê as variáveis da propriedade e gera automaticamente o PDF de especificação para o CMS em 1 clique.' },
          { title: 'Componentes do Design System Prism', desc: 'Entregamos 22 componentes oficiais para o Prism, com 3 variantes de viewport e suporte aos templates Inspired e Tailored para a plataforma One Hero Web.' }
        ]
      },
      en: {
        title: 'The Implemented Solution',
        description: 'Divided into two core strategic pillars: restructuring the brand theming architecture (Collection Level Theming) with custom plugin automation, and designing components directly for the shared Prism design system.',
        highlights: [
          { title: 'Collection Level Theming & Live Variables', desc: 'Designed token architecture across 4 surface levels using live Figma variables, taking palette delivery from 5 days to 4 hours.' },
          { title: 'Custom Figma Plugin (1 Click)', desc: 'Built a custom Figma plugin that reads hotel variables and generates the CMS specification PDF automatically in one click.' },
          { title: 'Prism Design System Components', desc: 'Shipped 22 core components for Prism with 3 viewport variants supporting Inspired and Tailored template styles for One Hero Web.' }
        ]
      },
      es: {
        title: 'La Solución Implementada',
        description: 'Dividida en dos pilares estratégicos: la reestructuración de la arquitectura de theming (Collection Level Theming) con automatización por plugin, y el diseño directo de componentes para Prism.',
        highlights: [
          { title: 'Collection Level Theming & Variables en Vivo', desc: 'Diseñamos la arquitectura de tokens con 4 niveles de superficie, reduciendo la entrega de paletas de 5 días a 4 horas.' },
          { title: 'Plugin Personalizado de Figma (1 Clic)', desc: 'Desarrollamos un plugin de Figma que lee variables del hotel y genera automáticamente el PDF para el CMS en 1 clic.' },
          { title: 'Componentes para el Design System Prism', desc: 'Entregamos 22 componentes oficiales para Prism con 3 variantes de viewport soportando plantillas Inspired y Tailored.' }
        ]
      }
    },
    results: {
      pt: {
        title: 'Resultados e Impacto no Negócio',
        stats: [
          { value: '5d ➔ 4h', label: 'Entrega de Paletas', desc: 'Redução drástica no tempo de criação e validação de tokens acessíveis por hotel.' },
          { value: '1 clique', label: 'Exportação para CMS', desc: 'Substituição da tarefa manual de 30 min por automação via plugin no Figma.' },
          { value: '22', label: 'Componentes no Prism', desc: 'Construídos com 3 variantes de viewport e suporte a 2 tipos de templates.' },
          { value: '8.000', label: 'Hotéis Suportados', desc: 'Ecossistema cobrindo 33 marcas, 103 países e 22 idiomas na plataforma One Hero Web.' }
        ],
        summary: 'Tornando-me a referência de design para o time de Property, liderei frentes estratégicas de sistemas entre pesquisadores, PMs, especialistas em acessibilidade e engenheiros de software.'
      },
      en: {
        title: 'Business Results & Impact',
        stats: [
          { value: '5d ➔ 4h', label: 'Palette Delivery Time', desc: 'Dramatic reduction in token creation and accessible color verification per hotel.' },
          { value: '1 click', label: 'CMS Export Task', desc: 'Replaced a 30-minute manual task with automated Figma plugin generation.' },
          { value: '22', label: 'Prism Components', desc: 'Built with 3 viewport variants supporting Inspired and Tailored templates.' },
          { value: '8,000', label: 'Hotels Supported', desc: 'Global ecosystem across 33 brands, 103 countries, and 22 languages on One Hero Web.' }
        ],
        summary: 'Became the Property team’s design reference, entrusted with component architecture shared across multiple touchpoint teams.'
      },
      es: {
        title: 'Resultados e Impacto Comercial',
        stats: [
          { value: '5d ➔ 4h', label: 'Entrega de Paletas', desc: 'Reducción drástica en el tiempo de creación y validación de tokens por hotel.' },
          { value: '1 clic', label: 'Exportación a CMS', desc: 'Reemplazo de la tarea manual de 30 min por automatización vía plugin en Figma.' },
          { value: '22', label: 'Componentes en Prism', desc: 'Construidos con 3 variantes de viewport y soporte a 2 tipos de plantillas.' },
          { value: '8.000', label: 'Hoteles Soportados', desc: 'Ecosistema global que cubre 33 marcas, 103 países y 22 idiomas.' }
        ],
        summary: 'Me convertí en la referencia de diseño para el equipo de Property, liderando iniciativas de sistemas en equipos multidisciplinarios.'
      }
    },
    futureVision: {
      pt: {
        title: 'Visão de Futuro e Aprendizados',
        subtitle: 'Direcionamentos estratégicos e evoluções mapeadas para o ecossistema Hilton:',
        topics: [
          {
            id: 1,
            title: 'Expansão da Adoção de Componentes',
            description: 'Formalizar os layouts como componentes oficiais do Prism para que outros times de touchpoint além de Property possam utilizá-los.',
            tag: 'Design System Ops'
          },
          {
            id: 2,
            title: 'Documentação de Onboarding como Fonte da Verdade',
            description: 'Criar documentação centralizada para guiar novos designers em decisões de negócio (ex: quando usar "chips" ou impactos das plantilhas Inspired, Tailored e Curated).',
            tag: 'Design Enablement'
          },
          {
            id: 3,
            title: 'Unificação do Collection Level Theming no Prism',
            description: 'Integrar os arquivos de themer diretamente ao arquivo principal do design system Prism, eliminando a fragmentação de contexto.',
            tag: 'Arquitetura de Tokens'
          },
          {
            id: 4,
            title: 'Automação na Educação de Stakeholders',
            description: 'Explorar ferramentas e plugins para explicar e aplicar regras de design de forma automatizada para áreas de negócio.',
            tag: 'Automação DesignOps'
          }
        ]
      },
      en: {
        title: 'Future Vision & Key Learnings',
        subtitle: 'Strategic directions and roadmap evolutions mapped for the Hilton digital ecosystem:',
        topics: [
          {
            id: 1,
            title: 'Expand Component Adoption Beyond Property',
            description: 'Formalize layouts as official Prism components so other touchpoint teams can leverage them across Hilton digital products.',
            tag: 'Design System Ops'
          },
          {
            id: 2,
            title: 'Build Onboarding Documentation as Single Source',
            description: 'Centralize onboarding specs explaining business rules (e.g., when to use "chips" and template behaviors across Inspired, Tailored, Curated).',
            tag: 'Design Enablement'
          },
          {
            id: 3,
            title: 'Fold Collection Level Theming into Main Prism Library',
            description: 'Integrate the theming architecture into the main Prism library file to eliminate context switching and navigation friction.',
            tag: 'Token Architecture'
          },
          {
            id: 4,
            title: 'Automate Stakeholder Education & Enforcement',
            description: 'Apply the plugin automation mindset to explain and enforce design system rules automatically across business units.',
            tag: 'DesignOps Automation'
          }
        ]
      },
      es: {
        title: 'Visión de Futuro y Aprendizajes',
        subtitle: 'Direcciones estratégicas y evoluciones mapeadas para el ecosistema de Hilton:',
        topics: [
          {
            id: 1,
            title: 'Expandir la Adopción de Componentes',
            description: 'Formalizar diseños como componentes oficiales de Prism para que otros equipos puedan utilizarlos en diferentes puntos de contacto.',
            tag: 'Design System Ops'
          },
          {
            id: 2,
            title: 'Documentación de Onboarding como Fuente Única',
            description: 'Crear documentación centralizada sobre reglas de negocio (ej. uso de "chips" y comportamiento de plantillas Inspired, Tailored y Curated).',
            tag: 'Design Enablement'
          },
          {
            id: 3,
            title: 'Unificar el Collection Level Theming en Prism',
            description: 'Integrar los archivos de theming directamente en el archivo principal de Prism para eliminar la fragmentación de contexto.',
            tag: 'Arquitectura de Tokens'
          },
          {
            id: 4,
            title: 'Automatización en la Educación de Stakeholders',
            description: 'Aplicar la automatización por plugins para explicar y verificar reglas de diseño directamente con las unidades de negocio.',
            tag: 'Automatización DesignOps'
          }
        ]
      }
    }
  },
  {
    id: 'genesis-us',
    slug: 'genesis-us',
    client: 'Genesis US',
    category: 'Enterprise Web Rebuild & Dynamic Systems',
    year: '2025 - 2026',
    role: 'Full Stack Design Engineer (Solo Freelance)',
    metricsHighlight: {
      pt: '+775% Sessões',
      en: '+775% Sessions',
      es: '+775% Sesiones'
    },
    metricLabel: {
      pt: 'Aumento na média de sessões diárias pós-lançamento',
      en: 'Increase in average daily sessions post-launch',
      es: 'Aumento en el promedio de sesiones diarias post-lanzamiento'
    },
    coverImage: genesisUsCover,
    pullQuote: {
      pt: 'O mercado que serviu de modelo para a Genesis LATAM acabou precisando do mesmo ajuste.',
      en: 'The market Genesis LATAM had been modeled after turned out to need the same fix.',
      es: 'El mercado que sirvió de modelo para Genesis LATAM terminó necesitando el mismo ajuste.'
    },
    tags: ['Web Rebuild', 'WIX Velo / Code', 'Dynamic Page Templates', 'Responsive Data Viz', 'Marketing Automation', 'Bilingual EN-BR'],
    title: {
      pt: 'Genesis US: Reconstrução web completa, templates dinâmicos e +775% em sessões diárias',
      en: 'Genesis US: Full web rebuild, dynamic templates, and +775% daily sessions increase',
      es: 'Genesis US: Reconstrucción web integral, plantillas dinámicas y +775% en sesiones diarias'
    },
    subtitle: {
      pt: 'Redesenho e reconstrução do zero no WIX (de 98 para 20 páginas dinâmicas), gráficos de dados responsivos via código e automações de email marketing.',
      en: 'From-scratch rebuild on WIX (streamlining 98 pages down to 20 dynamic templates), custom responsive data charts, and email marketing automations.',
      es: 'Rediseño y reconstrucción desde cero en WIX (de 98 a 20 páginas dinámicas), gráficos responsivos vía código y automatizaciones de marketing.'
    },
    impactSummary: {
      pt: 'Após o sucesso do redesenho da Genesis LATAM, fui convidado a reconstruir o site global da Genesis US do zero (Set 2025 - Fev 2026, lançado em Abr 2026). Superei as limitações de responsividade do WIX injetando gráficos customizados em HTML/CSS/JS via IA, consolidei 98 páginas em 20 templates dinâmicos, conectei automações de email marketing e entreguei uma experiência bilíngue dedicada (EN/BR), gerando um crescimento de 775% nas sessões diárias.',
      en: 'Following the success of the LATAM redesign, I was brought back solo to rebuild the Genesis US website from scratch (Sep 2025 - Feb 2026, launched Apr 2026). Overcame WIX responsive limitations by engineering custom HTML/CSS/JS charts via AI, consolidated 98 pages into 20 dynamic templates, wired email marketing automations, and delivered a dedicated bilingual EN/BR experience, driving a 775% increase in daily sessions.',
      es: 'Tras el éxito de Genesis LATAM, reconstruí el sitio global de Genesis US desde cero (Sep 2025 - Feb 2026, lanzado en Abr 2026). Superé las limitaciones de WIX inyectando gráficos responsivos en HTML/CSS/JS con IA, consolidé 98 páginas en 20 plantillas dinámicas, integré automatizaciones y una versión bilingüe EN/BR, logrando un aumento del 775% en sesiones diarias.'
    },
    challenge: {
      pt: {
        title: 'O Desafio',
        description: `O sucesso da operação LATAM evidenciou uma realidade desconfortável: o site que havia servido de modelo inicial — o da própria Genesis US — não estava atraindo nem de perto o tráfego diário esperado para uma operação global desse porte.

• Cerca de 98 páginas acumuladas ao longo do tempo, repletas de redundâncias e com layouts fragmentados com grande oportunidade de estruturação.
• O WIX gerencia comportamentos responsivos de forma muito menos previsível que o WordPress, especialmente fora de templates básicos.
• A liderança exigiu uma versão traduzida EN→BR exclusiva para o site americano, mantendo o site LATAM restrito ao seu mercado regional — uma experiência localizada e separada, e não um mero redirecionamento de tráfego.
• O problema dos gráficos: três visualizações complexas de dados precisavam de comportamento 100% responsivo dentro de uma ferramenta nativamente limitada para esse tipo de layout.`,
        keyPoints: [
          '98 páginas dispersas e sobrepostas acumuladas ao longo dos anos.',
          'Limitações estruturais do CMS WIX para comportamentos responsivos refinados.',
          'Necessidade de experiência bilíngue EN→BR dedicada sem canibalizar o site LATAM.',
          'Três gráficos de dados complexos que quebravam em dispositivos móveis.'
        ]
      },
      en: {
        title: 'The Challenge',
        description: `LATAM's success made something uncomfortable visible: the site it had been modeled after — Genesis US's own — wasn't pulling anywhere near the daily traffic a global site of that size should.

• Around 98 pages had accumulated over time with many opportunities for streamlining layouts with a clear structure.
• WIX handles responsive behavior far less predictably than WordPress, especially past a bare template.
• Leadership wanted its own EN→BR translation for the US site, keeping the LATAM site exclusive to the LATAM market — a genuinely separate localized experience to build, not a shared one to reroute traffic into.
• The chart problem: Three data visualizations needed to behave responsively, inside a tool that struggles precisely with that kind of layout.`,
        keyPoints: [
          '98 fragmented and bloated legacy pages accumulated over time.',
          'WIX CMS constraints regarding predictable responsive layout engine.',
          'Dedicated EN→BR localized architecture without cross-polluting LATAM domain.',
          'Three complex data charts that failed default mobile responsiveness.'
        ]
      },
      es: {
        title: 'El Desafío',
        description: `El éxito de LATAM hizo visible algo incómodo: el sitio que había servido como modelo — el de Genesis US — no alcanzaba el tráfico diario que debería tener un sitio global de esa escala.

• Alrededor de 98 páginas acumuladas con muchas oportunidades de optimización y estructura clara.
• WIX gestiona el comportamiento responsivo de forma mucho menos predecible que WordPress.
• La dirección requería una traducción EN→BR propia para EE. UU., manteniendo el sitio LATAM exclusivo para su mercado.
• El dilema de los gráficos: tres visualizaciones complejas debían ser responsivas dentro de una herramienta con fuertes limitaciones nativas.`,
        keyPoints: [
          '98 páginas legadas dispersas con alto índice de redundancia.',
          'Limitaciones del CMS WIX para maquetación responsiva avanzada.',
          'Arquitectura bilingüe EN→BR independiente de la operación LATAM.',
          'Gráficos de datos complejos no adaptados a pantallas móviles.'
        ]
      }
    },
    solution: {
      pt: {
        title: 'A Solução',
        description: 'Conduzi a reconstrução integral do site do zero no WIX (de Setembro de 2025 a Fevereiro de 2026, com lançamento em Abril de 2026), adotando a direção visual consagrada da LATAM como referência e solucionando gargalos técnicos complexos.',
        highlights: [
          {
            title: 'Reconstrução total, não migração',
            desc: 'Construção do zero em vez de importar conteúdos legados, utilizando a identidade moderna da LATAM como referência direta para a evolução do site US.'
          },
          {
            title: 'De 98 para 20 páginas com templates dinâmicos',
            desc: 'Auditoria minuciosa de cada página, consolidando a maior parte do conteúdo sobrevivente no recurso de páginas dinâmicas do WIX em vez de páginas estáticas isoladas.'
          },
          {
            title: 'Arquitetura bilíngue verdadeiramente independente',
            desc: 'Desenvolvimento de uma versão traduzida EN→BR dedicada para o site US, preservando a identidade regional sem redirecionar tráfego para a LATAM.'
          },
          {
            title: 'Formulários conectados a automações de marketing',
            desc: 'Integração de 3 formulários com fluxos automatizados de email marketing configurados de ponta a ponta.'
          },
          {
            title: 'Gráficos responsivos com injeção de código via IA',
            desc: 'Desenho do comportamento de cada gráfico e tradução assistida por IA para HTML, CSS e JS limpos, inseridos no ambiente de desenvolvimento do WIX para superar as restrições da plataforma.'
          }
        ]
      },
      en: {
        title: 'The Solution',
        description: 'Led the complete from-scratch build on WIX (running September 2025 to February 2026, launching April 2026), using the proven LATAM aesthetic as reference and engineering custom solutions for CMS constraints.',
        highlights: [
          {
            title: 'Full rebuild, not a migration',
            desc: 'Rebuilt the site from scratch instead of porting legacy content over, using LATAM\'s visual direction as the direct benchmark for where US needed to go.'
          },
          {
            title: '98 pages down to 20 dynamic templates',
            desc: 'Audited every existing page, consolidated surviving content onto WIX\'s dynamic page feature instead of maintaining individual static pages.'
          },
          {
            title: 'A genuinely separate bilingual site',
            desc: 'Built a dedicated EN→BR translated version for the US site, keeping it distinct from LATAM rather than routing Brazilian traffic across domains.'
          },
          {
            title: 'Forms wired to marketing automation',
            desc: 'Connected 3 forms directly to custom email marketing automation flows, designed and implemented end to end.'
          },
          {
            title: 'Solving responsive charts WIX wasn\'t built for',
            desc: 'Engineered custom chart interactions translated into clean HTML/CSS/JS via AI and injected into WIX Developer Mode, overcoming platform limitations without design compromises.'
          }
        ]
      },
      es: {
        title: 'La Solución',
        description: 'Lideré la reconstrucción integral desde cero en WIX (de septiembre de 2025 a febrero de 2026, lanzado en abril de 2026), tomando como referencia la dirección visual de LATAM y superando restricciones técnicas.',
        highlights: [
          {
            title: 'Reconstrucción total, no migración',
            desc: 'Construcción desde cero en lugar de portar contenido legado, usando el lenguaje visual de LATAM como guía directa.'
          },
          {
            title: 'De 98 a 20 páginas con plantillas dinámicas',
            desc: 'Auditoría completa de páginas, migrando el contenido esencial a páginas dinámicas de WIX para facilitar el mantenimiento.'
          },
          {
            title: 'Sitio bilingüe genuinamente independiente',
            desc: 'Versión traducida EN→BR dedicada para EE. UU., respetando la segmentación de tráfico regional.'
          },
          {
            title: 'Formularios conectados a automatización',
            desc: '3 formularios integrados directamente con flujos de email marketing automatizados de extremo a extremo.'
          },
          {
            title: 'Gráficos responsivos con inyección de código e IA',
            desc: 'Diseño e inyección de gráficos en HTML/CSS/JS en el entorno de desarrollo de WIX, transformando limitaciones de la herramienta en soluciones robustas.'
          }
        ]
      }
    },
    results: {
      pt: {
        title: 'Resultados e Impacto',
        stats: [
          {
            value: '+775%',
            label: 'Média de Sessões Diárias',
            desc: 'Aumento expressivo no engajamento e tráfego diário após o lançamento da nova arquitetura.'
          },
          {
            value: '98 ➔ 20',
            label: 'Páginas Consolidadas',
            desc: 'Redução drástica de complexidade, operando com templates dinâmicos eficientes.'
          },
          {
            value: '3 Gráficos',
            label: 'Data Viz Responsiva',
            desc: 'Visualizações de dados complexas funcionando perfeitamente em mobile e desktop.'
          }
        ],
        summary: 'A entrega proporcionou um salto qualitativo e quantitativo para a operação global da Genesis US: aumento de 775% nas sessões diárias, consolidação de 98 páginas em 20 templates dinâmicos de fácil manutenção, 3 fluxos de automação de marketing ativos, 3 gráficos complexos 100% responsivos e uma experiência bilíngue EN/BR totalmente localizada.'
      },
      en: {
        title: 'Results & Impact',
        stats: [
          {
            value: '+775%',
            label: 'Average Daily Sessions',
            desc: 'Massive surge in daily user engagement and traffic following the architectural launch.'
          },
          {
            value: '98 ➔ 20',
            label: 'Pages Consolidated',
            desc: 'Streamlined from 98 bloated static pages into 20 maintainable dynamic templates.'
          },
          {
            value: '3 Charts',
            label: 'Responsive Data Viz',
            desc: 'Complex data visualizations rendered flawlessly across mobile and desktop viewports.'
          }
        ],
        summary: 'The project delivered an immediate transformation for Genesis US: a 775% increase in average daily sessions, 98 legacy pages streamlined into 20 dynamic templates, 3 live email marketing automations, 3 fully responsive custom data charts, and an independent localized EN/BR experience.'
      },
      es: {
        title: 'Resultados e Impacto',
        stats: [
          {
            value: '+775%',
            label: 'Promedio de Sesiones Diarias',
            desc: 'Aumento exponencial en tráfico y retención tras el lanzamiento de la nueva versión.'
          },
          {
            value: '98 ➔ 20',
            label: 'Páginas Consolidadas',
            desc: 'Reducción drástica de 98 páginas estáticas a 20 plantillas dinámicas estructuradas.'
          },
          {
            value: '3 Gráficos',
            label: 'Data Viz Responsiva',
            desc: 'Visualizaciones de datos complejas adaptadas con total precisión a cualquier pantalla.'
          }
        ],
        summary: 'La entrega generó un impacto inmediato en la presencia de Genesis US: crecimiento del 775% en sesiones diarias, consolidación de 98 a 20 páginas dinámicas, 3 automatizaciones de marketing activas, 3 gráficos responsivos y una experiencia bilingüe EN/BR localizada.'
      }
    },
    futureVision: {
      pt: {
        title: 'Visão de Futuro e Consistência',
        subtitle: 'Bases estabelecidas para autonomia e sustentabilidade da marca no longo prazo',
        topics: [
          {
            id: 1,
            title: 'Alinhamento Tipográfico e Cromático',
            description: 'Harmonização de tipografia e paleta de cores entre os sites US e LATAM, preservando as particularidades de comunicação de cada mercado.',
            tag: 'Design System Tokens'
          },
          {
            id: 2,
            title: 'Ativos Globais Compartilhados',
            description: 'Definição de um conjunto inicial de assets de comunicação global que ambos os sites podem utilizar como base de expansão.',
            tag: 'Global Brand Assets'
          },
          {
            id: 3,
            title: 'Princípios de Web Design para Stakeholders',
            description: 'Documentação dos princípios centrais de web design compartilhada com os times internos para evitar a desconstrução da consistência estabelecida.',
            tag: 'Design Governance'
          },
          {
            id: 4,
            title: 'Componentes Web Reutilizáveis',
            description: 'Estruturação de blocos e componentes reutilizáveis para garantir solidez e velocidade na criação de novas páginas e comunicações.',
            tag: 'Modular Architecture'
          }
        ]
      },
      en: {
        title: 'Future Vision & Consistency',
        subtitle: 'Establishing autonomous foundations for long-term brand coherence',
        topics: [
          {
            id: 1,
            title: 'Typography & Color Alignment',
            description: 'Aligned typography and color tokens between US and LATAM sites while preserving market-specific messaging nuances.',
            tag: 'Design System Tokens'
          },
          {
            id: 2,
            title: 'Shared Global Brand Assets',
            description: 'Defined an initial set of foundational global communication assets that both sites can build upon for future campaigns.',
            tag: 'Global Brand Assets'
          },
          {
            id: 3,
            title: 'Core Web Principles for Stakeholders',
            description: 'Flagged essential web design principles for stakeholders so ongoing updates maintain established aesthetic and UX consistency.',
            tag: 'Design Governance'
          },
          {
            id: 4,
            title: 'Reusable Web Components',
            description: 'Built modular web components to safeguard brand solidity and velocity across upcoming marketing touchpoints.',
            tag: 'Modular Architecture'
          }
        ]
      },
      es: {
        title: 'Visión de Futuro y Consistencia',
        subtitle: 'Bases estructuradas para garantizar autonomía y solidez de marca a largo plazo',
        topics: [
          {
            id: 1,
            title: 'Alineación Tipográfica y Cromática',
            description: 'Armonización de tokens de color y tipografía entre los sitios US y LATAM, respetando las particularidades de cada región.',
            tag: 'Design System Tokens'
          },
          {
            id: 2,
            title: 'Activos Globales Compartidos',
            description: 'Definición de activos de comunicación global listos para escalar en futuros lanzamientos y campañas.',
            tag: 'Global Brand Assets'
          },
          {
            id: 3,
            title: 'Principios de Diseño Web para Stakeholders',
            description: 'Pautas de diseño web compartidas con los equipos internos para asegurar la continuidad y coherencia de las interfaces.',
            tag: 'Design Governance'
          },
          {
            id: 4,
            title: 'Componentes Web Reutilizables',
            description: 'Creación de módulos y componentes reutilizables para mantener la solidez visual en futuras comunicaciones.',
            tag: 'Modular Architecture'
          }
        ]
      }
    }
  },
  {
    id: 'genesis-latam',
    slug: 'genesis-latam',
    client: 'Genesis Consulting LATAM',
    category: 'Brand Strategy & Full-Stack Digital Presence',
    year: '2025 - Presente',
    role: 'Full Stack Design Engineer & Brand Strategist (Solo Freelance)',
    metricsHighlight: {
      pt: '+82% Tráfego',
      en: '+82% Traffic',
      es: '+82% Tráfico'
    },
    metricLabel: {
      pt: 'Mais tráfego em relação ao site US e 2x tempo de sessão',
      en: 'More traffic compared to the US site and 2x session duration',
      es: 'Más tráfico en comparación con el sitio US y 2x duración de sesión'
    },
    coverImage: genesisLatamCover,
    pullQuote: {
      pt: 'Antes que o site LATAM pudesse parecer diferente do americano, alguém precisava decidir, concretamente, o que "diferente" significava.',
      en: 'Before the LATAM site could look different from the US one, someone had to decide, specifically, what "different" meant.',
      es: 'Antes de que el sitio de LATAM pudiera verse diferente al de EE. UU., alguien tenía que decidir, concretamente, qué significaba "diferente".'
    },
    tags: ['Brand Strategy', 'Brand Sprint', 'Soft Rebrand', 'Full-Stack Web', 'SEO / SEM / AEO', 'Content & Editorial', 'Marketing Automation'],
    title: {
      pt: 'Genesis LATAM: Estratégia de marca, presença digital e 82% mais tráfego que a matriz US',
      en: 'Genesis LATAM: Brand strategy, full-stack digital presence, and +82% traffic over the US site',
      es: 'Genesis LATAM: Estrategia de marca, presencia digital y 82% más tráfico que la matriz US'
    },
    subtitle: {
      pt: 'Brand sprint, soft rebrand tecnológico, desenvolvimento web com SEO/SEM/GEO/AEO, infraestrutura de blog, automações de marketing e consultoria contínua.',
      en: 'Brand sprint, technological soft rebrand, full-stack website with SEO/SEM/GEO/AEO, blog infrastructure, marketing automation, and ongoing retainer.',
      es: 'Brand sprint, soft rebrand tecnológico, desarrollo web con SEO/SEM/GEO/AEO, blog, automatizaciones y asesoría continua.'
    },
    impactSummary: {
      pt: 'Atuando como designer e estrategista solo desde abril de 2025, liderei a criação da presença digital e da marca da Genesis LATAM. Conduzi um brand sprint definindo a diferenciação regional, estruturei o site com SEO/SEM/GEO/AEO e automações de formulários, lancei o blog editorial (13 artigos originais) e construí 5 cases estruturados. O projeto gerou 82% mais tráfego e o dobro do tempo de sessão em relação ao site US, transformando a entrega pontual em um contrato contínuo de liderança de marca.',
      en: 'Operating as a solo designer and strategist since April 2025, led the brand strategy and digital presence for Genesis LATAM. Conducted a brand sprint establishing regional differentiation, built the website with native SEO/SEM/GEO/AEO and form automations, launched an editorial blog (13 original articles), and structured 5 persuasive case studies. The site achieved 82% more traffic and double the session duration compared to the US site, converting the engagement into an ongoing communication retainer.',
      es: 'Liderando como diseñador y estratega independiente desde abril de 2025, creé la presencia digital de Genesis LATAM. Ejecuté un brand sprint, desarrollé el sitio web con SEO/SEM/GEO/AEO y automatizaciones, lancé el blog (13 artículos) y 5 casos de estudio. El sitio superó en un 82% el tráfico de la matriz en EE. UU. con el doble de duración de sesión, convirtiéndose en una asesoría continua.'
    },
    challenge: {
      pt: {
        title: 'O Desafio',
        description: `A operação da Genesis LATAM necessitava de credibilidade própria para fechar grandes contratos corporativos independentemente da marca nos EUA — e o mercado latino-americano exigia comunicação e posicionamento próprios, não uma cópia traduzida da experiência americana.

• Uma clonagem visual direta do site US sinalizaria a LATAM como uma operação satélite secundária, sem autoridade regional.
• O mercado demandava um tom de voz e posicionamento distintos, impedindo que o site fosse apenas "o site americano com outra roupagem".
• Ninguém havia definido, concretamente, o que significava "diferente da Genesis US, mas ainda sendo Genesis" para a região.
• O maior desafio não foi desenhar o site: foi responder à questão estratégica de diferenciação antes que qualquer decisão de interface pudesse ser tomada com segurança.`,
        keyPoints: [
          'Necessidade de autoridade regional independente para fechar grandes contratos.',
          'Risco de parecer uma operação satélite se usasse uma cópia direta do site US.',
          'Ausência de definição concreta de posicionamento regional para a LATAM.',
          'Necessidade de estruturar estratégia de marca antes de desenhar a interface.'
        ]
      },
      en: {
        title: 'The Challenge',
        description: `Genesis LATAM's operation needed its own credibility to close larger contracts independently of the US brand — and the LATAM market called for its own communication and positioning, not a translated copy of the US experience.

• A straight visual clone of the US site would have signaled LATAM as a satellite operation, not a credible regional presence in its own right.
• The market demanded a distinct tone and positioning, which meant the site couldn't just be "the US site, reskinned".
• Nobody had yet defined, concretely, what "different from Genesis US, but still Genesis" actually meant for the region.
• The hardest part wasn't designing the site: it was answering the differentiation question before any interface decision could be trusted.`,
        keyPoints: [
          'Need for independent regional credibility to close large-scale enterprise deals.',
          'Risk of appearing as a subordinate satellite if duplicating US visual identity.',
          'Lack of concrete regional brand positioning definition for Latin America.',
          'Requirement to solve brand differentiation before locking UI decisions.'
        ]
      },
      es: {
        title: 'El Desafío',
        description: `La operación de Genesis LATAM necesitaba credibilidad propia para cerrar contratos importantes de manera independiente — y el mercado requería comunicación y posicionamiento propios, no una réplica traducida de la experiencia estadounidense.

• Un clon visual del sitio de EE. UU. habría posicionado a LATAM como una sucursal satélite sin peso propio.
• El mercado demandaba un tono y posicionamiento específicos, impidiendo que el sitio fuera solo un rediseño superficial.
• Nadie había definido concretamente qué significaba ser "diferente a Genesis US, pero manteniendo la esencia de Genesis".
• El desafío principal no fue diseñar las pantallas, sino definir la diferenciación antes de tomar decisiones de interfaz.`,
        keyPoints: [
          'Necesidad de autoridad regional para cerrar contratos corporativos.',
          'Riesgo de proyectar una imagen subordinada mediante copias literales del sitio US.',
          'Falta de definición estratégica sobre el posicionamiento regional en LATAM.',
          'Urgencia de alinear la estrategia de marca antes de estructurar la UI.'
        ]
      }
    },
    solution: {
      pt: {
        title: 'A Solução',
        description: 'Atuação full stack abrangendo três camadas integradas: o website (soft rebrand, backend de formulários e automação, SEO/SEM/GEO/AEO), estratégia de marca (brand sprint inicial revisitado após um ano) e infraestrutura de comunicação (blog editorial, identidade visual para redes, newsletter interna e Google Ads) — tudo executado de forma autônoma sem equipe dedicada de dev, redação ou tráfego.',
        highlights: [
          {
            title: 'Pocket Brand Sprint para responder à pergunta real',
            desc: 'Condução de um brand sprint condensado mapeando valores da marca, público-alvo e concorrentes antes de desenhar a interface — material posteriormente incorporado à documentação oficial da Genesis.'
          },
          {
            title: 'Soft rebrand voltado para credibilidade institucional',
            desc: 'Modernização da direção visual tendo o site US como referência, projetando a sensação tecnológica e robusta necessária para fechar grandes contratos corporativos.'
          },
          {
            title: 'Arquitetura técnica além da interface',
            desc: 'Configuração da lógica de backend para formulários e automações, estruturando diretamente os pilares de SEO, SEM, GEO e AEO do site.'
          },
          {
            title: 'De projeto pontual a liderança da comunicação da marca',
            desc: 'Evolução para contrato contínuo: lançamento e redação do blog com estratégia transmídia e link building (13 artigos originais), identidade visual para redes sociais, newsletter interna Genesis News e gestão de Google Ads.'
          },
          {
            title: 'Revisão estratégica da marca após um ano',
            desc: 'Reavaliação da análise original de marca aproximadamente um ano após o sprint inicial, validando as hipóteses com os resultados práticos obtidos.'
          }
        ]
      },
      en: {
        title: 'The Solution',
        description: 'Comprehensive full-stack leadership across three integrated layers: the website itself (soft rebrand, backend configuration for forms and automation, full SEO/SEM/GEO/AEO structuring), brand strategy (initial brand sprint revisited one year later), and brand communication infrastructure (blog, social visual identity, internal newsletter, and Google Ads) — handled solo without dedicated developers, copywriters, or media buyers.',
        highlights: [
          {
            title: 'Pocket brand sprint to solve the core question first',
            desc: 'Executed a condensed brand sprint mapping values, target audience, and competitors before touching the UI — material later folded directly into Genesis\'s official brand documentation.'
          },
          {
            title: 'A soft rebrand built for enterprise credibility',
            desc: 'Modernized the visual direction against the US site benchmark, projecting the technological, robust atmosphere needed to win major regional contracts.'
          },
          {
            title: 'Technical depth beyond interface design',
            desc: 'Configured backend form handling, marketing automation workflows, and native SEO, SEM, GEO, and AEO architecture.'
          },
          {
            title: 'From single project to owning brand communications',
            desc: 'Grew into an ongoing retainer: launched and authored 13 original blog articles with transmedia link-building, designed social media identity, created the Genesis News newsletter, and managed Google Ads.'
          },
          {
            title: 'Revisiting brand strategy after one year',
            desc: 'Re-evaluated the initial brand analysis one year in, auditing actual market performance against original sprint hypotheses.'
          }
        ]
      },
      es: {
        title: 'La Solución',
        description: 'Liderazgo integral en tres niveles: sitio web (soft rebrand, backend de formularios y automatización, SEO/SEM/GEO/AEO), estrategia de marca (brand sprint inicial revisado al año) e infraestructura de comunicación (blog, identidad en redes, newsletter interna y Google Ads) — ejecutado de manera autónoma.',
        highlights: [
          {
            title: 'Pocket Brand Sprint para definir la diferenciación',
            desc: 'Brand sprint condensado para definir valores, audiencia y competencia antes del diseño visual — documento incorporado a la guía oficial de la marca.'
          },
          {
            title: 'Soft rebrand enfocado en credibilidad institucional',
            desc: 'Modernización visual tomando como base el sitio de EE. UU., logrando un estilo tecnológico y sólido para captar grandes clientes.'
          },
          {
            title: 'Infraestructura técnica integral',
            desc: 'Configuración de backend para formularios, flujos de automatización y estructura avanzada de SEO, SEM, GEO y AEO.'
          },
          {
            title: 'De proyecto único a asesoría continua de comunicación',
            desc: 'Transición a consultoría continua: creación y redacción de 13 artículos de blog, identidad para redes, newsletter Genesis News y campañas en Google Ads.'
          },
          {
            title: 'Revisión estratégica al cumplirse un año',
            desc: 'Auditoría de la estrategia de marca un año después del lanzamiento para ajustar la comunicación a la dinámica real del mercado.'
          }
        ]
      }
    },
    results: {
      pt: {
        title: 'Resultados e Impacto',
        stats: [
          {
            value: '+82%',
            label: 'Tráfego vs Site US',
            desc: 'Superação consistente do volume de tráfego do site da matriz nos últimos 30 dias.'
          },
          {
            value: '2x Mais',
            label: 'Tempo Médio de Sessão',
            desc: 'O dobro do tempo de permanência de usuários em comparação com o site americano.'
          },
          {
            value: '13 Artigos',
            label: 'Conteúdo Original no Blog',
            desc: 'Artigos estratégicos autorais com link building e autoridade de domínio.'
          }
        ],
        summary: 'O lançamento em junho de 2025 entregou todas as configurações planejadas. A operação LATAM superou o site US em 82% no tráfego com 2x o tempo de sessão, 13 artigos originais publicados, 5 cases estruturados e 2 fluxos de automação de formulários ativos (contato e treinamentos privados), convertendo um projeto pontual em um contrato contínuo de gestão da marca.'
      },
      en: {
        title: 'Results & Impact',
        stats: [
          {
            value: '+82%',
            label: 'Traffic vs US Site',
            desc: 'Consistently outperforming the US headquarters website traffic volume.'
          },
          {
            value: '2x Higher',
            label: 'Avg Session Duration',
            desc: 'Double the user engagement and dwell time compared to the US benchmark.'
          },
          {
            value: '13 Articles',
            label: 'Original Blog Content',
            desc: 'Authorial strategic articles driving organic transmedia traffic and domain authority.'
          }
        ],
        summary: 'Launched in June 2025 with every promised feature live. Genesis LATAM now generates 82% more traffic than the US site with double the session duration, 13 original blog articles, 5 metric-driven case studies, and 2 live automation workflows, transforming an initial project into an ongoing strategic communication retainer.'
      },
      es: {
        title: 'Resultados e Impacto',
        stats: [
          {
            value: '+82%',
            label: 'Tráfico vs Sitio US',
            desc: 'Tráfico superior sostenido en comparación con el portal de la matriz en EE. UU.'
          },
          {
            value: '2x Mayor',
            label: 'Duración de Sesión',
            desc: 'El doble de tiempo de permanencia promedio respecto al sitio estadounidense.'
          },
          {
            value: '13 Artículos',
            label: 'Contenido Original de Blog',
            desc: 'Publicaciones estratégicas exclusivas que fortalecen la autoridad de dominio.'
          }
        ],
        summary: 'Sitio lanzado en junio de 2025 con éxito operativo total. La plataforma LATAM atrae 82% más tráfico que la matriz con el doble de duración de sesión, 13 artículos de blog, 5 casos estructurados y 2 automatizaciones activas, consolidando una alianza estratégica a largo plazo.'
      }
    },
    futureVision: {
      pt: {
        title: 'Visão de Futuro e Expansão',
        subtitle: 'Metas contínuas de consolidação e escala da presença regional',
        topics: [
          {
            id: 1,
            title: 'Consolidação como Benchmark Global',
            description: 'Posicionar a Genesis LATAM como o padrão de excelência e inovação para o qual a matriz americana se volta.',
            tag: 'Global Benchmark'
          },
          {
            id: 2,
            title: 'Ativação Multicanal de Produtos',
            description: 'Com as bases sólidas da marca definidas, expandir para novos materiais de comunicação que ativem a marca e seus produtos em múltiplos canais.',
            tag: 'Product Marketing'
          },
          {
            id: 3,
            title: 'Campanhas Nativas para a América Latina',
            description: 'Construção de campanhas com voz e mensagens alinhadas especificamente ao público e mix de produtos da LATAM, sem adaptações superficiais do conteúdo US.',
            tag: 'Regional Marketing'
          },
          {
            id: 4,
            title: 'Fortalecimento da Comunicação Interna',
            description: 'Evoluir o Genesis News e outros materiais internos para consolidar uma presença de marca viva e engajadora para os colaboradores.',
            tag: 'Internal Branding'
          }
        ]
      },
      en: {
        title: 'Future Vision & Expansion',
        subtitle: 'Strategic roadmap for sustained regional dominance and brand scale',
        topics: [
          {
            id: 1,
            title: 'Consolidation as Global Benchmark',
            description: 'Position Genesis LATAM as the benchmark of excellence that the US headquarters looks to for modern digital execution.',
            tag: 'Global Benchmark'
          },
          {
            id: 2,
            title: 'Multi-Channel Product Activation',
            description: 'Leverage established brand foundations to create dynamic communication assets activating the brand and product portfolio across touchpoints.',
            tag: 'Product Marketing'
          },
          {
            id: 3,
            title: 'LATAM-Native Campaigns',
            description: 'Craft targeted campaigns with messaging tailored specifically to LATAM audiences and market offerings, rather than adapting US materials.',
            tag: 'Regional Marketing'
          },
          {
            id: 4,
            title: 'Internal Brand Culture',
            description: 'Scale Genesis News and internal communications into an authentic brand experience for internal teams and partners.',
            tag: 'Internal Branding'
          }
        ]
      },
      es: {
        title: 'Visión de Futuro y Expansión',
        subtitle: 'Estrategia continua para consolidar el posicionamiento y la escala regional',
        topics: [
          {
            id: 1,
            title: 'Consolidación como Referente Global',
            description: 'Posicionar a Genesis LATAM como el estándar de excelencia para toda la marca global.',
            tag: 'Global Benchmark'
          },
          {
            id: 2,
            title: 'Activación Multicanal de Productos',
            description: 'Aprovechar la sólida base de marca para desarrollar materiales promocionales que activen productos en nuevos canales.',
            tag: 'Product Marketing'
          },
          {
            id: 3,
            title: 'Campañas Nativas para América Latina',
            description: 'Desarrollo de campañas con voz y propuesta de valor enfocadas directamente en el público regional.',
            tag: 'Regional Marketing'
          },
          {
            id: 4,
            title: 'Cultura y Comunicación Interna',
            description: 'Expandir Genesis News y los canales internos para fortalecer la identidad y pertenencia del equipo.',
            tag: 'Internal Branding'
          }
        ]
      }
    }
  },
{
    id: 'renault',
    slug: 'renault',
    client: 'Renault',
    category: 'Automotive IoT & Connected Services',
    year: '2025',
    role: 'UX/UI Designer (Connected Car Services - CCS)',
    metricsHighlight: {
      pt: 'Benchmark Global',
      en: 'Global Benchmark',
      es: 'Benchmark Global'
    },
    metricLabel: {
      pt: 'Serviços Conectados (CCS) estabelecidos como referência de experiência veicular',
      en: 'CCS established as a reference point for connected car experiences',
      es: 'CCS establecido como referente de experiencia en vehículos conectados'
    },
    coverImage: renaultCover,
    pullQuote: {
      pt: 'Um recurso de segurança que tranquiliza em um mercado pode alarmar em outro. O objetivo nunca foi consistência cega — foi discernimento global.',
      en: 'A safety feature that reassures in one market can alarm in another. Global consistency was never the goal — global judgment was.',
      es: 'Una función de seguridad que tranquiliza en un mercado puede alarmar en otro. El objetivo nunca fue la consistencia ciega, sino el discernimiento global.'
    },
    tags: ['Connected Vehicles', 'Automotive IoT', 'Safety Telemetry', 'Conversational UX', 'Multicultural Alignment', 'MyRenault App'],
    title: {
      pt: 'Renault Connected Car Services: Integrando telemetria e segurança no app MyRenault',
      en: 'Renault Connected Car Services: Integrating telemetry and safety into MyRenault',
      es: 'Renault Connected Car Services: Integrando telemetría y seguridad en MyRenault'
    },
    subtitle: {
      pt: 'Integração de 3 serviços conectados críticos (Rastreamento de Veículo Roubado/SVT, ACN e Alertas Anormais) com experiência contextualizada entre mercados globais.',
      en: 'Integrating 3 new connected features (Stolen Vehicle Tracking, ACN, and Abnormal alerts) into MyRenault with context-sensitive global UX.',
      es: 'Integración de 3 servicios conectados críticos (Rastreo de Vehículo Robado/SVT, ACN y Alertas Anormales) en la app MyRenault.'
    },
    impactSummary: {
      pt: 'Atuando no time de Connected Car Services (CCS) da Renault ao lado de designers, desenvolvedores internacionais, PM e scrum masters (Jun - Ago 2025), liderei a estratégia de UX e fluxos conversacionais de suporte para 3 recursos essenciais no MyRenault: Stolen Vehicle Tracking (SVT), ACN e Alertas Anormais. Estabelecemos um framework de design sensível ao contexto sociocultural e posicionamos o design como influenciador de decisões estratégicas de negócios.',
      en: 'Part of Renault\'s Connected Car Services (CCS) team alongside international UX designers, developers, PM, and scrum masters (Jun - Aug 2025), leading UX strategy and support flows for 3 critical connected vehicle features in MyRenault: Stolen Vehicle Tracking (SVT), ACN, and Abnormal alerts with a context-sensitive safety framework.',
      es: 'En el equipo de Connected Car Services (CCS) de Renault junto a diseñadores internacionales, desarrolladores, PM y scrum masters (Jun - Ago 2025), lideré la estrategia de UX y flujos de soporte para 3 funciones clave en MyRenault: Rastreo de Vehículo Robado (SVT), ACN y Alertas Anormales.'
    },
    challenge: {
      pt: {
        title: 'O Desafio',
        description: `Os stakeholders da Renault estavam distribuídos por múltiplos países, cada um com uma leitura particular sobre o que os Serviços Conectados (CCS) deveriam representar. Sem um alinhamento comum, havia o risco de criar uma experiência dita "global" desenhada em torno da região que falasse mais alto — e não em torno do comportamento real dos usuários locais.

A dimensão da segurança tornava o desafio ainda mais nítido: o SVT rastreia veículos roubados — uma funcionalidade que precisa transmitir amparo e tranquilidade imediata, e não alarme ou pânico. Essa linha muda conforme a realidade socioeconômica de cada região e a forma como as pessoas reagem sob estresse.`,
        keyPoints: [
          'Grupos regionais de stakeholders tomando decisões isoladas sem conciliação de metas de negócios com necessidades do usuário.',
          'SVT e recursos de segurança necessitando de design sensível ao contexto, evitando templates genéricos.',
          'Risco do design virar mera camada de execução para decisões tomadas sem embasamento de comportamento.'
        ]
      },
      en: {
        title: 'The Challenge',
        description: `Renault's stakeholders were spread across multiple countries, each with a different read on what CCS needed to be. Without a shared alignment point, that risked becoming a "global" experience designed around whichever region spoke loudest — not around actual user behavior anywhere.

Safety made this sharper. Stolen Vehicle Tracking (SVT) tracks a stolen vehicle — a feature that needs to read as reassurance, not alarm, and that line moves depending on a region's socio-economic context and how people there actually behave under stress.`,
        keyPoints: [
          'Regional stakeholder groups making decisions independently with no common reconciliation framework.',
          'SVT and safety features requiring context-sensitive design rather than a single template applied everywhere.',
          'Risk of design becoming an execution layer for decisions made elsewhere without user-behavior input.'
        ]
      },
      es: {
        title: 'El Desafío',
        description: `Los stakeholders de Renault estaban distribuidos en varios países con visiones distintas sobre CCS. Sin alineación, se corría el riesgo de diseñar para la región con mayor voz en lugar de entender el comportamiento real del usuario.

La seguridad requería extremo cuidado: el rastreo de vehículos robados (SVT) debe transmitir tranquilidad y no pánico, un límite que varía según la realidad socioeconómica de cada país.`,
        keyPoints: [
          'Grupos regionales tomando decisiones independientes sin marco de conciliación común.',
          'Funciones de seguridad (SVT) requiriendo diseño sensible al contexto socioeconómico.',
          'Riesgo de que el diseño fuera relegado a una simple fase de ejecución posterior.'
        ]
      }
    },
    solution: {
      pt: {
        title: 'A Solução',
        description: `Facilitamos workshops e dinâmicas estruturadas para conectar stakeholders de múltiplos países, alinhando objetivos de negócio com comportamento do usuário antes do fechamento de decisões.

Desenvolvemos a estratégia sensível ao contexto para o SVT, tratando um recurso global de segurança como algo que precisa conquistar confiança local primeiro. Entregamos fluxos conversacionais e de suporte para o ecossistema CCS (SVT, ACN e Alertas Anormais), estabelecendo o artefato concreto a partir do qual o time pôde construir as telas diretamente.`,
        highlights: [
          {
            title: 'Interface Central & Alinhamento Multicultural',
            desc: 'Workshops colaborativos conectando stakeholders internacionais para harmonizar objetivos de negócio e necessidades de usuário.'
          },
          {
            title: 'Estratégia Sensível ao Contexto para Segurança',
            desc: 'Mapeamento de comportamentos e reações sob estresse para o rastreamento veicular em diferentes realidades socioeconômicas.'
          },
          {
            title: 'Fluxos Conversacionais de Suporte CCS',
            desc: 'Estruturação dos fluxos de atendimento e suporte para SVT, ACN e Alertas Anormais no app MyRenault.'
          },
          {
            title: 'Design como Parceiro Estratégico de Negócios',
            desc: 'Posicionamento do time de design no centro das discussões que moldam o posicionamento de marca e parcerias globais.'
          }
        ]
      },
      en: {
        title: 'The Solution',
        description: `Facilitated workshops connecting stakeholders across countries, aligning business goals with user needs before decisions locked in.

Crafted a context-sensitive strategy for SVT, treating a global safety feature as something that had to be locally trustworthy first. Delivered conversational support flows for the CCS ecosystem (SVT, ACN, and Abnormal alerts) as the concrete foundation for the engineering team to build from.`,
        highlights: [
          {
            title: 'Central Interface Across Multicultural Teams',
            desc: 'Workshops connecting stakeholders across countries to align business goals with user needs.'
          },
          {
            title: 'Context-Sensitive Strategy for Safety Features',
            desc: 'Structured SVT behavior around regional socio-economic realities and user reactions under stress.'
          },
          {
            title: 'Conversational Support Flows for CCS',
            desc: 'Defined the support flows for SVT, ACN, and Abnormal alerts within the MyRenault application.'
          },
          {
            title: 'Design as a Strategic Partner',
            desc: 'Positioned design as an influential voice in high-level business decisions and global partnerships.'
          }
        ]
      },
      es: {
        title: 'La Solución',
        description: `Talleres colaborativos entre stakeholders internacionales para alinear visión de negocio y necesidades de usuario. Desarrollamos la estrategia contextual para SVT y especificamos los flujos de soporte para MyRenault.`,
        highlights: [
          {
            title: 'Alineación Central Multicultural',
            desc: 'Talleres conectando stakeholders de diferentes países para unificar objetivos.'
          },
          {
            title: 'Estrategia de Seguridad Sensible al Contexto',
            desc: 'Diseño adaptado a reacciones bajo estrés en diversas realidades socioeconómicas.'
          },
          {
            title: 'Flujos Conversacionales de Soporte CCS',
            desc: 'Especificación de soporte para SVT, ACN y Alertas Anormales en MyRenault.'
          },
          {
            title: 'Diseño como Socio Estratégico',
            desc: 'Posicionamiento del diseño en las decisiones de negocio clave.'
          }
        ]
      }
    },
    results: {
      pt: {
        title: 'Resultados & Impacto',
        stats: [
          {
            label: 'Referência Global',
            value: 'Benchmark',
            desc: 'CCS estabelecido como referência de experiência em carros conectados na Renault.'
          },
          {
            label: 'Papel Estratégico',
            value: 'Parceiro',
            desc: 'Design reconhecido pela liderança da Renault por influenciar decisões de negócios.'
          },
          {
            label: 'Recursos Entregues',
            value: '3 Serviços',
            desc: 'SVT, ACN e Alertas Anormais estruturados com fluxos de suporte completos.'
          }
        ],
        summary: 'O projeto de Connected Car Services (CCS) foi reconhecido como benchmark global dentro da Renault. O design consolidou-se como parceiro estratégico da liderança, entregando os fluxos conversacionais de suporte para SVT, ACN e Abnormal e estruturando a base de segurança sensível ao contexto para implementação.'
      },
      en: {
        title: 'Results & Impact',
        stats: [
          {
            label: 'Global Reference',
            value: 'Benchmark',
            desc: 'CCS established as a reference point for connected car experiences.'
          },
          {
            label: 'Strategic Role',
            value: 'Partner',
            desc: 'Design recognized by Renault leadership for influencing business decisions.'
          },
          {
            label: 'Aligned Features',
            value: '3 Services',
            desc: 'SVT, ACN, and Abnormal aligned globally with full support flows.'
          }
        ],
        summary: 'CCS was recognized as a global benchmark within Renault. Design was established as a strategic business partner, delivering conversational support flows for SVT, ACN, and Abnormal alerts with a robust context-sensitive safety framework.'
      },
      es: {
        title: 'Resultados e Impacto',
        stats: [
          {
            label: 'Referente Global',
            value: 'Benchmark',
            desc: 'CCS establecido como referente de experiencia en vehículos conectados en Renault.'
          },
          {
            label: 'Rol Estratégico',
            value: 'Socio',
            desc: 'Diseño reconocido por la dirección por influir en decisiones de negocio.'
          },
          {
            label: 'Servicios Entregados',
            value: '3 Funciones',
            desc: 'SVT, ACN y Alertas Anormales estructurados con flujos de soporte completos.'
          }
        ],
        summary: 'El proyecto de CCS fue reconocido como benchmark global en Renault. El diseño se consolidó como socio estratégico, entregando los flujos de soporte conversacional para SVT, ACN y alertas anormales.'
      }
    },
    futureVision: {
      pt: {
        title: 'Visão de Futuro & Aprendizados',
        subtitle: 'Diretrizes estratégicas para serviços de mobilidade conectada e IoT veicular:',
        topics: [
          {
            id: 1,
            title: 'Design na Mesa de Decisões Estratégicas',
            description: 'Garantir que o design participe ativamente das decisões que definem parcerias de negócios e posicionamento global de marca — e não apenas na fase final de entrega de telas.',
            tag: 'Design Strategy'
          },
          {
            id: 2,
            title: 'Segurança Sensível ao Contexto',
            description: 'Em serviços veiculares críticos de telemetria, a confiança do usuário depende da adaptação às nuances culturais e realidades socioeconômicas locais.',
            tag: 'Automotive IoT'
          },
          {
            id: 3,
            title: 'Alinhamento Multicultural Contínuo',
            description: 'Estruturar rituais de alinhamento entre países antes de travar especificações técnicas evita retrabalho e inconsistências culturais.',
            tag: 'Cross-cultural Design'
          }
        ]
      },
      en: {
        title: 'Future Vision & Key Learnings',
        subtitle: 'Strategic directions for connected-car experience and automotive IoT:',
        topics: [
          {
            id: 1,
            title: 'Design at the Global Strategic Table',
            description: 'Ensuring design holds a seat in the strategic decisions that shape a brand\'s global positioning and partnerships — not just in shipping interfaces.',
            tag: 'Design Strategy'
          },
          {
            id: 2,
            title: 'Context-Sensitive IoT Safety',
            description: 'In critical automotive safety features, user trust depends on regional nuances and socio-economic adaptation.',
            tag: 'Automotive IoT'
          },
          {
            id: 3,
            title: 'Continuous Cross-Border Alignment',
            description: 'Structuring alignment rituals across global hubs prior to engineering lock-in prevents cultural disconnects.',
            tag: 'Cross-cultural Design'
          }
        ]
      },
      es: {
        title: 'Visión de Futuro y Aprendizajes',
        subtitle: 'Principios estratégicos para la movilidad conectada e IoT automotriz:',
        topics: [
          {
            id: 1,
            title: 'Diseño en la Mesa Estratégica Global',
            description: 'Asegurar que el diseño participe en las decisiones que definen el posicionamiento global de la marca.',
            tag: 'Design Strategy'
          },
          {
            id: 2,
            title: 'Seguridad IoT Sensible al Contexto',
            description: 'En telemetría vehicular crítica, la confianza del usuario requiere adaptación a realidades socioeconómicas locales.',
            tag: 'Automotive IoT'
          },
          {
            id: 3,
            title: 'Alineación Multicultural Continua',
            description: 'Estructurar talleres internacionales antes del cierre técnico evita discrepancias culturales.',
            tag: 'Cross-cultural Design'
          }
        ]
      }
    }
  },
{
    id: 'abinbev',
    slug: 'abinbev',
    client: 'AB InBev',
    category: 'Enterprise Fintech & B2B',
    year: '2025',
    role: 'UX/UI Designer & Product Specialist (PowerApps & Power BI)',
    metricsHighlight: {
      pt: '30% de Redução',
      en: '30% Reduction',
      es: '30% de Reducción'
    },
    metricLabel: {
      pt: 'Redução de custos por eficiência operacional',
      en: 'Cost reduction through operational efficiency',
      es: 'Reducción de costos por eficiencia operativa'
    },
    coverImage: abinbevCover,
    pullQuote: {
      pt: 'Uma fórmula de planilha editada por engano não quebra apenas uma célula. Quebra uma decisão na cadeia de suprimentos três níveis acima.',
      en: 'A spreadsheet formula edited by mistake doesn’t just break a cell. It breaks a supply chain decision three levels up.',
      es: 'Una fórmula de hoja de cálculo editada por error no solo rompe una celda. Rompe una decisión en la cadena de suministro tres niveles más arriba.'
    },
    tags: ['PowerApps', 'Power BI', 'Power Fx', 'LATAM Operations', 'B2B Fintech', 'Cost Optimization'],
    title: {
      pt: 'AB InBev Budget App: Substituição de planilhas manuais e redução de 30% em custos operacionais',
      en: 'AB InBev Budget App: Replacing manual spreadsheets and cutting operational costs by 30%',
      es: 'AB InBev Budget App: Reemplazo de hojas de cálculo manuales y reducción del 30% en costos operativos'
    },
    subtitle: {
      pt: 'Substituição de planilhas orçamentárias manuais em mais de 1.000 unidades fabris na América Latina por uma única aplicação PowerApps com dashboards Power BI integrados.',
      en: 'Replacing manual budget spreadsheets across 1,000+ manufacturing units in LATAM with a single PowerApps application and integrated Power BI dashboards.',
      es: 'Reemplazo de hojas de cálculo presupuestarias manuales en más de 1.000 plantas en América Latina por una única aplicación PowerApps con paneles Power BI integrados.'
    },
    impactSummary: {
      pt: 'Contratado como UX/UI Designer para a operação LATAM da AB InBev em uma equipe com 2 devs e 2 PMs, o trabalho rapidamente expandiu: atuando na lógica Power Fx e criando dashboards Power BI para unificar fluxos entre Unidade, Regional e Corporativo.',
      en: 'Hired as a UX/UI Designer for AB InBev\'s LATAM operation on a team of 2 developers and 2 PMs, the scope quickly expanded: writing Power Fx logic and building Power BI dashboards to unify workflows across Unit, Regional, and Corporate levels.',
      es: 'Contratado como UX/UI Designer para la operación LATAM de AB InBev en un equipo con 2 devs y 2 PMs, el trabajo se expandió rápidamente: escribiendo lógica Power Fx y creando paneles Power BI para unificar flujos entre Unidades, Regional y Corporativo.'
    },
    challenge: {
      pt: {
        title: 'O Desafio',
        description: `A organização rodava todo o seu processo de acompanhamento orçamentário na América Latina em planilhas manuais repletas de fórmulas. Todo mês, ao menos um usuário de unidade editava uma fórmula por engano no lugar do campo de entrada.

Essa única falha cascateava: a liderança precisava auditar planilha por planilha, decisões de contratação e investimento ficavam travadas e o impacto financeiro era real — gerando falta ou desperdício de insumos na cadeia de suprimentos por pedidos incorretos.`,
        keyPoints: [
          'Erros de digitação em planilhas apagavam fórmulas e paralisavam auditorias mensais.',
          'Decisões operacionais e de headcount travadas aguardando consolidação manual entre unidades.',
          'Insumos encomendados em quantidade errada gerando custo financeiro direto e desperdício operacional.'
        ]
      },
      en: {
        title: 'The Challenge',
        description: `The organization ran its entire LATAM budget-tracking process on manual spreadsheets loaded with formulas. Every month, at least one unit-level user edited a formula instead of the intended input field.

That single mistake cascaded: leadership had to audit spreadsheets one by one, headcount decisions got stuck behind audits, and production input errors generated real waste and supply chain disruption.`,
        keyPoints: [
          'Recurrent spreadsheet typos overwrote critical formulas and paralyzed monthly audits.',
          'Operational and headcount decisions frozen pending manual multi-spreadsheet consolidation.',
          'Inaccurate supply orders leading to direct financial losses and manufacturing waste.'
        ]
      },
      es: {
        title: 'El Desafío',
        description: `La organización operaba todo su proceso de seguimiento presupuestario en LATAM en hojas de cálculo manuales llenas de fórmulas. Cada mes, al menos un usuario editaba una fórmula por error en lugar del campo de entrada.

Ese único fallo se cascateaba: la dirección debía auditar hojas de cálculo una por una, las decisiones de personal se bloqueaban e impactos financieros reales afectaban la cadena de suministro.`,
        keyPoints: [
          'Errores recurrentes en hojas de cálculo borraban fórmulas clave y paralizaban auditorías.',
          'Decisiones operativas y de contratación bloqueadas por consolidación manual de planillas.',
          'Insumos pedidos en cantidades incorrectas generando impacto financiero directo y desperdicio.'
        ]
      }
    },
    solution: {
      pt: {
        title: 'A Solução Implementada',
        description: 'Estruturamos uma aplicação unificada em PowerApps conectada a dashboards Power BI, organizando fluxos por personas e inserindo travas de segurança diretamente na experiência de uso.',
        highlights: [
          { title: 'Arquitetura Baseada em Personas', desc: 'Três visões distintas (Unidade, Regional, Corporativo) para que gestores locais insiram dados enquanto executivos acompanham agregados em tempo real.' },
          { title: 'Design Integrado à Lógica Power Fx', desc: 'Trabalho direto com desenvolvedores na escrita de fórmulas Power Fx, moldando como os usuários interagem com as regras do app.' },
          { title: 'Dashboards Power BI Integrados', desc: 'Criação dos dashboards que consomem os dados coletados, fechando o ciclo entre entrada do gerente e visualização executiva.' },
          { title: 'Guardrails e Alertas no Fluxo', desc: 'Sub-aplicativos (Overhead e VBZ) com alertas de dispersão que exigem justificativa para aumentos acima de 10% antes da submissão.' }
        ]
      },
      en: {
        title: 'The Implemented Solution',
        description: 'We structured a unified PowerApps application connected to Power BI dashboards, building around user personas and introducing inline guardrails directly into the flow.',
        highlights: [
          { title: 'Persona-Based Architecture', desc: 'Three distinct views (Unit, Regional, Corporate) allowing local managers to log data while executives view aggregated metrics.' },
          { title: 'Built Inside Power Fx Logic', desc: 'Collaborating directly in dev sessions to write Power Fx formulas, shaping interaction logic alongside functional code.' },
          { title: 'Integrated Power BI Dashboards', desc: 'Designing the Power BI dashboards that consume input data, closing the loop between manager input and executive views.' },
          { title: 'Flow Guardrails & Alerts', desc: 'Sub-apps (Overhead and VBZ) with dispersion alerts prompting users to justify trend increases over 10% prior to submission.' }
        ]
      },
      es: {
        title: 'La Solución Implementada',
        description: 'Estructuramos una aplicación unificada en PowerApps conectada a paneles Power BI, unificando flujos e introduciendo alertas de seguridad en tiempo real.',
        highlights: [
          { title: 'Arquitectura Basada en Personas', desc: 'Tres vistas distintas (Unidad, Regional, Corporativo) según el rol del usuario.' },
          { title: 'Diseño Integrado a Lógica Power Fx', desc: 'Trabajo directo en fórmulas Power Fx con desarrolladores para moldear la interacción.' },
          { title: 'Paneles Power BI Integrados', desc: 'Diseño de paneles Power BI que consumen los datos ingresados en tiempo real.' },
          { title: 'Alertas y Validaciones en el Flujo', desc: 'Alertas de dispersión exigiendo justificación para incrementos superiores al 10% antes del envío.' }
        ]
      }
    },
    results: {
      pt: {
        title: 'Resultados e Impacto Mensurável',
        stats: [
          { value: '30%', label: 'Redução de Custos', desc: 'Economia obtida através da eficiência operacional do novo sistema.' },
          { value: '1.000+', label: 'Unidades Cobertas', desc: 'Abrangência em 5 países e 3 regiões da América Latina.' },
          { value: '3 em 1', label: 'Fluxos Unificados', desc: 'Personas de Unidade, Regional e Corporativo integradas em um só app.' },
          { value: '0', label: 'Erros Silenciosos de Fórmula', desc: 'Erros capturados na digitação, eliminando auditorias manuais tardias.' }
        ],
        summary: 'O aplicativo não apenas digitalizou planilhas. Ele moveu o momento em que um erro é capturado de uma auditoria semanas depois para o exato segundo em que alguém digita o número errado.'
      },
      en: {
        title: 'Measurable Impact & Results',
        stats: [
          { value: '30%', label: 'Cost Reduction', desc: 'Achieved through operational efficiency enabled by the new system.' },
          { value: '1,000+', label: 'Units Covered', desc: 'Deployed across 5 countries and 3 regions in LATAM.' },
          { value: '3-in-1', label: 'Unified Workflows', desc: 'Unit, Regional, and Corporate personas united in a single app.' },
          { value: '0', label: 'Silent Formula Errors', desc: 'Errors caught at point-of-entry, eliminating weeks-later manual audits.' }
        ],
        summary: 'The app didn\'t just digitize a spreadsheet. It moved the moment an error gets caught from a weeks-later audit to the second someone types the wrong number.'
      },
      es: {
        title: 'Resultados e Impacto Medible',
        stats: [
          { value: '30%', label: 'Reducción de Costos', desc: 'Economía lograda a través de la eficiencia operativa del nuevo sistema.' },
          { value: '1.000+', label: 'Plantas Cubiertas', desc: 'Despliegue en 5 países y 3 regiones de América Latina.' },
          { value: '3 en 1', label: 'Flujos Unificados', desc: 'Personas de Unidad, Regional y Corporativo integradas en una sola app.' },
          { value: '0', label: 'Errores Silenciosos', desc: 'Errores capturados al digitar, eliminando auditorías manuales tardías.' }
        ],
        summary: 'La app no solo digitalizó una planilla. Movió el momento en que se captura un error de una auditoría semanas después al segundo exacto en que alguien escribe un número equivocado.'
      }
    },
    futureVision: {
      pt: {
        title: 'Visão de Futuro',
        subtitle: 'Recomendações estratégicas e próximos passos mapeados para expansão da inteligência orçamentária da AB InBev.',
        topics: [
          {
            id: 1,
            title: 'Escala para Outros Departamentos',
            description: 'Escalar a solução para outros departamentos e áreas funcionais dentro da organização.',
            tag: 'Escala Organizacional'
          },
          {
            id: 2,
            title: 'Previsão com Aprendizado de Máquina',
            description: 'Incorporar modelos de machine learning para sugerir automaticamente alocações orçamentárias com base no histórico de sazonalidade das cervejarias.',
            tag: 'Inteligência Artificial'
          },
          {
            id: 3,
            title: 'Sincronização em Tempo Real com ERPs',
            description: 'Avançar na integração bidirecional em tempo real com sistemas centrais (como SAP ou Oracle), eliminando atrasos de lotes noturnos.',
            tag: 'Integração de APIs'
          },
          {
            id: 4,
            title: 'Simulador de Cenários Macroeconômicos',
            description: 'Criar ferramentas interativas de modelagem permitindo que executivos testem impactos de inflação e variações cambiais na margem de lucro.',
            tag: 'Simulação & Analytics'
          }
        ]
      },
      en: {
        title: 'Future Vision',
        subtitle: 'Strategic recommendations and roadmap mapped to scale AB InBev’s financial ecosystem.',
        topics: [
          {
            id: 1,
            title: 'Departmental Scaling',
            description: 'Scale the solution to other departments and operational units within the organization.',
            tag: 'Organizational Scale'
          },
          {
            id: 2,
            title: 'Machine Learning Budget Forecasting',
            description: 'Embed machine learning models to automatically recommend budget allocations based on historical brewery seasonality.',
            tag: 'Financial AI'
          },
          {
            id: 3,
            title: 'Real-Time ERP Synchronization',
            description: 'Advance two-way real-time data sync with core systems (such as SAP or Oracle), eliminating nightly batch delays.',
            tag: 'API Integration'
          },
          {
            id: 4,
            title: 'Macroeconomic Scenario Sandbox',
            description: 'Build interactive modeling tools allowing executives to test inflation and currency fluctuation impacts on profit margins.',
            tag: 'Simulation & Analytics'
          }
        ]
      },
      es: {
        title: 'Visión de Futuro',
        subtitle: 'Recomendaciones estratégicas y hoja de ruta mapeadas para escalar el ecosistema presupuestario de AB InBev.',
        topics: [
          {
            id: 1,
            title: 'Escala a Otros Departamentos',
            description: 'Escalar la solución a otros departamentos y áreas operativas de la organización.',
            tag: 'Escala Organizacional'
          },
          {
            id: 2,
            title: 'Pronóstico Presupuestario Algorítmico',
            description: 'Incorporar modelos de aprendizaje automático para sugerir asignaciones basadas en la estacionalidad.',
            tag: 'IA Financiera'
          },
          {
            id: 3,
            title: 'Sincronización en Tiempo Real con ERPs',
            description: 'Avanzar en la integración bidireccional en tiempo real con sistemas clave (como SAP u Oracle).',
            tag: 'Integración de APIs'
          },
          {
            id: 4,
            title: 'Simulador de Escenarios Macroeconómicos',
            description: 'Crear herramientas interactivas de modelado para evaluar el impacto de la inflación y fluctuaciones cambiarias.',
            tag: 'Simulación y Análisis'
          }
        ]
      }
    }
  },
{
    id: 'nissan',
    slug: 'nissan',
    client: 'Nissan do Brasil',
    category: 'E-commerce & Automotive UX',
    year: '2025',
    role: 'UX/UI Designer (via BRQ)',
    metricsHighlight: {
      pt: '+23% de Receita',
      en: '+23% Revenue',
      es: '+23% de Ingresos'
    },
    metricLabel: {
      pt: 'Aumento de receita no canal digital (Mar - Jun 2025)',
      en: 'Digital channel revenue increase (Mar - Jun 2025)',
      es: 'Aumento de ingresos en el canal digital (Mar - Jun 2025)'
    },
    coverImage: nissanCover,
    pullQuote: {
      pt: 'Ninguém hesita em comprar uma camiseta online. Um carro é um tipo diferente de confiança.',
      en: 'Nobody hesitates buying a t-shirt online. A car is a different kind of trust.',
      es: 'Nadie duda en comprar una camiseta en línea. Un carro es un tipo diferente de confianza.'
    },
    tags: ['Automotive E-commerce', 'Financing UX', 'System Mapping', 'Nissan Replay & CDC', 'Technical Spec', 'Design System'],
    title: {
      pt: 'Nissan E-commerce: Redesenho da interface de financiamento e aumento de 23% na receita',
      en: 'Nissan E-commerce: Redesigning the financing interface and boosting revenue by 23%',
      es: 'Nissan E-commerce: Rediseño de la interfaz de financiamiento y aumento del 23% en ingresos'
    },
    subtitle: {
      pt: 'Reformulação da camada de financiamento online (Nissan Replay e CDC) para compra de veículos 0km, transformando documentação técnica e mapeamento de jornadas em confiança de venda.',
      en: 'Overhauling the online financing layer (Nissan Replay & CDC) for new car purchases, turning technical documentation and journey mapping into buyer trust.',
      es: 'Rediseño de la capa de financiamiento online (Nissan Replay y CDC) para compra de autos 0km, transformando documentación técnica y mapeo de jornadas en confianza de compra.'
    },
    impactSummary: {
      pt: 'Como único designer ao lado de 4 desenvolvedores e 1 scrum master cobrindo o papel de produto, redesenhei a camada onde clientes solicitam financiamento Nissan Replay ou CDC para compras 100% online. A solução real foi criar documentação técnica rigorosa e mapear 9 fluxos de ponta a ponta.',
      en: 'As the sole designer alongside 4 developers and a scrum master acting as product lead, I redesigned the layer where customers apply for Nissan Replay or CDC financing for 100% online car purchases. The real fix was rigorous technical documentation and mapping 9 end-to-end flows.',
      es: 'Como único diseñador junto a 4 desarrolladores y 1 scrum master en el rol de producto, rediseñé la capa donde los clientes solicitan financiamiento Nissan Replay o CDC para compras 100% online. La solución real fue una documentación técnica rigurosa y el mapeo de 9 flujos de extremo a extremo.'
    },
    challenge: {
      pt: {
        title: 'O Desafio',
        description: `Comprar um carro de quase R$ 100.000 inteiramente online exige um tipo de confiança muito diferente do e-commerce tradicional. Qualquer inconsistência na interface é interpretada como risco por quem está prestes a comprometer esse valor em uma tela.

O ambiente de documentação agravava esse risco:
• Fluxos de telas estavam completamente ausentes em partes da jornada de financiamento.
• Casos de borda — como o comportamento de um botão secundário — ficavam indefinidos.
• Dois modelos de financiamento distintos (Replay e CDC) rodavam sob regras de negócio sem uma fonte única da verdade.

Sem rede de segurança para um time de 4 desenvolvedores: com um único designer e sem um gerente de produto dedicado, cada caso de borda não documentado virava um julgamento improvisado sob pressão de sprint — exatamente onde decisões críticas de segurança não devem ser improvisadas.`,
        keyPoints: [
          'Inconsistências visuais e fluxos ausentes geravam desconfiança em compras de R$ 100.000.',
          'Dois modelos de financiamento (Replay e CDC) sem uma fonte única da verdade.',
          'Time de 4 devs tomando decisões críticas de negócio sob pressão de sprint por falta de especificação.'
        ]
      },
      en: {
        title: 'The Challenge',
        description: `Buying a car worth close to R$100,000 entirely online demands a different kind of trust than typical e-commerce. Any inconsistency in the interface reads as risk to someone about to commit that much money on a screen.

The documentation environment made that risk worse:
• Screen flows were missing entirely for parts of the financing journey.
• Edge cases — like what a secondary button should do — were left undefined.
• Two different financing models (Replay and CDC) ran on business rules with no single source of truth.

No safety net for a 4-developer team: with one designer and no dedicated product manager, every undocumented edge case became a judgment call made under sprint pressure — exactly where security-critical decisions shouldn't be improvised.`,
        keyPoints: [
          'Visual inconsistencies and missing flows created doubt during R$100,000 online purchases.',
          'Two distinct financing models (Replay & CDC) lacked a single source of truth.',
          'A 4-developer team making critical business decisions under sprint pressure due to missing specs.'
        ]
      },
      es: {
        title: 'El Desafío',
        description: `Comprar un auto de casi R$ 100.000 totalmente en línea exige un tipo de confianza muy diferente al e-commerce tradicional. Cualquier inconsistencia en la interfaz representa un riesgo para quien va a comprometer esa cifra en una pantalla.

El entorno de documentación empeoraba ese riesgo:
• Flujos de pantallas faltaban por completo en partes de la jornada de financiamiento.
• Casos límite (edge cases) quedaban indefinidos.
• Dos modelos de financiamiento (Replay y CDC) operaban con reglas de negocio sin una fuente única de verdad.

Sin red de seguridad para 4 desarrolladores: con un solo diseñador y sin PM dedicado, cada caso límite no documentado se convertía en una decisión improvisada bajo presión de sprint.`,
        keyPoints: [
          'Inconsistencias y flujos faltantes generaban desconfianza en compras de R$ 100.000.',
          'Dos modelos de financiamiento (Replay y CDC) sin una fuente única de verdad.',
          'Equipo de 4 desarrolladores improvisando decisiones críticas por falta de especificación.'
        ]
      }
    },
    solution: {
      pt: {
        title: 'A Solução Implementada',
        description: 'Em vez de desenhar telas isoladas, focamos no mapeamento de sistemas, aplicação consistente do design system da Nissan e documentação técnica detalhada como o verdadeiro entregável do projeto.',
        highlights: [
          { title: 'Mapeamento de Sistema sobre Telas Isoladas', desc: 'Conectamos cada tela ao seu fluxo de jornada específico, mantendo os requisitos técnicos e de negócios rastreáveis de ponta a ponta.' },
          { title: 'Design System da Nissan com Consistência', desc: 'Utilizamos o design system existente para manter layouts padronizados entre os modelos Replay e CDC, eliminando ruídos visuais.' },
          { title: 'Documentação como Entregável Efetivo', desc: 'Produzimos análises técnicas detalhadas — de mensagens de erro à lógica da calculadora —, permitindo que os devs construíssem sobre especificações claras.' }
        ]
      },
      en: {
        title: 'The Implemented Solution',
        description: 'Rather than designing screens in isolation, we prioritized end-to-end system mapping, consistent design system execution, and detailed technical documentation as the core deliverable.',
        highlights: [
          { title: 'System Mapping over Isolated Screens', desc: 'Connected every screen to its specific journey flow, keeping business and technical requirements traceable end to end.' },
          { title: 'Nissan Design System Applied Consistently', desc: 'Leveraged Nissan’s design system to standardize layouts across Replay and CDC models, closing visual gaps that undermined trust.' },
          { title: 'Documentation as the Core Deliverable', desc: 'Produced detailed technical analysis — from error messaging to calculator logic — so developers built against a defined spec.' }
        ]
      },
      es: {
        title: 'La Solución Implementada',
        description: 'En lugar de diseñar pantallas aisladas, priorizamos el mapeo de sistemas, la aplicación consistente del design system y la documentación técnica detallada como el entregable real.',
        highlights: [
          { title: 'Mapeo de Sistema sobre Pantallas Aisladas', desc: 'Conectamos cada pantalla a su flujo específico, manteniendo requisitos técnicos y de negocio trazables de principio a fin.' },
          { title: 'Design System de Nissan Aplicado con Consistencia', desc: 'Usamos el design system de Nissan para estandarizar diseños entre los modelos Replay y CDC, eliminando fricciones visuales.' },
          { title: 'Documentación como Entregable Efectivo', desc: 'Produjimos análisis técnicos detallados — desde mensajes de error hasta la lógica del calculador — para guiar la construcción técnica.' }
        ]
      }
    },
    results: {
      pt: {
        title: 'Resultados e Impacto no Negócio',
        stats: [
          { value: '+23%', label: 'Aumento de Receita', desc: 'Crescimento de receita do canal digital entre Março e Junho de 2025.' },
          { value: '9', label: 'Fluxos Mapeados', desc: 'Mapeamento completo de ponta a ponta das jornadas de financiamento.' },
          { value: '25+', label: 'Telas Redesenhadas', desc: 'Com média de 3 variações de estado cada (erros, preenchimento, sucesso).' },
          { value: '100%', label: 'Alinhamento com Devs', desc: 'Time de 4 desenvolvedores construindo sobre uma única fonte da verdade.' }
        ],
        summary: 'A interface não ficou apenas mais consistente. Ela fez uma decisão de R$ 100.000 parecer segura o suficiente para ser concluída na tela.'
      },
      en: {
        title: 'Business Results & Impact',
        stats: [
          { value: '+23%', label: 'Revenue Growth', desc: 'E-commerce revenue increase achieved between March and June 2025.' },
          { value: '9', label: 'Mapped Flows', desc: 'End-to-end mapping across all financing user journeys.' },
          { value: '25+', label: 'Redesigned Screens', desc: 'Averaging 3 state variations each (errors, field completion, success).' },
          { value: '100%', label: 'Developer Alignment', desc: 'A 4-developer team building against one unambiguous source of truth.' }
        ],
        summary: 'The interface didn’t just look more consistent. It made a R$100,000 decision feel safe enough to complete on a screen.'
      },
      es: {
        title: 'Resultados e Impacto Comercial',
        stats: [
          { value: '+23%', label: 'Aumento de Ingresos', desc: 'Crecimiento registrado en el canal digital entre marzo y junio de 2025.' },
          { value: '9', label: 'Flujos Mapeados', desc: 'Mapeo integral de extremo a extremo de las jornadas de financiamiento.' },
          { value: '25+', label: 'Pantallas Rediseñadas', desc: 'Con un promedio de 3 variaciones de estado cada una.' },
          { value: '100%', label: 'Alineación de Desarrollo', desc: 'Equipo de 4 desarrolladores guiados por una fuente única de verdad.' }
        ],
        summary: 'La interfaz no solo se vio más consistente. Hizo que una decisión de R$ 100.000 se sintiera lo suficientemente segura para completarse en pantalla.'
      }
    },
    futureVision: {
      pt: {
        title: 'Visão de Futuro e Aprendizados',
        subtitle: 'Este projeto foi encerrado sem uma próxima fase direta de execução, mas deixou aprendizados valiosos da resolução de atritos com parceiros de financiamento e seguros, além de ideias estratégicas para o produto:',
        topics: [
          {
            id: 1,
            title: 'Template de Documentação Herdável',
            description: 'Criar uma estrutura padronizada de documentação que novos fluxos pudessem herdar desde o dia um, evitando reconstruir processos do zero.',
            tag: 'DesignOps'
          },
          {
            id: 2,
            title: 'Padrão de Segurança Financeira',
            description: 'Estabelecer um padrão de padrões visuais e de segurança derivados do trabalho com os parceiros reguladores, evitando re-resolver o mesmo problema em cada projeto.',
            tag: 'Fintech & Security'
          },
          {
            id: 3,
            title: 'Expansão de Aprendizados no E-commerce',
            description: 'Reaproveitar a estrutura de especificação técnica e consistência em outros fluxos de e-commerce da Nissan além do financiamento.',
            tag: 'Escalabilidade UX'
          },
          {
            id: 4,
            title: 'Motor de Personalização por Estilo de Vida',
            description: 'Algoritmos de recomendação inteligente que combinam versões, opcionais e acessórios com perfis de uso (urbano, família, off-road).',
            tag: 'UX Inteligente'
          },
          {
            id: 5,
            title: 'Acompanhamento do Pedido de Fábrica em Tempo Real',
            description: 'Conexão com rastreamento fabril direto, dando visibilidade em tempo real para colaboradores e clientes desde a produção até a entrega.',
            tag: 'Rastreabilidade Ops'
          }
        ]
      },
      en: {
        title: 'Future Vision & Key Learnings',
        subtitle: 'While this project concluded without an immediate next phase, it established key learnings from resolving friction with third-party financing partners, alongside roadmap recommendations:',
        topics: [
          {
            id: 1,
            title: 'Inheritable Documentation Template',
            description: 'Create a standardized spec template that new product flows can inherit from day one, avoiding rebuilding documentation structures from scratch.',
            tag: 'DesignOps'
          },
          {
            id: 2,
            title: 'Financial Security UX Standards',
            description: 'Define reusable financial security UI patterns drawn directly from partner friction, ensuring trust models don\'t need to be re-invented.',
            tag: 'Fintech & Security'
          },
          {
            id: 3,
            title: 'Cross-Product Knowledge Transfer',
            description: 'Reapply documentation and design system consistency across other Nissan e-commerce user journeys beyond financing.',
            tag: 'UX Scalability'
          },
          {
            id: 4,
            title: 'Lifestyle-Driven Personalization Engine',
            description: 'Smart recommendation algorithms matching trim levels and accessories to user lifestyle profiles (urban, family, off-road).',
            tag: 'Smart UX'
          },
          {
            id: 5,
            title: 'Real-Time Factory Order Tracking',
            description: 'Integration with factory order systems giving real-time visibility from manufacturing to final dealership delivery.',
            tag: 'OrderOps'
          }
        ]
      },
      es: {
        title: 'Visión de Futuro y Aprendizajes',
        subtitle: 'Aunque este proyecto concluyó sin una fase de ejecución posterior, dejó aprendizajes clave derivados del trabajo con socios financieros y seguros, así como recomendaciones para el producto:',
        topics: [
          {
            id: 1,
            title: 'Plantilla de Documentación Heredable',
            description: 'Estructura estándar de documentación que nuevos flujos puedan heredar desde el primer día, evitando reconstruir procesos desde cero.',
            tag: 'DesignOps'
          },
          {
            id: 2,
            title: 'Estándar de Seguridad Financiera',
            description: 'Patrones de interfaz y seguridad financiera reutilizables nacidos de la resolución de fricciones con reguladores y socios.',
            tag: 'Fintech y Seguridad'
          },
          {
            id: 3,
            title: 'Escalabilidad en el E-commerce',
            description: 'Reaprovechar estos aprendizajes en todos los demás flujos del producto e-commerce de Nissan más allá del financiamiento.',
            tag: 'Escalabilidade UX'
          },
          {
            id: 4,
            title: 'Motor de Personalización por Estilo de Vida',
            description: 'Algoritmos de recomendación inteligente para sugerir versiones y accesorios según el perfil del usuario (urbano, familiar, off-road).',
            tag: 'UX Inteligente'
          },
          {
            id: 5,
            title: 'Seguimiento del Pedido de Fábrica en Tempo Real',
            description: 'Conexión con el rastreo de fabricación para dar visibilidad en tiempo real desde la producción hasta la entrega final.',
            tag: 'Seguimiento Ops'
          }
        ]
      }
    }
  },
{
    id: 'logcp',
    slug: 'logcp',
    client: 'Log Commercial Properties',
    category: 'Executive Dashboard & Data Viz',
    year: '2025',
    role: 'UI Designer (com UX Researcher, Design Lead & PM)',
    metricsHighlight: {
      pt: '+80% Substituição',
      en: '+80% Replaced',
      es: '+80% Reemplazados'
    },
    metricLabel: {
      pt: 'Relatórios estáticos substituídos por um único dashboard executivo',
      en: 'Static reports replaced by a single integrated dashboard',
      es: 'Informes estáticos reemplazados por un panel ejecutivo integrado'
    },
    coverImage: logcpCover,
    pullQuote: {
      pt: 'O gap não era a falta de dados. Era não ter um único lugar para enxergá-los.',
      en: 'The gap wasn’t the data. It was not having one place to see it.',
      es: 'La brecha no eran los datos. Era no tener un solo lugar para verlos.'
    },
    tags: ['Executive Dashboard', 'Data Visualization', 'UI Kit', 'Interactive Prototyping', 'SharePoint/SAP/CRM', 'Financial Analytics'],
    title: {
      pt: 'LogCP Clear Sight: Unificando dados de 3 sistemas em um dashboard executivo',
      en: 'LogCP Clear Sight: Unifying financial data from 3 systems into an executive dashboard',
      es: 'LogCP Clear Sight: Unificando datos de 3 sistemas en un panel ejecutivo'
    },
    subtitle: {
      pt: 'Consolidação de dados dispersos do SharePoint, SAP e CRM em um dashboard executivo para o Diretor Financeiro & RI e liderança estratégica.',
      en: 'Consolidating fragmented data from SharePoint, SAP, and CRM into an executive dashboard for the Finance & IR Director and leadership.',
      es: 'Consolidación de datos dispersos de SharePoint, SAP y CRM en un panel ejecutivo para la Dirección Financiera y RI.'
    },
    impactSummary: {
      pt: 'Atuando como UI Designer ao lado de UX Researcher, Design Lead e PM de fevereiro a maio de 2025, transformei dados financeiros dispersos em um dashboard executivo de 4 telas ("Clear Sight"). O projeto substituiu mais de 80% dos relatórios estáticos manuais e entregou um UI Kit padronizado para implementação direta pelo time do cliente.',
      en: 'As a UI Designer alongside a UX Researcher, Design Lead, and PM from February to May 2025, turned scattered financial data into a 4-screen executive dashboard ("Clear Sight"), replacing +80% of manual static reports and delivering a dedicated UI kit for client-side implementation.',
      es: 'Como Diseñador UI junto a UX Researcher, Design Lead y PM (Feb - May 2025), transformé datos financieros dispersos en un panel ejecutivo de 4 pantallas ("Clear Sight"), reemplazando más del 80% de los informes estáticos y entregando un UI Kit dedicado.'
    },
    challenge: {
      pt: {
        title: 'O Desafio',
        description: `Os dados financeiros da LogCP existiam, mas estavam espalhados entre SharePoint, SAP e CRM. Executivos e diretores dependiam de um conjunto de relatórios estáticos montados manualmente que precisavam ser refeitos do zero a cada conferência de KPI.

A pesquisa com stakeholders identificou quais números realmente importavam para a tomada de decisão estratégica — como disponibilidade financeira e reciclagem de ativos — e confirmou que ninguém possuía um ponto centralizado para visualizá-los em conjunto.

Para o Diretor Financeiro & RI que toma decisões de alto impacto, o custo real era ter decisões estratégicas aguardando alguém consolidar 3 sistemas desconectados primeiro.`,
        keyPoints: [
          'Relatórios viviam em formatos estáticos montados manualmente a cada checagem de KPI.',
          'Dados dispersos em 3 sistemas desconectados (SharePoint, SAP e CRM) sem fonte única de verdade.',
          'Tempo de planejamento estratégico da liderança consumido reunindo dados em vez de decidir.'
        ]
      },
      en: {
        title: 'The Challenge',
        description: `Financial data existed at LogCP, but was scattered across SharePoint, SAP, and CRM. Executives depended on a handful of static reports that had to be manually rebuilt every time a KPI needed checking.

Stakeholder research surfaced which numbers actually mattered for strategic decisions — financial availability and asset recycling among them — and confirmed nobody had a single place to see them together.

For a Finance & IR Director making high-level calls, the real cost was decisions waiting on someone piecing 3 systems together first.`,
        keyPoints: [
          'Reports lived in static, manually assembled formats requiring continuous reconstruction.',
          'Data lived across 3 disconnected systems (SharePoint, SAP, CRM) with no single source of truth.',
          'Leadership strategic planning time went to gathering information, not deciding on it.'
        ]
      },
      es: {
        title: 'El Desafío',
        description: `Los datos financieros existían, pero estaban dispersos entre SharePoint, SAP y CRM. Los ejecutivos dependían de informes estáticos que debían reconstruirse manualmente cada vez que se revisaba un KPI.

La investigación con stakeholders identificó qué números importaban realmente —disponibilidad financiera y reciclaje de activos— y confirmó la ausencia de un punto centralizado.

Para el Director Financiero y de RI, el costo real eran decisiones estratégicas esperando a que alguien uniera 3 sistemas desconectados.`,
        keyPoints: [
          'Informes en formatos estáticos reconstruidos manualmente para cada revisión de KPI.',
          'Datos en 3 sistemas desconectados (SharePoint, SAP, CRM) sin una fuente única.',
          'Tiempo de la directiva consumido en consolidar información en lugar de decidir.'
        ]
      }
    },
    solution: {
      pt: {
        title: 'A Solução',
        description: `Trabalhamos em estreita colaboração com o UX Researcher para mapear quais métricas orientavam as decisões estratégicas antes de desenhar a primeira tela, garantindo que o dashboard fosse construído em torno do que a liderança precisava ver, e não do que os sistemas de origem facilitavam exibir.

Projetamos as 4 telas principais do dashboard com foco em agilidade visual e clareza, utilizando componentes reutilizáveis, animações e micro-interações fluidas. Validamos fluxos por meio de protótipos interativos com os stakeholders e estruturamos um UI Kit dedicado para assegurar consistência antes do handoff completo de especificações para o time interno do cliente.`,
        highlights: [
          {
            title: 'Pesquisa com Stakeholders & Mapeamento de KPIs',
            desc: 'Identificação prévia das métricas decisivas (disponibilidade financeira e reciclagem de ativos) antes do desenho visual.'
          },
          {
            title: '4 Telas Principais Focadas em Agilidade',
            desc: 'Design modular com componentes reutilizáveis e visualizações sob medida para cada indicador estratégico.'
          },
          {
            title: 'Prototipagem Interativa & Validação Rápida',
            desc: 'Fluxos testados diretamente com diretores e executivos para ajustes ágeis antes do design final.'
          },
          {
            title: 'UI Kit Completo & Handoff Sem Fricção',
            desc: 'Padronização visual de gráficos e cartões de dados para implementação autônoma pelo time do cliente.'
          }
        ]
      },
      en: {
        title: 'The Solution',
        description: `Worked with the UX Researcher to identify which metrics actually drove strategic decisions before designing a single screen, ensuring the dashboard was built around leadership needs rather than legacy system convenience.

Designed the dashboard's 4 main screens using reusable components and subtle animation for speed and clarity. Built interactive prototypes to validate flows with stakeholders early, created a comprehensive UI kit to standardize metrics presentation, and delivered full specifications for autonomous implementation by the client's team.`,
        highlights: [
          {
            title: 'Stakeholder Research, Then KPIs',
            desc: 'Identified critical decision drivers (financial availability, asset recycling) before screen design.'
          },
          {
            title: '4 Screens Built for Velocity & Clarity',
            desc: 'Modular screens with tailored data visualizations for each strategic financial metric.'
          },
          {
            title: 'Interactive Prototyping & Early Validation',
            desc: 'Tested end-to-end flows with C-level stakeholders, catching adjustments cheaply.'
          },
          {
            title: 'Dedicated UI Kit & Autonomous Handoff',
            desc: 'Standardized charts, typography, and cards for seamless implementation by the client\'s team.'
          }
        ]
      },
      es: {
        title: 'La Solución',
        description: `Investigación previa con stakeholders para definir qué métricas guiaban las decisiones antes de diseñar pantallas. Diseñamos 4 pantallas principales modulares, un UI Kit completo y prototipos interactivos validados directamente con la dirección.`,
        highlights: [
          {
            title: 'Investigación con Stakeholders y KPIs',
            desc: 'Identificación de métricas clave antes de iniciar el diseño visual.'
          },
          {
            title: '4 Pantallas Estratégicas para Alta Velocidad',
            desc: 'Diseño modular adaptado a las métricas ejecutivas más críticas.'
          },
          {
            title: 'Prototipado Interactivo y Validación Temprana',
            desc: 'Pruebas directas con la directiva para validar flujos con rapidez.'
          },
          {
            title: 'UI Kit Dedicado y Handoff Autónomo',
            desc: 'Estandarización de gráficos y métricas para implementación directa del cliente.'
          }
        ]
      }
    },
    results: {
      pt: {
        title: 'Resultados & Impacto',
        stats: [
          {
            label: 'Substituição de Relatórios',
            value: '+80%',
            desc: 'Mais de 80% dos relatórios estáticos manuais substituídos pelo dashboard Clear Sight.'
          },
          {
            label: 'Telas Estratégicas',
            value: '4 Telas',
            desc: 'Visualizações completas mapeadas para KPIs críticos e disponibilidade financeira.'
          },
          {
            label: 'Fontes Integradas',
            value: '3 Sistemas',
            desc: 'Consolidação de dados do SharePoint, SAP e CRM em uma visão unificada.'
          }
        ],
        summary: 'Mais de 80% dos relatórios estáticos foram substituídos pelo dashboard Clear Sight. O Diretor Financeiro & RI e o time de liderança conquistaram acesso em tempo real, reduzindo drasticamente o tempo necessário para reunir dados antes de iniciar reuniões estratégicas.'
      },
      en: {
        title: 'Results & Impact',
        stats: [
          {
            label: 'Static Reports Replaced',
            value: '+80%',
            desc: 'Over 80% of manual static reports replaced by the single Clear Sight dashboard.'
          },
          {
            label: 'Core Screens Shipped',
            value: '4 Screens',
            desc: 'Tailored visualizations mapped to strategic KPIs and financial availability.'
          },
          {
            label: 'Systems Consolidated',
            value: '3 Sources',
            desc: 'Consolidated SharePoint, SAP, and CRM into one unified source of truth.'
          }
        ],
        summary: 'Over 80% of static reports were replaced by the single Clear Sight dashboard. The Finance & IR Director and leadership team gained real-time access, cutting time spent assembling data before strategic decisions could start.'
      },
      es: {
        title: 'Resultados e Impacto',
        stats: [
          {
            label: 'Informes Reemplazados',
            value: '+80%',
            desc: 'Más del 80% de informes estáticos reemplazados por el panel Clear Sight.'
          },
          {
            label: 'Pantallas Entregadas',
            value: '4 Pantallas',
            desc: 'Vistas ejecutivas adaptadas a KPIs críticos y disponibilidad financiera.'
          },
          {
            label: 'Sistemas Unificados',
            value: '3 Fuentes',
            desc: 'Consolidación de SharePoint, SAP y CRM en una sola visión central.'
          }
        ],
        summary: 'Más del 80% de los informes estáticos fueron reemplazados por el panel Clear Sight. La Dirección Financiera y de RI obtuvo acceso en tiempo real a los KPIs estratégicos.'
      }
    },
    futureVision: {
      pt: {
        title: 'Visão de Futuro & Aprendizados',
        subtitle: 'Princípios consolidados para produtos de visualização executiva e design corporativo:',
        topics: [
          {
            id: 1,
            title: 'Design Orientado a Decisões Estratégicas',
            description: 'Dashboards executivos devem ser estruturados a partir das decisões que a liderança precisa tomar, e não da facilidade de extração dos bancos de dados legados.',
            tag: 'Data Strategy'
          },
          {
            id: 2,
            title: 'UI Kit em Engajamentos Ágeis',
            description: 'Mesmo em projetos pontuais de curta duração, entregar um UI Kit padronizado garante que a consistência visual se mantenha viva após o encerramento do projeto.',
            tag: 'DesignOps'
          },
          {
            id: 3,
            title: 'Prototipagem como Redutor de Risco',
            description: 'Validar protótipos interativos diretamente com a diretoria financeira reduz riscos e elimina retrabalho antes de qualquer esforço de desenvolvimento.',
            tag: 'Prototyping'
          }
        ]
      },
      en: {
        title: 'Future Vision & Key Learnings',
        subtitle: 'Core principles established for executive data visualization and product delivery:',
        topics: [
          {
            id: 1,
            title: 'Decision-Driven Dashboard Architecture',
            description: 'Executive dashboards must be architected around leadership decisions rather than legacy database export constraints.',
            tag: 'Data Strategy'
          },
          {
            id: 2,
            title: 'UI Kits on Fast-Track Engagements',
            description: 'Even in short-term punctual engagements, shipping a UI kit ensures visual consistency survives beyond initial delivery.',
            tag: 'DesignOps'
          },
          {
            id: 3,
            title: 'Prototyping as a Risk-Reduction Tool',
            description: 'Testing interactive prototypes directly with financial executives eliminates ambiguity prior to engineering implementation.',
            tag: 'Prototyping'
          }
        ]
      },
      es: {
        title: 'Visión de Futuro y Aprendizajes',
        subtitle: 'Principios consolidados para paneles ejecutivos y visualización de datos corporativos:',
        topics: [
          {
            id: 1,
            title: 'Diseño Orientado a Decisiones',
            description: 'Los paneles ejecutivos deben crearse en función de las decisiones de la dirección y no de las limitaciones de las bases de datos.',
            tag: 'Data Strategy'
          },
          {
            id: 2,
            title: 'UI Kit en Proyectos Puntuais',
            description: 'Incluso en plazos cortos, entregar un UI Kit estructurado garantiza consistencia a largo plazo para el cliente.',
            tag: 'DesignOps'
          },
          {
            id: 3,
            title: 'Prototipado para Reducción de Riesgos',
            description: 'Validar prototipos interactivos con la dirección financiera elimina reprocesos antes del desarrollo.',
            tag: 'Prototyping'
          }
        ]
      }
    }
  },
{
    id: 'julius-baer',
    slug: 'julius-baer',
    client: 'Julius Bär Brazil',
    category: 'Wealth Management & Zafire Design System',
    year: '2024 - 2025',
    role: 'UX & UI Designer (via BRQ)',
    metricsHighlight: {
      pt: '66% de Redução',
      en: '66% Reduction',
      es: '66% de Reducción'
    },
    metricLabel: {
      pt: 'Redução no tempo de entrega de novas telas (Nov 2024 ➔ Fev 2025)',
      en: 'Reduction in delivery time for new screens (Nov 2024 ➔ Feb 2025)',
      es: 'Reducción en el tiempo de entrega de nuevas pantallas (Nov 2024 ➔ Feb 2025)'
    },
    coverImage: juliusBaerCover,
    pullQuote: {
      pt: 'O sistema não precisava de mais um componente. Precisava de pessoas que soubessem quando não construir um.',
      en: 'The system didn’t need another component. It needed people who knew when not to build one.',
      es: 'El sistema no necesitaba otro componente. Necesitaba personas que supieran cuándo no construir uno.'
    },
    tags: ['Private Banking', 'Zafire Design System', 'Design Governance', 'Figma Variables', 'DesignOps'],
    title: {
      pt: 'Julius Bär Brazil: Governança de design e redução de 66% no tempo de entrega',
      en: 'Julius Bär Brazil: Design governance and 66% reduction in delivery time',
      es: 'Julius Bär Brazil: Gobernanza de diseño y reducción del 66% en el tiempo de entrega'
    },
    subtitle: {
      pt: 'Atuando como UX e UI Designer via BRQ na plataforma global de riqueza do Julius Bär, transformando o papel do design de "perfumaria" cosmética em governança estrutural com impacto direto em engenharia e produto.',
      en: 'As a UX and UI Designer working through BRQ for Julius Bär’s global wealth management platform, shifting design from cosmetic "perfumaria" into structural governance with direct cross-functional impact.',
      es: 'Como UX y UI Designer vía BRQ en la plataforma global de wealth management de Julius Bär, transformando el rol del diseño de "perfumería" cosmética a gobernanza estructural de alto impacto.'
    },
    impactSummary: {
      pt: 'Como UX e UI Designer via BRQ na plataforma global de gestão de patrimônio do Julius Bär, apoiei a operação brasileira em serviços de investimentos internacionais. O desafio não era a falta de um design system, mas dar ao design um lugar na mesa de decisões.',
      en: 'As a UX and UI Designer working through BRQ for Julius Bär’s global wealth management platform, supporting the bank’s Brazilian operation for cross-border investment services. The challenge wasn’t a missing design system, but giving design a seat at the table.',
      es: 'Como UX y UI Designer vía BRQ en la plataforma de wealth management de Julius Bär, apoyando la operação brasileira. El desafío no era la falta de un DS, sino darle al diseño asiento en la mesa de decisiones.'
    },
    challenge: {
      pt: {
        title: 'O Desafio',
        description: `Como UX e UI Designer contratado via BRQ, juntei-me ao time da plataforma global de gestão de patrimônio do Julius Bär, apoiei a operação brasileira em serviços de investimentos internacionais.

O verdadeiro desafio não era a falta de um design system. Era o fato de o design não ter assento na mesa. O design era tratado como "perfumaria" — uma camada cosmética aplicada após as decisões relevantes já terem sido tomadas. Esse mindset trazia custos reais:

• O desenvolvimento continuava recriando os mesmos padrões de interface do zero.
• As decisões de produto avançavam sem considerar a consistência de interação ou a viabilidade técnica.
• Design e engenharia não tinham um vocabulário compartilhado para resolver atritos rapidamente.
• Ninguém na organização estava acostumado a perguntar se um novo padrão era realmente necessário.

O pedido do Stepper:
Um desenvolvedor precisava de um stepper horizontal, mas o nosso design system só definia o componente na vertical. Entregar uma versão pontual seria a resposta rápida. Em vez disso, desaceleramos para fazer uma pergunta de governança: o padrão poderia ser recomposto a partir de átomos já usados em outros lugares, ou realmente justificava uma nova adição ao sistema?

Esse único pedido capturou todo o desafio — o trabalho não era apenas desenhar, era ensinar a organização que essa pergunta existia.`,
        keyPoints: [
          'Design tratado como "perfumaria" cosmética sem cadeira nas decisões estratégicas.',
          'Engenharia recriando os mesmos padrões de interface continuamente do zero.',
          'O pedido do Stepper: ensinar a organização a perguntar "recompor vs. criar" antes de adicionar componentes.'
        ]
      },
      en: {
        title: 'The Challenge',
        description: `As a UX and UI Designer working through BRQ, I joined the team behind Julius Bär's global wealth management platform, supporting the bank's Brazilian operation for cross-border investment services.

The real challenge wasn't a missing design system. It was that design had no seat at the table. Design was treated as "perfumaria" — a cosmetic layer applied after the decisions that mattered were already made. That mindset had real costs, not just aesthetic ones:

• Development kept rebuilding the same interface patterns from scratch.
• Product decisions moved forward without accounting for interaction consistency or technical feasibility.
• Design and engineering had no shared vocabulary to resolve friction quickly.
• Nobody in the organization was used to asking whether a new pattern was actually necessary.

The stepper request:
A developer needed a horizontal stepper, but our design system only defined the component vertically. Shipping a one-off version would have been the fast answer. Instead, we had to slow down and ask a governance question: could the pattern be recomposed from atoms already used elsewhere, or did it genuinely justify a new addition to the system?

That single request captured the whole challenge — the job wasn't just to design, it was to teach the organization that this question existed.`,
        keyPoints: [
          'Design treated as cosmetic "perfumaria" without a seat at the decision table.',
          'Development repeatedly rebuilding identical interface patterns from scratch.',
          'The Stepper Request: teaching the organization to ask "recompose vs. build" before creating new components.'
        ]
      },
      es: {
        title: 'El Desafío',
        description: `Como UX y UI Designer vía BRQ, me uní al equipo de la plataforma global de wealth management de Julius Bär, apoyando la operación brasileña para servicios de inversión internacional.

El verdadero desafío no era la falta de un design system. Era que el diseño no tenía asiento en la mesa. El diseño se trataba como "perfumería" — una capa cosmética aplicada tras tomar las decisiones importantes. Ese enfoque tenía costos reales:

• Desarrollo reconstruía los mismos patrones de interfaz desde cero.
• Decisiones de producto avanzaban sin considerar consistencia técnica o de interacción.
• Diseño e ingeniería carecían de un vocabulario compartido para resolver fricciones rápidamente.
• Nadie en la organización solía preguntar si un nuevo patrón era realmente necesario.

El caso del Stepper:
Un desarrollador pidió un stepper horizontal, pero el design system solo lo definía verticalmente. Hacer una excepción rápida era la respuesta fácil. En su lugar, desaceleramos para hacer una pregunta de gobernanza: ¿podía recomponerse el patrón con átomos existentes o justificaba una nueva adición al sistema?

Esa solicitud capturó todo el desafío: el trabajo no era solo diseñar, sino enseñar a la organización que esa pregunta existía.`,
        keyPoints: [
          'Diseño visto como "perfumería" cosmética sin voz en las decisiones iniciales.',
          'Desarrollo reconstruyendo los mismos patrones de interfaz desde cero.',
          'El caso del Stepper: enseñar a preguntar "recomponer vs. crear" antes de añadir componentes.'
        ]
      }
    },
    solution: {
      pt: {
        title: 'A Solução Implementada',
        description: 'Implementamos rituais recorrentes, governança regional e ativos de design com documentação técnica detalhada que integraram o design no centro das decisões:',
        highlights: [
          {
            title: 'Critiques e Handoffs Estruturados',
            desc: 'Introduzidos como rituais recorrentes, dando ao time um ponto de checagem compartilhado para capturar inconsistências antes do desenvolvimento.'
          },
          {
            title: 'Zafire Localizado (Camada Brasil)',
            desc: 'Construção da camada brasileira usando variáveis locais do Figma para manter os componentes consistentes com o tema e escaláveis.'
          },
          {
            title: 'Componentes com Documentação Técnica',
            desc: 'Componentes reutilizáveis (incluindo data grids e tabelas dinâmicas) acompanhados de especificações técnicas detalhadas para engenharia.'
          },
          {
            title: 'Governança com o Time Global',
            desc: 'Coordenação direta com a equipe do Zafire na Alemanha, garantindo que os componentes locais permanecessem compatíveis com o sistema global.'
          },
          {
            title: 'Decisões de Governança Caso a Caso',
            desc: 'Uso de pedidos como o do stepper para decidir com o time quando um novo componente era realmente justificado versus recompor um padrão existente.'
          }
        ]
      },
      en: {
        title: 'The Implemented Solution',
        description: 'We introduced structured rituals, regional governance, and design assets with detailed technical documentation that embedded design into cross-functional decisions:',
        highlights: [
          {
            title: 'Design Critiques & Structured Handoffs',
            desc: 'Introduced as recurring rituals, giving the team a shared checkpoint to catch inconsistency before it reached development.'
          },
          {
            title: 'Zafire, Localized',
            desc: 'Built the Brazilian layer of Julius Bär\'s global design system using Figma\'s local variables, keeping components theme-consistent and scalable.'
          },
          {
            title: 'Components with Documentation, Not Just Files',
            desc: 'Designed reusable components — including dynamic data grids and tables — paired with technical specs detailed enough for engineers.'
          },
          {
            title: 'Governance with Germany',
            desc: 'Coordinated directly with the global design system team in Germany, managing handoff so local components stayed compatible with the broader system.'
          },
          {
            title: 'Case-by-Case Calls',
            desc: 'Used requests like the stepper as teaching moments: deciding together when a new component was justified versus recomposing existing patterns.'
          }
        ]
      },
      es: {
        title: 'La Solución Implementada',
        description: 'Implementamos rituales estructurados, gobernanza regional y activos de diseño con documentación técnica detalhada:',
        highlights: [
          {
            title: 'Críticas de Diseño y Handoffs Estructurados',
            desc: 'Puntos de control recurrentes para detectar inconsistencias antes del desarrollo.'
          },
          {
            title: 'Zafire Localizado (Capa Brasil)',
            desc: 'Construcción de la capa local usando variables de Figma para temas escalables.'
          },
          {
            title: 'Componentes con Especificaciones Técnicas',
            desc: 'Componentes reutilizables (tablas dinámicas y data grids) acompañados de especificaciones para ingeniería.'
          },
          {
            title: 'Gobernanza con el Equipo Global (Alemania)',
            desc: 'Coordinación directa con el equipo en Alemania para mantener compatibilidad con el sistema global.'
          },
          {
            title: 'Decisiones de Gobernanza Caso a Caso',
            desc: 'Uso de casos como el del stepper para decidir con el equipo cuándo recomponer versus crear nuevos componentes.'
          }
        ]
      }
    },
    results: {
      pt: {
        title: 'Resultados e Impacto Estratégico',
        stats: [
          { value: '66%', label: 'Redução no Tempo de Entrega', desc: 'Redução no tempo de entrega para novas telas entre Novembro de 2024 e Fevereiro de 2025.' },
          { value: '3', label: 'Fluxos End-to-End', desc: 'Fluxos inteiros sob responsabilidade direta, além de contribuições em diversos outros na plataforma.' },
          { value: '15', label: 'Pessoas Impactadas', desc: 'Time multidisciplinar (2 designers, 9 engenheiros, 5 PMs e o Diretor de Tecnologia como principal beneficiado).' },
          { value: '100%', label: 'Mudança Cultural', desc: 'Design puxado para as conversas de produto e engenharia antes do congelamento de decisões.' }
        ],
        summary: 'O design deixou de ser tratado como um acabamento estético. Produto e engenharia passaram a incluir o design nas conversas mais cedo — antes que as decisões já tivessem sido seladas, o que foi a verdadeira pré-condição para que a redução de 66% no tempo de entrega se tornasse possível.'
      },
      en: {
        title: 'Results & Strategic Impact',
        stats: [
          { value: '66%', label: 'Delivery Time Reduction', desc: 'Reduction in delivery time for new screens between Nov 2024 and Feb 2025.' },
          { value: '3', label: 'End-to-End Flows Owned', desc: 'Owned 3 flows end-to-end, plus contributions to several more across the platform.' },
          { value: '15', label: 'Team Members Impacted', desc: 'Cross-functional team (2 designers, 9 engineers, 5 PMs, 1 Director of Tech cited as main beneficiary).' },
          { value: '100%', label: 'Strategic Shift', desc: 'Design pulled into product and engineering conversations before decisions locked.' }
        ],
        summary: 'Design stopped being treated as a finishing touch. Product and engineering started pulling design into conversations earlier — before decisions were already locked, which is the actual precondition for the 66% number to have been possible at all.'
      },
      es: {
        title: 'Resultados e Impacto Estratégico',
        stats: [
          { value: '66%', label: 'Reducción del Tiempo de Entrega', desc: 'Reducción en el tiempo de entrega de nuevas pantallas entre Nov de 2024 y Feb de 2025.' },
          { value: '3', label: 'Flujos End-to-End', desc: 'Flujos completos bajo responsabilidad directa, más aportaciones a varios otros.' },
          { value: '15', label: 'Personas Impactadas', desc: 'Equipo multidisciplinario (2 diseñadores, 9 ingenieros, 5 PMs y el Director de Tecnología).' },
          { value: '100%', label: 'Cambio Cultural', desc: 'Diseño integrado tempranamente en conversaciones antes de congelar decisiones.' }
        ],
        summary: 'El diseño dejó de tratarse como un acabado final. Producto e ingeniería comenzaron a incluir al diseño temprano en las conversaciones, la condición previa real para lograr el 66% de mayor velocidad.'
      }
    },
    futureVision: {
      pt: {
        title: 'Visão de Futuro & Aprendizados de Governança',
        subtitle: 'O Julius Bär encerrou a operação no Brasil durante este ciclo. A experiência validou princípios fundamentais levados para qualquer projeto de Design System:',
        topics: [
          {
            id: 1,
            title: 'Maturidade além da documentação',
            description: 'A maturidade de design não é construída apenas com documentação. É construída transformando hábitos de decisão no time.',
            tag: 'DesignOps'
          },
          {
            id: 2,
            title: 'A Pergunta de Governança',
            description: 'Ensinar as pessoas a perguntarem sistematicamente: "este caso merece um novo componente, ou o sistema já possui a resposta?"',
            tag: 'Design Governance'
          },
          {
            id: 3,
            title: 'Educação desde o dia zero',
            description: 'Esse hábito só se fixa se a educação cultural começar cedo o suficiente para sobreviver além da linha do tempo de qualquer projeto individual.',
            tag: 'Cultural Habit'
          }
        ]
      },
      en: {
        title: 'Future Vision & Governance Principles',
        subtitle: 'This engagement ended when Julius Bär closed its Brazil operation. The project validated principles carried into every design system engagement since:',
        topics: [
          {
            id: 1,
            title: 'Maturity Beyond Documentation',
            description: 'Design maturity isn’t built through documentation alone. It’s built by transforming decision-making habits across the team.',
            tag: 'DesignOps'
          },
          {
            id: 2,
            title: 'The Governance Question',
            description: 'Teaching people to systematically ask: "does this deserve a new component, or does the system already have the answer?"',
            tag: 'Design Governance'
          },
          {
            id: 3,
            title: 'Early Cultural Education',
            description: 'That habit only sticks if the education starts early enough to survive beyond any single project’s timeline.',
            tag: 'Cultural Habit'
          }
        ]
      },
      es: {
        title: 'Visión de Futuro y Principios de Gobernanza',
        subtitle: 'Julius Bär cerró su operación en Brasil durante este ciclo. La experiencia validó principios fundamentales aplicados desde entonces:',
        topics: [
          {
            id: 1,
            title: 'Madurez más allá de Documentos',
            description: 'La madurez del diseño no se construye solo con documentación, sino transformando hábitos de decisión en el equipo.',
            tag: 'DesignOps'
          },
          {
            id: 2,
            title: 'La Pregunta de Gobernanza',
            description: 'Enseñar a las personas a preguntar sistemáticamente: "¿este caso merece un nuevo componente o el sistema ya tiene la respuesta?"',
            tag: 'Gobernanza de Diseño'
          },
          {
            id: 3,
            title: 'Educación Cultural Temprana',
            description: 'Ese hábito solo perdura si la educación cultural comienza lo suficientemente temprano para sobrevivir al proyecto.',
            tag: 'Hábito Cultural'
          }
        ]
      }
    }
  }
];

export const NDA_CASE_SLUGS = ['hilton', 'renault', 'abinbev', 'nissan'];

export const PUBLIC_CASES: CaseStudy[] = [
  CASE_STUDIES.find((c) => c.slug === 'julius-baer')!,
  CASE_STUDIES.find((c) => c.slug === 'logcp')!,
  CASE_STUDIES.find((c) => c.slug === 'genesis-latam')!,
  CASE_STUDIES.find((c) => c.slug === 'genesis-us')!
].filter(Boolean);

export const NDA_CASES: CaseStudy[] = [
  CASE_STUDIES.find((c) => c.slug === 'hilton')!,
  CASE_STUDIES.find((c) => c.slug === 'renault')!,
  CASE_STUDIES.find((c) => c.slug === 'abinbev')!,
  CASE_STUDIES.find((c) => c.slug === 'nissan')!
].filter(Boolean);

