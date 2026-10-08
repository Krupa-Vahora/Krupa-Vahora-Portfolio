import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_CONFIG } from '../constants/portfolio';
import { sendContactMessage, type ContactFormData } from '../utils/contact';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    state: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    state: 'idle',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormStatus({
        state: 'error',
        message: 'Please fill in your name, email, and message before sending.',
      });
      return;
    }

    setFormStatus({
      state: 'loading',
      message: 'Transmitting your message to Krupa...',
    });

    const result = await sendContactMessage(
      formState,
      CONTACT_CONFIG,
      PERSONAL_INFO.email
    );

    setFormStatus({
      state: result.success ? 'success' : 'error',
      message: result.message,
    });

    if (result.success) {
      setFormState({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-10 scroll-mt-20">
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold'}`}>
        <Mail className="w-3.5 h-3.5" /> Let's Connect
      </div>
      <div className={`rounded-3xl border p-6 sm:p-8 relative overflow-hidden ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
        {/* Header */}
        <div className="mb-8">
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Get In Touch
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Looking for a seasoned React Native specialist, cross-platform mobile architect, or full-stack engineer? Send a direct message below.
          </p>
          <div className={`mt-6 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`} />
        </div>

        {/* Contact Us 3 Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Your Name</label>
              <input
                type="text"
                placeholder="e.g. Alex Harrison"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white'}`}
              />
            </div>
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Your Email</label>
              <input
                type="email"
                placeholder="alex@company.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white'}`}
              />
            </div>
          </div>

          <div>
            <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Message / Project Inquiry</label>
            <textarea
              rows={4}
              placeholder="Hi Krupa, we'd like to discuss a React Native mobile project / position..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors resize-none ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white'}`}
            />
          </div>

          {formStatus.message && (
            <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${formStatus.state === 'success'
              ? darkMode ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium'
              : darkMode ? 'bg-rose-500/10 border border-rose-500/20 text-rose-400' : 'bg-rose-50 border border-rose-200 text-rose-700 font-medium'
              }`}>
              {formStatus.state === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <ShieldCheck className="w-4 h-4 shrink-0" />}
              <span>{formStatus.message}</span>
            </div>
          )}

          <div className="flex item-center justify-center">
            <button
              type="submit"
              disabled={formStatus.state === 'loading'}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-4 h-4" />
              <span>{formStatus.state === 'loading' ? 'Sending...' : 'Send Direct Message'}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
