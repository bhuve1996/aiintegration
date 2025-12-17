'use client';

import { useState } from 'react';
import { Card, Button, Input, Select, Spinner, type SelectOption } from '@/components/ui';
import { contactConfig } from '@/config/content/contact.config';
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const iconMap = {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
};

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { hero, form, contactMethods, faq } = contactConfig;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const subjectOptions: SelectOption[] = form.fields.subject.options.map((opt) => ({
    value: opt.value,
    label: opt.label,
  }));

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            {hero.title}
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            {hero.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="elevated" padding="lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex p-4 rounded-full bg-[var(--color-success)]/10 mb-6">
                    <CheckCircle className="h-12 w-12 text-[var(--color-success)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">
                    {form.successMessage}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', subject: 'general', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label={form.fields.name.label}
                      placeholder={form.fields.name.placeholder}
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                    <Input
                      label={form.fields.email.label}
                      type="email"
                      placeholder={form.fields.email.placeholder}
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label={form.fields.company.label}
                      placeholder={form.fields.company.placeholder}
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                    />
                    <Select
                      label={form.fields.subject.label}
                      options={subjectOptions}
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                      {form.fields.message.label}
                    </label>
                    <textarea
                      rows={5}
                      placeholder={form.fields.message.placeholder}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                    rightIcon={isSubmitting ? undefined : <Send className="h-4 w-4" />}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Spinner size="sm" />
                        Sending...
                      </span>
                    ) : (
                      form.submitButton
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card variant="bordered" padding="lg">
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-6">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-5">
                {contactMethods.map((method, idx) => {
                  const Icon = iconMap[method.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={idx}
                      href={method.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/10 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                        <Icon className="h-5 w-5 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                          {method.title}
                        </p>
                        <p className="text-sm text-[var(--color-text-muted)]">{method.description}</p>
                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Quick FAQ */}
            <Card variant="bordered" padding="lg">
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">{faq.title}</h3>
              <div className="space-y-4">
                {faq.items.map((item, idx) => (
                  <div key={idx}>
                    <p className="text-sm font-medium text-[var(--color-text-primary)] mb-1">
                      {item.question}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">{item.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

