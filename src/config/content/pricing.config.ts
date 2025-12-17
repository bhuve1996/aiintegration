/**
 * Pricing Page Content Configuration
 * All pricing plans, features, and FAQs.
 */

export interface PricingPlan {
  key: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    annually: number;
  };
  currency: string;
  features: {
    text: string;
    included: boolean;
    highlight?: boolean;
  }[];
  cta: {
    label: string;
    href: string;
  };
  popular?: boolean;
  badge?: string;
}

export const pricingConfig = {
  hero: {
    title: 'Simple, Transparent Pricing',
    subtitle: 'Choose the perfect plan for your business. No hidden fees.',
  },

  billingToggle: {
    monthly: 'Monthly',
    annually: 'Annually',
    discount: 'Save 20%',
  },

  plans: [
    {
      key: 'starter',
      name: 'Starter',
      description: 'For small businesses & startups looking for simple, AI-driven ad automation.',
      price: {
        monthly: 49,
        annually: 39,
      },
      currency: 'USD',
      features: [
        { text: '1-Min Ad Setup', included: true },
        { text: 'Expert Ad Targeting Strategy', included: true },
        { text: 'AI Market Research', included: true },
        { text: 'Customer Support', included: true },
        { text: 'AI Budget Optimizer', included: true },
        { text: 'Performance Forecasts', included: true },
        { text: 'AI Ad Copy', included: true },
        { text: 'Live Data Insights', included: true },
        { text: 'Top-performing Audiences', included: true },
        { text: 'Only one Facebook account', included: true, highlight: true },
        { text: 'Daily Budget Cap: $150', included: true, highlight: true },
        { text: 'Enhanced Ad Creativity', included: false },
        { text: 'Advanced AI Ads Testing', included: false },
        { text: 'Unlimited Budget', included: false },
        { text: 'Team Collaboration', included: false },
      ],
      cta: {
        label: 'Get Started',
        href: '/signup?plan=starter',
      },
    },
    {
      key: 'growth',
      name: 'Growth',
      description:
        'For growing brands & enterprises needing advanced AI ad optimization and strategic support.',
      price: {
        monthly: 149,
        annually: 119,
      },
      currency: 'USD',
      popular: true,
      badge: 'Most Popular',
      features: [
        { text: 'All Starter Plan Features Included', included: true, highlight: true },
        { text: 'Enhanced Ad Creativity', included: true },
        { text: 'Advanced AI Ads Testing', included: true },
        { text: 'Unlimited Budget', included: true },
        { text: 'Unlimited Facebook Accounts', included: true },
        { text: 'Team Collaboration', included: true },
        { text: 'Dedicated AI Ad Consultant', included: true },
        { text: 'Priority Support', included: true },
        { text: 'Custom Reporting', included: true },
        { text: 'API Access', included: true },
      ],
      cta: {
        label: 'Get Started',
        href: '/signup?plan=growth',
      },
    },
    {
      key: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solutions for large organizations with complex advertising needs.',
      price: {
        monthly: 0,
        annually: 0,
      },
      currency: 'USD',
      badge: 'Custom',
      features: [
        { text: 'All Growth Plan Features', included: true, highlight: true },
        { text: 'Dedicated Account Manager', included: true },
        { text: 'Custom Integrations', included: true },
        { text: 'SLA Guarantee', included: true },
        { text: 'White-label Options', included: true },
        { text: 'Advanced Analytics', included: true },
        { text: 'Multi-brand Management', included: true },
        { text: 'Custom Training', included: true },
      ],
      cta: {
        label: 'Contact Sales',
        href: '/contact?type=enterprise',
      },
    },
  ] as PricingPlan[],

  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What types of products or services can I promote with Nexora?',
        answer:
          'Nexora supports a wide range of industries including e-commerce, SaaS, local services, real estate, and more. Our AI adapts to your specific business needs and target audience.',
      },
      {
        question: 'Which countries and regions does Nexora support?',
        answer:
          'We support advertising in all countries where Meta Ads are available. Our AI is trained on global market data and can optimize campaigns for any region.',
      },
      {
        question: 'What platforms does Nexora support?',
        answer:
          "Currently, we specialize in Meta Ads (Facebook & Instagram). We're actively working on Google Ads, TikTok Ads, and LinkedIn Ads integrations.",
      },
      {
        question: 'Do I need my own Facebook business manager account to use Nexora?',
        answer:
          "Yes, you'll need a Facebook Business Manager account. We integrate directly with your existing account to manage campaigns on your behalf.",
      },
      {
        question: 'How is Nexora different from other tools?',
        answer:
          'Nexora uses advanced AI that goes beyond simple automation. We generate creative content, optimize targeting in real-time, and provide actionable insights — all from a single URL input.',
      },
      {
        question: 'How does Nexora handle ad spend?',
        answer:
          "Your ad budget is spent directly through your Meta Ads account. We never touch your money — we only optimize how it's spent to maximize your ROAS.",
      },
      {
        question: 'Can I cancel my Nexora subscription at any time?',
        answer:
          'Absolutely! You can cancel your subscription at any time with no penalties. Your campaigns will continue running until the end of your billing period.',
      },
    ],
  },

  guarantee: {
    title: '30-Day Money-Back Guarantee',
    description:
      "Try Nexora risk-free. If you're not satisfied within 30 days, we'll refund your subscription — no questions asked.",
  },
} as const;

export type PricingConfig = typeof pricingConfig;
