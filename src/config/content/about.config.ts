/**
 * About Page Content Configuration
 */

export const aboutConfig = {
  hero: {
    title: "We're on a mission to democratize AI advertising",
    subtitle:
      'Nexora was born from a simple idea: every business deserves access to enterprise-level advertising intelligence.',
  },

  story: {
    title: 'Our Story',
    paragraphs: [
      'Founded in 2024, Nexora emerged from the frustration of watching small businesses struggle with complex advertising platforms while large corporations dominated with their massive budgets and dedicated teams.',
      'We asked ourselves: what if AI could level the playing field? What if a local bakery could run ads as effectively as a Fortune 500 company?',
      "That question became our mission. Today, Nexora's AI handles everything from market research to creative generation, allowing entrepreneurs to focus on what they do best — running their business.",
    ],
  },

  values: {
    title: 'Our Values',
    items: [
      {
        icon: 'Sparkles',
        title: 'Innovation First',
        description:
          "We push boundaries with AI to solve problems that seemed impossible yesterday. Our technology isn't just cutting-edge — it's pioneering.",
      },
      {
        icon: 'Users',
        title: 'Customer Obsessed',
        description:
          "Every feature we build starts with a customer problem. We measure success by our customers' success, not vanity metrics.",
      },
      {
        icon: 'Shield',
        title: 'Transparency',
        description:
          'No hidden fees, no black boxes. We show you exactly how our AI makes decisions and where every dollar of your budget goes.',
      },
      {
        icon: 'Zap',
        title: 'Speed Matters',
        description:
          'In advertising, timing is everything. Our platform is built for speed — from 1-minute campaign setup to real-time optimization.',
      },
    ],
  },

  stats: [
    { value: '10,000+', label: 'Active Businesses' },
    { value: '$50M+', label: 'Ad Spend Managed' },
    { value: '4.2x', label: 'Average ROAS' },
    { value: '98%', label: 'Customer Satisfaction' },
  ],

  team: {
    title: 'Leadership Team',
    subtitle: 'Meet the people building the future of advertising',
    members: [
      {
        name: 'Sarah Chen',
        role: 'CEO & Co-founder',
        bio: 'Former Google Ads product lead with 15 years in digital advertising.',
        avatar: '/team/sarah.jpg',
      },
      {
        name: 'Marcus Williams',
        role: 'CTO & Co-founder',
        bio: 'Ex-Meta AI researcher, PhD in Machine Learning from Stanford.',
        avatar: '/team/marcus.jpg',
      },
      {
        name: 'Elena Rodriguez',
        role: 'VP of Product',
        bio: 'Previously led product at two successful ad-tech startups.',
        avatar: '/team/elena.jpg',
      },
      {
        name: 'David Park',
        role: 'VP of Engineering',
        bio: 'Former engineering director at Amazon, scaled systems to billions of requests.',
        avatar: '/team/david.jpg',
      },
    ],
  },

  investors: {
    title: 'Backed by the Best',
    logos: [
      { name: 'Sequoia Capital', logo: '/investors/sequoia.svg' },
      { name: 'Andreessen Horowitz', logo: '/investors/a16z.svg' },
      { name: 'Y Combinator', logo: '/investors/yc.svg' },
      { name: 'Index Ventures', logo: '/investors/index.svg' },
    ],
  },

  cta: {
    title: 'Join our journey',
    description: "We're always looking for talented people who want to shape the future of AI advertising.",
    buttons: [
      { label: 'View Open Positions', href: '/careers', variant: 'primary' },
      { label: 'Contact Us', href: '/contact', variant: 'outline' },
    ] as const,
  },
} as const;

export type AboutConfig = typeof aboutConfig;

