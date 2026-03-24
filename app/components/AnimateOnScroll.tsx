'use client';

import { useRef, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimateOnScroll({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${hasAnimated ? 'animate-fade-in-up' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
