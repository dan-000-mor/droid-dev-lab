export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content for simplicity
  imageUrl: string;
  date: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}