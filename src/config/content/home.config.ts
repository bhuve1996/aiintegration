/**
 * Home Page Content Configuration
 * All text, CTAs, and content for the landing page.
 */

export const homeConfig = {
  hero: {
    badge: 'AI-Powered Advertising',
    title: 'Unlock the Full Potential of Your Meta Ads',
    highlight: 'Full Potential',
    subtitle:
      'Simply start with your URL. Our AI handles the rest — from creative generation to campaign optimization.',
    primaryCta: {
      label: 'Get Started Now',
      href: '/signup',
    },
    secondaryCta: {
      label: 'Watch Demo',
      href: '#demo',
    },
    stats: [
      { value: '10.8X', label: 'Average ROAS' },
      { value: '4.32%', label: 'Click-Through Rate' },
      { value: '-12.26%', label: 'Cost Reduction' },
    ],
  },

  features: {
    title: 'Powering Every Step of Your Ads',
    subtitle: 'in One Seamless Flow',
    items: [
      {
        key: 'smart-creatives',
        icon: 'sparkles',
        title: 'Smart Ad Creatives',
        description: 'AI-generated ad copy and visuals tailored to your brand and audience.',
      },
      {
        key: 'monitoring',
        icon: 'chart-line',
        title: 'Always-On Monitoring',
        description: '24/7 performance tracking with automated optimization adjustments.',
      },
      {
        key: 'targeting',
        icon: 'target',
        title: 'Expert Ad Targeting',
        description: 'Precision targeting that finds your most profitable customers.',
      },
      {
        key: 'budget',
        icon: 'wallet',
        title: 'AI Budget Optimizer',
        description: 'Intelligent budget allocation that maximizes your ROI.',
      },
    ],
  },

  benefits: {
    title: 'Why Choose Nexora',
    items: [
      {
        key: 'launch-faster',
        icon: 'rocket',
        title: 'Launch Ads Faster',
        description: 'Automated ad setup that takes you from concept to campaign in minutes.',
        cta: 'Get Started Now',
      },
      {
        key: 'evergreen',
        icon: 'refresh',
        title: 'Evergreen Ads',
        description: 'Set it once for a full year of high-performing ads, no manual work required.',
        cta: 'Get Started Now',
      },
      {
        key: 'slash-spend',
        icon: 'trending-down',
        title: 'Slash Your Ad Spend',
        description:
          'Eliminate wasted spend with precision targeting that finds your most profitable customers.',
        cta: 'Get Started Now',
      },
      {
        key: 'explosive-roas',
        icon: 'trending-up',
        title: 'Achieve Explosive ROAS',
        description: '24/7 optimization that continuously works to maximize your ad profits.',
        cta: 'Get Started Now',
      },
    ],
  },

  industries: {
    title: 'Helping Businesses Thrive',
    subtitle: 'Whatever the Industry',
    items: [
      'E-commerce',
      'SaaS',
      'Local Services',
      'Real Estate',
      'Healthcare',
      'Education',
      'Finance',
      'Entertainment',
    ],
  },

  testimonials: {
    title: 'Trusted by Growth-Focused Brands',
    items: [
      {
        quote: 'Nexora helped us achieve 10X ROAS within the first month. Game changer.',
        author: 'Sarah Chen',
        role: 'CMO',
        company: 'TechStart Inc.',
        avatar: '/images/testimonials/sarah.jpg',
      },
      {
        quote: 'The AI targeting is incredibly accurate. Our ad spend efficiency improved by 40%.',
        author: 'Michael Roberts',
        role: 'Marketing Director',
        company: 'GrowthLab',
        avatar: '/images/testimonials/michael.jpg',
      },
      {
        quote: 'Finally, an ad platform that actually understands our brand voice.',
        author: 'Emily Watson',
        role: 'Founder',
        company: 'Bloom Studio',
        avatar: '/images/testimonials/emily.jpg',
      },
    ],
  },

  cta: {
    title: 'Ready to Transform Your Advertising?',
    subtitle: 'Join thousands of businesses achieving explosive growth with AI-powered ads.',
    primaryCta: {
      label: 'Start Free Trial',
      href: '/signup',
    },
    secondaryCta: {
      label: 'Talk to Sales',
      href: '/contact',
    },
  },
} as const;

export type HomeConfig = typeof homeConfig;
