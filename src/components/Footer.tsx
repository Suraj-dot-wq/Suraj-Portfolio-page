import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Cloud } from 'lucide-react';
import { personal, social } from '@/data/portfolio';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  const isPlaceholder = (url: string) => url.startsWith('REPLACE_WITH_');

  const socials = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${social.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-white/5 bg-navy-950/50">
      <div className="container-pad px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          {/* Identity */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center justify-center gap-2 text-lg font-semibold text-white md:justify-start">
              <Cloud className="h-5 w-5 text-electric-400" />
              {personal.shortName}
            </Link>
            <p className="mt-2 text-sm text-slate-400">{personal.tagline}</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="text-sm text-slate-400 transition-colors hover:text-electric-400"
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) =>
              isPlaceholder(s.url) ? null : (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-lg border border-white/10 p-2.5 text-slate-400 transition-all hover:border-electric-500/40 hover:text-electric-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ),
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © 2026 Suraj Ghadage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
