export type ArticleParagraph = {
  text: string;
  source?: number;
  link?: { label: string; href: string };
};
export type ArticleDiagram = { title: string; steps: string[]; caption: string };
export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: ArticleParagraph[];
  points?: string[];
  diagram?: ArticleDiagram;
  table?: { headers: string[]; rows: string[][]; caption: string };
  image?: { src: string; alt: string; caption: string; width: number; height: number };
};
export type ArticleBody = {
  introduction: string[];
  sections: ArticleSection[];
  closing: string;
  takeaways: string[];
  note: string;
  sources: { id: number; organization: string; title: string; year: string; url: string }[];
};
