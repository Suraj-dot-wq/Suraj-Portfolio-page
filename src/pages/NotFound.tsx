import { Link } from 'react-router-dom';
import { Home, Cloud } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 p-5 ring-1 ring-white/5">
          <Cloud className="h-12 w-12 text-electric-400" />
        </div>
        <h1 className="text-5xl font-bold text-white">404</h1>
        <p className="mt-4 text-base text-slate-400">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
