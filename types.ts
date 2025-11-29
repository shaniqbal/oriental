export type Language = 'zh' | 'en';

export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface Content {
  nav: {
    home: string;
    beginners: string;
    practice: string;
    resources: string;
    sharing: string;
    about: string;
    // Submenus
    sub_beginners: string[];
    sub_practice: string[];
    sub_resources: string[];
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    learn: { title: string; desc: string };
    practice: { title: string; desc: string };
    resources: { title: string; desc: string };
  };
  events: {
    title: string;
    nextSession: string;
    dateLabel: string;
    joinBtn: string;
  };
  recipe: {
    sectionTitle: string;
    title: string;
    desc: string;
    readMore: string;
  };
  quickLinks: {
    books: string;
    audio: string;
    video: string;
    recipes: string;
    qa: string;
    contact: string;
  };
  footer: {
    rights: string;
    wechat: string;
  };
}