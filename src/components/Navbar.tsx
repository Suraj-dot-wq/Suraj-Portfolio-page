import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X, Cloud } from 'lucide-react';
import { personal, social } from '@/data/portfolio';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isPlaceholder = (url: string) =>
    url.startsWith('REPLACE_WITH_');

  const socialLinks = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${social.email}`, label: 'Email' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-navy-950/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-pad flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-base font-semibold text-white"
        >
          <Cloud className="h-5 w-5 text-electric-400" />
          <span>{personal.shortName}</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-electric-400'
                      : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop social icons */}
        <div className="hidden items-center gap-2 lg:flex">
          {socialLinks.map((s) =>
            isPlaceholder(s.url) ? null : (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:text-electric-400"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ),
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-white/5 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-navy-950/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-electric-500/10 text-electric-400'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-3 px-4">
              {socialLinks.map((s) =>
                isPlaceholder(s.url) ? null : (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-lg p-2 text-slate-400 transition-colors hover:text-electric-400"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ),
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
