// app/hooks/useRouteChangeDetector.ts
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function useRouteChangeDetector() {
  const pathname = usePathname();
  const previousPathRef = useRef<string | null>(null);
  const [routeChanged, setRouteChanged] = useState(false);


  useEffect(() => {
    if (previousPathRef.current && previousPathRef.current !== pathname) {
      setRouteChanged(true);
    } else {
      setRouteChanged(false);
    }


    previousPathRef.current = pathname;
  }, [pathname]);

  return {
    currentPath: pathname,
    previousPath: previousPathRef.current,
    routeChanged,
    setRouteChanged
  };
}
