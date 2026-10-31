---
name: Leo Trevizani — Portfolio
description: Portfolio de Leo Trevizani, Full Stack Design Engineer — casos de design system e design operations para Hilton, AB InBev, Nissan e Julius Baer.
colors:
  dark-green: "#202923"
  vibrant-green: "#34A853"
  pure-black: "#0D0D0D"
  dark-gray: "#282D29"
  soft-green: "#D6EEDD"
  canvas-white: "#F5FFF8"
  absolute-white: "#FFFFFF"
  text-main: "#282D29"
  text-heading: "#0D0D0D"
  text-muted: "#5C6B60"
typography:
  display:
    fontFamily: "Instrument Sans, Inter, Helvetica Neue, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.1rem + 6.4vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Instrument Sans, Inter, Helvetica Neue, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.2rem + 4.6vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Instrument Sans, Inter, Helvetica Neue, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.35rem + 2.1vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Instrument Sans, Inter, Helvetica Neue, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.005em"
  label:
    fontFamily: "Instrument Sans, Inter, Helvetica Neue, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0em"
rounded:
  cards: "16px"
  inputs: "12px"
  buttons: "9999px"
  tags: "9999px"
spacing:
  section-gap: "64px"
components:
  button-primary:
    backgroundColor: "{colors.vibrant-green}"
    textColor: "{colors.dark-green}"
    rounded: "{rounded.buttons}"
    padding: "16px 32px"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.dark-green}"
    rounded: "{rounded.buttons}"
    padding: "12px 24px"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.canvas-white}"
    rounded: "{rounded.cards}"
    padding: "32px"
  input:
    backgroundColor: "{colors.absolute-white}"
    rounded: "{rounded.inputs}"
    typography: "{typography.body}"
---

# Design System: Leo Trevizani — Portfolio

## Overview

**Creative North Star: "O verde premium como âncora"**

