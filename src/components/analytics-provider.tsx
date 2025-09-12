"use client";

import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This effect ensures analytics is initialized on the client side.
    const initializeAnalytics = async () => {
        const analyticsInstance = await analytics;
        if (analyticsInstance) {
            // Analytics is supported and initialized
        }
    };
    initializeAnalytics();
  }, []);

  return <>{children}</>;
}
