'use client';

import { useEffect, useState } from 'react';

export default function PageLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600); // match animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isLoading ? 'page-load-blur' : ''}>
      {children}
    </div>
  );
}
