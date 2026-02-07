export enum ViewState {
  HOME = 'HOME',
  CORPORATE = 'CORPORATE',
  STUDIO = 'STUDIO',
  CONTACT = 'CONTACT',
  AI_PLANNER = 'AI_PLANNER'
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface PackageItem {
  id: number;
  title: string;
  price: string;
  image: string;
  tag: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}