import { CaseStudy } from '../types';
import hiltonCover from '../assets/images/hilton_case_cover_1786018890676.jpg';
import abinbevCover from '../assets/images/abinbev_case_cover_1786018909060.jpg';
import nissanCover from '../assets/images/nissan_case_cover_1786018927463.jpg';
import juliusBaerCover from '../assets/images/julius_baer_cover_1786018941597.jpg';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'hilton',
    slug: 'hilton',
    client: 'Hilton Hotels & Resorts',
    category: 'Design System & DesignOps',
    year: '2025 - Presente',
    role: 'Product Designer (Property & Prism Design System via Globant)',
    metricsHighlight: '5d ➔ 4h',
    metricLabel: 'Redução no tempo de entrega de paletas de cores',
    coverImage: hiltonCover,
    pullQuote: {
      pt: 'Em 8.000 hotéis, um processo manual de cinco dias não é um atraso. É uma fila que nunca esvazia.',
      en: 'At 8,000 hotels, a five-day manual process isn\'t a delay. It\'s a queue that never empties.',
      es: 'En 8.000 hoteles, un proceso manual de cinco días no es un retraso. Es una cola que nunca se vacía.'
    },
    tags: ['Prism Design System', 'Collection Level Theming', 'Figma Tokens', 'Figma Plugin', 'Property UX', 'Escala Global'],
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
    id: 'abinbev',
    slug: 'abinbev',
    client: 'AB InBev',
    category: 'Enterprise Fintech & B2B',
    year: '2025',
    role: 'UX/UI Designer & Product Specialist (PowerApps & Power BI)',
    metricsHighlight: '30% de Redução',
    metricLabel: 'Redução de custos por eficiência operacional',
    coverImage: abinbevCover,
    pullQuote: {
      pt: 'Uma fórmula de planilha editada por engano não quebra apenas uma célula. Quebra uma decisão na cadeia de suprimentos três níveis acima.',
      en: 'A spreadsheet formula edited by mistake doesn’t just break a cell. It breaks a supply chain decision three levels up.',
      es: 'Una fórmula de hoja de cálculo editada por error no solo rompe una celda. Rompe una decisión en la cadena de suministro tres niveles más arriba.'
    },
    tags: ['PowerApps', 'Power BI', 'Power Fx', 'Operações LATAM', 'Fintech B2B', 'Cost Optimization'],
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
    metricsHighlight: '+23% de Receita',
    metricLabel: 'Aumento de receita no canal digital (Mar - Jun 2025)',
    coverImage: nissanCover,
    pullQuote: {
      pt: 'Ninguém hesita em comprar uma camiseta online. Um carro é um tipo diferente de confiança.',
      en: 'Nobody hesitates buying a t-shirt online. A car is a different kind of trust.',
      es: 'Nadie duda en comprar una camiseta en línea. Un carro es un tipo diferente de confianza.'
    },
    tags: ['E-commerce Automotivo', 'Financing UX', 'System Mapping', 'Nissan Replay & CDC', 'Technical Spec', 'Design System'],
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
    id: 'julius-baer',
    slug: 'julius-baer',
    client: 'Julius Bär Brazil',
    category: 'Wealth Management & Zafire Design System',
    year: '2024 - 2025',
    role: 'UX & UI Designer (via BRQ)',
    metricsHighlight: '66% de Redução',
    metricLabel: 'Redução no tempo de entrega de novas telas (Nov 2024 ➔ Fev 2025)',
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
