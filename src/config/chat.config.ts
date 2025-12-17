/**
 * Chat Widget Configuration
 * Support chat settings and messages.
 */

export const chatConfig = {
  enabled: true,

  widget: {
    position: 'bottom-right' as const,
    icon: 'message-circle',
    tooltip: 'Need help?',
  },

  messages: {
    greeting: 'Hi there! 👋 How can we help you today?',
    autoMessage:
      'Thank you for contacting us. Our team typically responds within 24 business hours.',
    placeholder: 'Type your message...',
    sendButton: 'Send',
  },

  responseTime: '24 business hours',

  quickReplies: [
    'I need help with my campaign',
    'How does pricing work?',
    'I have a billing question',
    'I want to talk to sales',
  ],

  offlineMessage: {
    title: "We're currently offline",
    description: "Leave us a message and we'll get back to you as soon as possible.",
    emailPlaceholder: 'Your email address',
    submitButton: 'Send Message',
  },

  branding: {
    showPoweredBy: false,
    agentName: 'Nexora Support',
    agentAvatar: '/images/support-avatar.png',
  },
} as const;

export type ChatConfig = typeof chatConfig;
