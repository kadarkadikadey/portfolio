"use client";
import { ReactLenis } from '@studio-freight/react-lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // We cast ReactLenis to 'any' to stop the React 18/19 type conflict
  const LenisComponent = ReactLenis as any;

  return (
    <LenisComponent root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </LenisComponent>
  )
}