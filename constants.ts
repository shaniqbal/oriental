import { Content, Language, MenuItem } from './types';

export const CONTENT: Record<Language, Content> = {
  zh: {
    nav: {
      home: '首页',
      beginners: '修行入门',
      practice: '共修活动',
      resources: '资源下载',
      sharing: '灵验分享',
      about: '关于我们',
      sub_beginners: ['初学入门', '精彩专题', '常见问题'],
      sub_practice: ['共修日历', '报名参加', '共修须知'],
      sub_resources: ['书籍电子版', '开示录音', '视频专区', '素食食谱']
    },
    hero: {
      title: '心灯报功',
      subtitle: 'Guiding hearts toward wisdom and compassion',
      cta: '新手从这里开始 →',
    },
    features: {
      learn: { title: '佛学智慧', desc: '深入经藏，智慧如海。探索古老的智慧与现代生活的融合。' },
      practice: { title: '每日功课', desc: '持之以恒，滴水穿石。建立清净的日常修行习惯。' },
      resources: { title: '法宝结缘', desc: '免费结缘经书、像片与影音资料。' },
    },
    events: {
      title: '近期共修',
      nextSession: '周日全球网络共修',
      dateLabel: '2025年5月18日 上午 9:00 (GMT+8)',
      joinBtn: '立即报名',
    },
    recipe: {
      sectionTitle: '本周素食',
      title: '清心莲藕汤',
      desc: '滋养身心，清热润肺。一道适合初夏的清淡汤品，助您在修行中保持身心轻安。',
      readMore: '查看食谱',
    },
    quickLinks: {
      books: '电子书',
      audio: '录音',
      video: '视频',
      recipes: '素食',
      qa: '问答',
      contact: '联系',
    },
    footer: {
      rights: '© 2025 心灯报功 Oriental Pro. All Rights Reserved.',
      wechat: '扫描关注微信公众号',
    }
  },
  en: {
    nav: {
      home: 'Home',
      beginners: 'Start Here',
      practice: 'Group Practice',
      resources: 'Resources',
      sharing: 'Testimonials',
      about: 'About Us',
      sub_beginners: ['Beginner Guide', 'Topics', 'FAQ'],
      sub_practice: ['Calendar', 'Join Us', 'Guidelines'],
      sub_resources: ['E-Books', 'Audio Recordings', 'Videos', 'Vegan Recipes']
    },
    hero: {
      title: 'Oriental Pro',
      subtitle: 'Guiding hearts toward wisdom and compassion',
      cta: 'Start Here →',
    },
    features: {
      learn: { title: 'Wisdom', desc: 'Dive into the ocean of wisdom. Explore ancient teachings for modern life.' },
      practice: { title: 'Daily Practice', desc: 'Consistency is key. Establish a pure and steady daily routine.' },
      resources: { title: 'Resources', desc: 'Free distribution of books, images, and audio/video materials.' },
    },
    events: {
      title: 'Upcoming Events',
      nextSession: 'Sunday Global Group Practice',
      dateLabel: 'May 18, 2025 at 9:00 AM (GMT+8)',
      joinBtn: 'Register Now',
    },
    recipe: {
      sectionTitle: 'Recipe of the Week',
      title: 'Pure Lotus Root Soup',
      desc: 'Nourish body and mind. A light soup perfect for early summer to keep you light and peaceful.',
      readMore: 'View Recipe',
    },
    quickLinks: {
      books: 'Books',
      audio: 'Audio',
      video: 'Video',
      recipes: 'Recipes',
      qa: 'Q&A',
      contact: 'Contact',
    },
    footer: {
      rights: '© 2025 Oriental Pro. All Rights Reserved.',
      wechat: 'Scan to follow on WeChat',
    }
  }
};