Uma direção de arte sofisticada, priorizando amplo respiro, alinhamento estruturado e uma paleta de verdes elegantes. A marca se comunica com uma voz elegante, limpa e estruturada. O canvas principal é um branco com um levíssimo toque de verde (#F5FFF8), criando uma atmosfera premium que foge da esterilidade do branco puro. O verde escuro e sóbrio (#202923) atua como a base de ancoragem para elementos pesados, navegação e botões secundários, enquanto o verde vibrante (#34A853) é reservado para os pontos focais de ação (CTAs).

A tipografia Instrument Sans assume o controle total. Ao invés de "gritar" com pesos extremos, ela estabelece uma hierarquia clara através de pesos equilibrados (Regular a Bold) e espaçamentos neutros. O sistema visual respira: o uso generoso de espaços em branco (whitespace) previne a poluição visual, e a geometria contrasta botões em formato de pílula (fluidez de ação) com cards estruturados de cantos suavemente arredondados (16px).

**Key Characteristics:**
- Família tipográfica única: Instrument Sans (400–700), com Inter e Helvetica Neue como fallback.
- Escala fixa com clamps fluidos apenas nos passos de display e heading.
- Uma cor de ação (#34A853), usada com parcimônia (≤10% da superfície).
- Espaçamento baseado em steps de 4px, com gap de seção de 64px.
- Sem gradientes em texto, sem side-stripes, sem ilustrações vetoriais genéricas.

## Colors

Paleta restrita de verdes elegantes sobre um canvas levemente esverdeado. O verde vibrante é a única cor de ação e nunca é usado em grandes blocos.

### Primary
- **Dark Green Base** (#202923 / `--color-dark-green`): âncora da marca. Fundos escuros, navegação, botões secundários e áreas de grande peso visual. Substitui o preto puro em grandes blocos.
- **Vibrant Green** (#34A853 / `--color-vibrant-green`): cor de destaque primária e única cor de ação. Usada exclusivamente para CTAs, estados ativos e tags. **Texto sobre esse verde é sempre Dark Green Base (#202923), nunca branco — branco sobre #34A853 fica abaixo do mínimo de contraste (3,06:1).**

### Neutral
- **Pure Black** (#0D0D0D / `--color-pure-black`): títulos (display/headlines) e leitura de altíssimo contraste.
- **Dark Gray** (#282D29 / `--color-dark-gray`): textos principais, body copy e rótulos de UI.
- **Text Muted** (#5C6B60 / `--color-text-muted`): textos de apoio, placeholders e ícones secundários. (5,51:1 sobre canvas, 5,00:1 sobre surface — clears WCAG AA.)
- **Soft Green Border** (#D6EEDD / `--color-soft-green`): bordas estruturais finas, divisores e sombras sutis no modo claro. Evita cinzas puros sobre o fundo esverdeado.
- **Canvas White** (#F5FFF8 / `--color-canvas-white`): superfície principal da maioria das páginas.
- **Absolute White** (#FFFFFF / `--color-absolute-white`): cor padrão para textos sobrepostos ao Vibrant Green em componentes isolados quando o contraste permitir; preferir Dark Green Base sobre Vibrant Green.

### Named Rules
**The One Voice Rule.** A família tipográfica é única: Instrument Sans. Não introduzir serif nem mono secundários sem revisão explícita do sistema.

## Typography

**Display Font:** Instrument Sans (com Inter e Helvetica Neue como fallback).
**Body Font:** Instrument Sans (mesma família, peso regular para leitura longa).
**Label/Mono Font:** Instrument Sans (mesma família, peso médio, tamanho micro).

**Character:** Uma só voz, hierarquia construída por peso e tamanho, nunca por mudanças de família. Neutro a levemente negativo no tracking dos títulos para manter a elegância.

### Hierarchy
- **Display** (600, clamp até 5rem, 1.10, -0.02em): voz da marca, hero apenas.
- **Headline** (600, clamp até 4rem, 1.20, -0.015em): títulos de seção principais.
- **Title** (600, clamp até 3rem, 1.20, -0.01em): títulos de cards e cases.
- **Body** (400, 18px, 1.60, -0.005em): leitura longa e cópia de UI. Medida de leitura entre 45 e 75 caracteres por linha (.type-body e .type-copy em 56ch).
- **Label** (500, 12px, 1.60, 0em): rótulos de UI, kickers, metadados. Sem uppercase forçado.

### Named Rules
**The Readable Measure Rule.** Corpo de texto nunca ultrapassa 68ch; leads e métricas ficam entre 46ch e 56ch. Colunas estreitas (3–4) são substituídas por linhas únicas ou no máximo 2 colunas.

## Elevation

Sistema híbrido: superfícies planas por padrão, com elevação tonal via sombras suaves coloridas (soft green no modo claro, verde escuro com opacidade no escuro). Nenhuma sombra preta pura.

### Shadow Vocabulary
- **Elevated Light** (`0px 8px 24px rgba(214, 238, 221, 0.4)` / `--shadow-elevated`): cards e elementos elevados no modo claro. Usa o soft green para não "sujar" o canvas branco.
- **Elevated Dark** (`0px 8px 32px rgba(32, 41, 35, 0.4)`): equivalentes no modo escuro.

### Named Rules
**The Flat-By-Default Rule.** Superfícies são planas em repouso. Sombras aparecem apenas como resposta a estado (hover, elevação, foco) e nunca usam preto puro.

## Components

### Buttons
- **Shape:** pílula (raio 9999px).
- **Primary:** fundo Vibrant Green (#34A853), texto Dark Green Base (#202923), Instrument Sans Medium (500), padding 16px 32px. Sem bordas.
- **Hover / Focus:** escala sutil (1.02), shadow suave, focus-visible com outline de 2px em Dark Green Base (Vibrant Green no dark mode).
- **Secondary / Ghost:** fundo transparente, borda 1px em Dark Green Base, texto Dark Green Base.

### Cards / Containers
- **Corner Style:** cantos suavemente arredondados (16px).
- **Background:** Canvas White (#F5FFF8) ou Absolute White (#FFFFFF).
- **Shadow Strategy:** referência à seção Elevation; sombra elevada tonal.
- **Border:** 1px em Soft Green (#D6EEDD) no modo claro.
- **Internal Padding:** generoso (32px ou 40px).

### Inputs / Fields
- **Style:** fundo branco, borda 1px em Soft Green, raio 12px.
- **Focus:** anel de borda em Dark Green Base (Vibrant Green no dark); nunca remover o foco sem substituição.
- **Error / Disabled:** borda e texto em tons de rosa/verde de acordo com o estado; rótulo visível e associado via `<label>` ou `aria-label`.

### Navigation
- **Style:** header fixo com backdrop-blur, links de nav em pílula (raio 9999px), toggle de tema e seletor de idioma com alvos de toque ≥44px em ponteiro grosso.
- **Typography:** Instrument Sans, link ativo em semibold (600), inativo em medium (500).
- **Mobile:** drawer com role="dialog", skip-link para o conteúdo principal.

## Do's and Don'ts

### Do:
- **Do** use Instrument Sans como a única família tipográfica em toda a interface.
- **Do** mantenha o texto do CTA primário em Dark Green Base (#202923) sobre Vibrant Green (#34A853) — contraste de 4,90:1, acima do AA.
- **Do** use muted text em #5C6B60 (5,51:1 sobre canvas), nunca #808080 (3,86:1, falha no AA).
- **Do** respeite a medida de leitura: 45–75 caracteres por linha no corpo.
- **Do** mantenha alvos de toque em pelo menos 44×44px em dispositivos com ponteiro grosso.
- **Do** nunca remova `focus-visible` sem um substituto igualmente visível.

### Don't:
- **Don't** introduza uma segunda família tipográfica (serif ou mono) sem aprovação explícita do sistema.
- **Don't** use branco sobre Vibrant Green (#34A853) — fica em 3,06:1, abaixo do mínimo AA.
- **Don't** use #808080 como texto de apoio — fica em 3,86:1 sobre canvas, falha no AA.
- **Don't** use gradientes em texto, side-stripes decorativos ou ilustrações vetoriais genéricas (sinais de layout gerado por IA).
- **Don't** use raios de 24px fora dos componentes excepcionais documentados; o padrão de card é 16px.
- **Don't** adicione seções de layout/motion/responsivo de nível superior neste documento; dobre esse conteúdo em Overview ou Components.
