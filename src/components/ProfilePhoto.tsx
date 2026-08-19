import { useEffect, useState } from 'react';
import { UserRound, Upload } from 'lucide-react';
import { personal } from '@/data/portfolio';

/**
 * Renders the profile photo. If the image file is not found at the configured
 * path, displays a clean placeholder with instructions instead.
 */
export default function ProfilePhoto({
  className = '',
}: {
  className?: string;
}) {
  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => !cancelled && setExists(true);
    img.onerror = () => !cancelled && setExists(false);
    img.src = personal.photoPath;
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className={`group relative flex items-center justify-center ${className}`}
    >
      <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-[2rem]">
        {exists === true && (
          <img
            src={personal.photoPath}
            alt={`${personal.shortName} — professional photo`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}

        {exists === false && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <UserRound className="h-10 w-10 text-electric-400" />
            </div>
            <p className="text-sm font-medium text-slate-200">
              Profile photo coming soon
            </p>
            <p className="flex items-center gap-1.5 text-xs text-slate-400">
              <Upload className="h-3.5 w-3.5" />
              Add your photo to the public images folder
            </p>
          </div>
        )}

        {exists === null && (
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-10 w-10 animate-pulse rounded-full border-2 border-electric-500/30 border-t-electric-400" />
          </div>
        )}
      </div>

    </div>
  );
}
