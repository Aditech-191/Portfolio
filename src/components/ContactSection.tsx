import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ContactFormData } from '../types';
import confetti from 'canvas-confetti';
import {
  Mail,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  PhoneCall,
  X
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    serviceNeeded: '',
    message: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage(null);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#06b6d4', '#10b981', '#ffffff'],
      });
    } catch {
      // Graceful fallback if confetti unavailable
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t.contact.validationError);
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage(t.contact.validationError);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessModalOpen(true);
      triggerConfetti();

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        serviceNeeded: '',
        message: '',
        budget: '',
      });
    }, 1000);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Jjuuko Adinan,\nMy name is ${formData.fullName || 'a client'}.\nI need assistance with: ${
        formData.serviceNeeded || 'Engineering consultation'
      }.\nDetails: ${formData.message || 'Looking to discuss a new project with you.'}`
    );
    window.open(`https://wa.me/256700000000?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.contact.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="p-6 rounded-3xl glass-card border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  Instant
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t.contact.whatsAppDirect}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.contact.whatsAppSubtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-glow-emerald transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </button>
            </div>

            {/* Email & Location Card */}
            <div className="p-6 rounded-3xl glass-card border-slate-800 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 border border-primary-500/40 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">{t.contact.directEmail}</div>
                  <a
                    href="mailto:aditechuganda@gmail.com"
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    aditechuganda@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Primary Base</div>
                  <div className="text-sm font-semibold text-white">{t.contact.locationUganda}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Guaranteed Response SLA</div>
                  <div className="text-sm font-semibold text-white">Under 24 Hours (Often &lt; 2h)</div>
                </div>
              </div>
            </div>

            {/* Trust Quote */}
            <div className="p-4 rounded-2xl bg-dark-950/80 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Strict confidentiality & non-disclosure adhered to for all enterprise inquiries.</span>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl glass-panel-glow border-slate-800 shadow-xl space-y-5"
            >
              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 flex items-center gap-1">
                    <span>{t.contact.nameLabel}</span>
                    <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 flex items-center gap-1">
                    <span>{t.contact.emailLabel}</span>
                    <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Service Needed Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  {t.contact.serviceLabel}
                </label>
                <select
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-dark-950/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white outline-none transition-all"
                >
                  <option value="" className="bg-dark-900 text-slate-400">
                    {t.contact.serviceSelectPrompt}
                  </option>
                  {t.contact.serviceOptions.map((opt, idx) => (
                    <option key={idx} value={opt} className="bg-dark-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Estimated Budget Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">
                  {t.contact.budgetLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {t.contact.budgetOptions.map((b, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-2.5 rounded-xl text-xs font-mono transition-all text-center ${
                        formData.budget === b
                          ? 'bg-primary-600 text-white font-semibold border border-primary-400'
                          : 'bg-dark-950/70 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 flex items-center gap-1">
                  <span>{t.contact.messageLabel}</span>
                  <span className="text-rose-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-500 hover:from-primary-500 hover:to-cyan-400 text-white shadow-glow-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <span>{t.contact.sendingBtn}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.contact.sendBtn}</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

      {/* Success Notification Modal */}
      {successModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md rounded-3xl glass-panel-glow border border-emerald-500/50 p-6 sm:p-8 text-center space-y-4 shadow-2xl">
            <button
              onClick={() => setSuccessModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.contact.successTitle}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {t.contact.successText}
            </p>

            <div className="pt-2">
              <button
                onClick={() => setSuccessModalOpen(false)}
                className="w-full py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-glow-emerald"
              >
                Awesome, Got It!
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
