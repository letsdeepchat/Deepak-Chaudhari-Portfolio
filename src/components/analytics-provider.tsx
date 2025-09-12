"use client";

import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This effect ensures analytics is initialized on the client side.
    if (analytics) {
      // You can log custom events here if needed in the future
    }
  }, []);

  return <>{children}</>;
}
