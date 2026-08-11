export type Language = 'pt' | 'en' | 'es';

export interface CaseStudy {
  id: string;
  slug: 'hilton' | 'abinbev' | 'nissan' | 'julius-baer';
  client: string;
  category: string;
  year: string;
  role: string;
  metricsHighlight: string;
  metricLabel: string;
  coverImage: string;
  pullQuote?: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  impactSummary: Record<Language, string>;
  tags: string[];
  challenge: Record<Language, {
    title: string;
    description: string;
    keyPoints: string[];
  }>;
  solution: Record<Language, {
    title: string;
    description: string;
    highlights: { title: string; desc: string }[];
  }>;
  results: Record<Language, {
    title: string;
    stats: { label: string; value: string; desc: string }[];
    summary: string;
  }>;
  futureVision: Record<Language, {
    title: string;
    subtitle: string;
    topics: {
      id: number;
      title: string;
      description: string;
      tag: string;
    }[];
  }>;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'design' | 'dev' | 'management' | 'education';
  description: Record<Language, string>;
  level: string;
  iconName: string;
}

export interface PlaygroundItem {
  id: string;
  title: Record<Language, string>;
  category: string;
  image: string;
  aspectRatio: string;
  tags: string[];
  details: Record<Language, string>;
}
