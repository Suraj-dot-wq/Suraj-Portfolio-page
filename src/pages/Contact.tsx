import { useState, type FormEvent } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { social, personal } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const emailPlaceholder = social.email.startsWith('REPLACE_WITH_');
  const githubPlaceholder = social.github.startsWith('REPLACE_WITH_');
  const linkedinPlaceholder = social.linkedin.startsWith('REPLACE_WITH_');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (emailPlaceholder) return;

    const subject = encodeURIComponent(
      `Portfolio contact from ${name || 'a visitor'}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="pt-24">
      <section className="section-pad pt-8">
        <div className="container-pad max-w-5xl">
          <Reveal>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's Connect
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-400">
              I'm actively seeking Cloud, DevOps, and AWS Cloud Support
              internship opportunities. Whether you're a recruiter or a fellow
              student, feel free to reach out.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <div className="glass-card p-6 sm:p-8">
                {emailPlaceholder ? (
                  <div className="flex items-start gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <div>
                      <p className="text-sm font-medium text-slate-200">
                        Email not configured yet.
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Add your email address in{' '}
                        <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-electric-400">
                          src/data/portfolio.ts
                        </code>{' '}
                        to enable the contact form.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {sent && (
                      <div className="mb-6 flex items-start gap-3 rounded-xl border border-electric-500/30 bg-electric-500/5 px-5 py-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-400" />
                        <div>
                          <p className="text-sm font-medium text-slate-200">
                            Your email client should now be open.
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            If nothing happened, email me directly at{' '}
                            <a
                              href={`mailto:${social.email}`}
                              className="text-electric-400 underline"
                            >
                              {social.email}
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-slate-300"
                        >
                          Name
                        </label>
                        <div className="relative">
                          <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                          <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full rounded-xl border border-white/10 bg-navy-800/60 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/30"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-slate-300"
                        >
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                          <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-white/10 bg-navy-800/60 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/30"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium text-slate-300"
                        >
                          Message
                        </label>
                        <div className="relative">
                          <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                          <textarea
                            id="message"
                            required
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message…"
                            className="w-full rounded-xl border border-white/10 bg-navy-800/60 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/30"
                          />
                        </div>
                      </div>

                      <button type="submit" className="btn-primary w-full">
                        <Send className="h-4 w-4" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

            {/* Sidebar — direct links */}
            <Reveal delay={150} className="lg:col-span-2">
              <div className="glass-card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-white">
                  Connect directly
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  You can also reach me through these channels.
                </p>

                <div className="mt-6 space-y-3">
                  {!emailPlaceholder && (
                    <a
                      href={`mailto:${social.email}`}
                      className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-electric-500/40 hover:bg-white/[0.04]"
                    >
                      <div className="rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 p-2.5">
                        <Mail className="h-5 w-5 text-electric-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white">Email</p>
                        <p className="truncate text-xs text-slate-400">
                          {social.email}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-600 transition-colors group-hover:text-electric-400" />
                    </a>
                  )}

                  {!githubPlaceholder && (
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-electric-500/40 hover:bg-white/[0.04]"
                    >
                      <div className="rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 p-2.5">
                        <Github className="h-5 w-5 text-electric-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white">GitHub</p>
                        <p className="truncate text-xs text-slate-400">
                          View my code & projects
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-600 transition-colors group-hover:text-electric-400" />
                    </a>
                  )}

                  {!linkedinPlaceholder && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-electric-500/40 hover:bg-white/[0.04]"
                    >
                      <div className="rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 p-2.5">
                        <Linkedin className="h-5 w-5 text-electric-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white">
                          LinkedIn
                        </p>
                        <p className="truncate text-xs text-slate-400">
                          Let's connect professionally
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-600 transition-colors group-hover:text-electric-400" />
                    </a>
                  )}
                </div>

                <div className="mt-6 border-t border-white/5 pt-6">
                  <p className="text-xs text-slate-500">
                    {personal.shortName} — {personal.tagline}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
