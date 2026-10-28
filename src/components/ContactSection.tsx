import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  AlertCircle,
  MessageSquare,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedNotice, setSubmittedNotice] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage(null);
    if (submittedNotice) setSubmittedNotice(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Accessible Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t.contact.validationError);
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage(t.contact.validationError);
      return;
    }

    // Direct, honest contact delivery via pre-filled mailto
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || 'Opportunity / Collaboration'} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Jjuuko Adinan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.subject || 'General Inquiry'}\n\nMessage:\n${formData.message}\n\nSent from Adi Tech Software Solutions Portfolio`
    );

    const mailtoUrl = `mailto:aditechsoftwaresolutions@gmail.com?subject=${subject}&body=${body}`;

    setSubmittedNotice(`Composing email in your default email client to aditechsoftwaresolutions@gmail.com. If your client did not open automatically, please click below.`);
    
    // Trigger mailto client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-brand-secondary scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="badge-subtle">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contact.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            {t.contact.title}
          </h2>

          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="card-surface p-6 border-brand-border space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                    {t.contact.emailLabel}
                  </span>
                  <div className="text-sm sm:text-base font-bold text-brand-text">
                    <a
                      href="mailto:aditechsoftwaresolutions@gmail.com"
                      className="text-brand-blue hover:underline focus-ring rounded"
                    >
                      aditechsoftwaresolutions@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed pl-13">
                Open for internship inquiries, technical opportunities, and mentorship.
              </p>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="card-surface p-6 border-brand-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                    {t.contact.phoneLabel}
                  </span>
                  <div className="text-sm sm:text-base font-bold text-brand-text">
                    <a
                      href="tel:+256782010327"
                      className="text-brand-text hover:text-brand-blue hover:underline focus-ring rounded"
                    >
                      +256 782010327
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/256782010327?text=Hello%20Jjuuko%20Adinan,%20I%20am%20contacting%20you%20from%20your%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors focus-ring"
                aria-label="Direct WhatsApp Chat with Jjuuko Adinan"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.whatsAppDirect}</span>
              </a>
            </div>

            {/* Location Card */}
            <div className="card-surface p-6 border-brand-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                  {t.contact.locationLabel}
                </span>
                <div className="text-sm font-semibold text-brand-text">
                  {t.contact.locationUganda}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="card-surface p-6 sm:p-8 border-brand-border shadow-card space-y-5"
              noValidate
            >
              <h3 className="text-lg font-bold text-brand-text pb-2 border-b border-brand-border">
                {t.contact.formTitle}
              </h3>

              {errorMessage && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {submittedNotice && (
                <div
                  role="status"
                  className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm space-y-2"
                >
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Inquiry Prepared</span>
                  </div>
                  <p className="text-xs text-emerald-800">
                    {submittedNotice}
                  </p>
                  <a
                    href="mailto:aditechsoftwaresolutions@gmail.com"
                    className="inline-flex items-center gap-1.5 font-bold text-xs text-brand-blue hover:underline"
                  >
                    <span>Click here to open email directly</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-brand-text flex items-center gap-1">
                    <span>{t.contact.nameLabel}</span>
                    <span className="text-rose-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                    aria-required="true"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-brand-border text-sm text-brand-text placeholder-slate-400 focus-ring"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-brand-text flex items-center gap-1">
                    <span>{t.contact.emailLabel}</span>
                    <span className="text-rose-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    aria-required="true"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-brand-border text-sm text-brand-text placeholder-slate-400 focus-ring"
                  />
                </div>
              </div>

              {/* Subject / Topic Select */}
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-semibold text-brand-text">
                  {t.contact.subjectLabel}
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-brand-border text-sm text-brand-text focus-ring"
                >
                  <option value="">{t.contact.subjectSelectPrompt}</option>
                  {t.contact.subjectOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-brand-text flex items-center gap-1">
                  <span>{t.contact.messageLabel}</span>
                  <span className="text-rose-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  required
                  aria-required="true"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-brand-border text-sm text-brand-text placeholder-slate-400 focus-ring resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary py-3"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.sendBtn}</span>
                </button>
                <p className="text-[11px] text-brand-muted text-center mt-2">
                  {t.contact.directMailtoHint}
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
