import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoPrepared, setMailtoPrepared] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build authentic direct mailto link
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setMailtoPrepared(mailtoUrl);
    setSubmitted(true);

    // Open mail client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle text-brand-blue text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading tracking-tight">
            Let's <span className="text-gradient">Grow Together!</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Have a project, job opportunity, or collaboration in mind? Let's connect and discuss how digital marketing can help achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-brand-blue/30 rounded-full blur-2xl" />
              
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold">
                  Direct Contact
                </span>
                <h3 className="text-2xl font-extrabold text-white font-heading">
                  Available for Interviews & Client Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Open to full-time roles as Digital Marketing Executive / Specialist in Jaipur, hybrid, or remote, as well as freelance strategy projects.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email Card */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/30 text-brand-accent flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                      Email Address
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-brand-accent transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/30 text-brand-accent flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                      Phone / WhatsApp
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-brand-accent transition-colors">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/30 text-brand-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  Professional Socials
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-brand-blue text-xs font-semibold text-white transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-pink-600 text-xs font-semibold text-white transition-colors"
                  >
                    <span>Instagram Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Functional Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-surface-light border border-slate-200/90 shadow-card p-8 sm:p-10 text-left">
              
              <div className="space-y-1 mb-8">
                <h3 className="text-2xl font-extrabold text-navy-900 font-heading">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600">
                  Fill in your details below. Your message will be routed directly to Aaryan's verified email.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-navy-900">
                        Inquiry Prepared Successfully!
                      </h4>
                      <p className="text-xs text-charcoal-600">
                        Your default email client has been prompted to send this message to <strong className="text-brand-blue">{personalInfo.email}</strong>.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-charcoal-700 leading-relaxed bg-white p-4 rounded-xl border border-blue-100">
                    If your email client didn't open automatically, you can send it manually with one click below:
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {mailtoPrepared && (
                      <a
                        href={mailtoPrepared}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-brand-dark transition-colors shadow-xs"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open In Email Client</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSubmitted(false)}
                      type="button"
                      className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-charcoal-700 hover:bg-slate-50 cursor-pointer"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                          errors.name ? 'border-rose-400 ring-2 ring-rose-100' : 'border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 font-medium">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                          errors.email ? 'border-rose-400 ring-2 ring-rose-100' : 'border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 font-medium">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                      Subject / Topic <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Digital Marketing Executive Opening / Growth Campaign"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.subject ? 'border-rose-400 ring-2 ring-rose-100' : 'border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-rose-500 font-medium">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                      Message / Project Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your job opening, target goals, or digital marketing requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.message ? 'border-rose-400 ring-2 ring-rose-100' : 'border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-500 font-medium">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-navy-900 hover:bg-brand-blue text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-card-hover group cursor-pointer"
                  >
                    <span>Send Message to Aaryan</span>
                    <Send className="w-4 h-4 text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2 justify-center text-[11px] text-charcoal-500 pt-2">
                    <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                    <span>Real-time delivery verification: Opens pre-filled email to ensure zero lost leads.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
