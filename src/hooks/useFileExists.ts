import { useEffect, useState } from 'react';

/**
 * Checks whether a static file in /public exists by issuing a HEAD request.
 * Returns { loading, exists }.
 */
export default function useFileExists(filePath: string) {
  const [state, setState] = useState<{
    loading: boolean;
    exists: boolean;
  }>({ loading: true, exists: false });

  useEffect(() => {
    let cancelled = false;
    setState({ loading: true, exists: false });

    fetch(filePath, { method: 'HEAD' })
      .then((res) => {
        if (cancelled) return;
        const ok = res.ok && res.status !== 404;
        setState({ loading: false, exists: ok });
      })
      .catch(() => {
        if (cancelled) return;
        setState({ loading: false, exists: false });
      });

    return () => {
      cancelled = true;
    };
  }, [filePath]);

  return state;
}
