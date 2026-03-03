'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the tools page
    router.replace('/tools');
  }, [router]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div className="spinner" style={{ margin: '0 auto 1.5rem' }} />
        <p style={{ color: 'var(--muted-foreground)' }}>Redirecting to tools...</p>
      </div>
    </div>
  );
}
