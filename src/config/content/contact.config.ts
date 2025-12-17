/**
 * Contact Page Content Configuration
 */

export const contactConfig = {
  hero: {
    title: 'Get in Touch',
    subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  },

  form: {
    fields: {
      name: {
        label: 'Full Name',
        placeholder: 'John Doe',
      },
      email: {
        label: 'Email Address',
        placeholder: 'john@example.com',
      },
      company: {
        label: 'Company (Optional)',
        placeholder: 'Acme Inc.',
      },
      subject: {
        label: 'Subject',
        placeholder: 'How can we help?',
        options: [
          { value: 'general', label: 'General Inquiry' },
          { value: 'sales', label: 'Sales Question' },
          { value: 'support', label: 'Technical Support' },
          { value: 'partnership', label: 'Partnership Opportunity' },
          { value: 'enterprise', label: 'Enterprise Plan' },
        ],
      },
      message: {
        label: 'Message',
        placeholder: 'Tell us more about your needs...',
      },
    },
    submitButton: 'Send Message',
    successMessage: "Thanks for reaching out! We'll get back to you within 24 hours.",
  },

  contactMethods: [
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Drop us an email anytime',
      value: 'hello@nexora.ai',
      href: 'mailto:hello@nexora.ai',
    },
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      description: 'Chat with our team',
      value: 'Available 24/7',
      href: '#chat',
    },
    {
      icon: 'Phone',
      title: 'Phone',
      description: 'Mon-Fri from 9am to 6pm',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: 'MapPin',
      title: 'Office',
      description: 'Come say hello',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com',
    },
  ],

  social: {
    title: 'Follow Us',
    links: [
      { platform: 'Twitter', handle: '@nexora_ai', href: 'https://twitter.com/nexora_ai' },
      { platform: 'LinkedIn', handle: 'Nexora AI', href: 'https://linkedin.com/company/nexora' },
      { platform: 'Instagram', handle: '@nexora.ai', href: 'https://instagram.com/nexora.ai' },
    ],
  },

  faq: {
    title: 'Quick Answers',
    items: [
      {
        question: 'What are your support hours?',
        answer: 'Our support team is available 24/7 via chat. Email support is available Monday-Friday, 9am-6pm PST.',
      },
      {
        question: 'How quickly do you respond?',
        answer: 'We aim to respond to all inquiries within 24 hours. Enterprise customers get priority support with 4-hour response times.',
      },
      {
        question: 'Can I schedule a demo?',
        answer: "Absolutely! Select 'Sales Question' in the form above and we'll set up a personalized demo for you.",
      },
    ],
  },
} as const;

export type ContactConfig = typeof contactConfig;

