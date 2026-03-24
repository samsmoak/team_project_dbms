// app/data/types.ts

// Legacy flat section type (backward compat)
export type Section = {
  id: string;
  title: string;
  content: string;
};

// Rich content block discriminated union
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 3 | 4; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'table'; caption?: string; headers: string[]; rows: string[][] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'image-grid'; images: { src: string; alt: string; caption: string }[]; caption?: string; columns?: number }
  | { type: 'code'; text: string }
  | { type: 'callout'; label: string; text: string }
  | { type: 'divider' };

export type RichSection = {
  id: string;
  title: string;
  content: ContentBlock[];
};
