'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const MIN_BOOT_DURATION = 4000;
const MAX_BOOT_DURATION = 4600;
const BEAT_DURATION = 1500;
const DOT_SPACING = 26;

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const gridRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let timer: number | undefined;
    let safetyTimer: number | undefined;
    let animationFrame: number | undefined;
    let loadHandler: (() => void) | undefined;
    const navigation = performance.getEntriesByType('navigation')[0] as
      PerformanceNavigationTiming | undefined;
    const startedAt = navigation?.responseEnd || performance.now();
    const canvas = gridRef.current;
    const context = canvas?.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const drawWave = (now: number) => {
      if (!canvas || !context) return;
      const { width, height } = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      const targetWidth = Math.round(width * pixelRatio);
      const targetHeight = Math.round(height * pixelRatio);
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      if (reducedMotion) return;

      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.hypot(centerX, centerY);
      const originRadius = Math.min(150, width * 0.3);
      const phase = ((now - startedAt) % BEAT_DURATION) / BEAT_DURATION;
      const waveRadius = originRadius + phase * (maxRadius - originRadius);
      const bandWidth = Math.max(90, Math.min(width, height) * 0.14);
      const offsetX = ((centerX % DOT_SPACING) + DOT_SPACING) % DOT_SPACING;
      const offsetY = ((centerY % DOT_SPACING) + DOT_SPACING) % DOT_SPACING;

      for (let x = offsetX; x <= width; x += DOT_SPACING) {
        for (let y = offsetY; y <= height; y += DOT_SPACING) {
          const distance = Math.hypot(x - centerX, y - centerY);
          const proximity = Math.max(0, 1 - Math.abs(distance - waveRadius) / bandWidth);
          if (proximity === 0) continue;
          const decay = Math.max(0.24, 1 - (distance / maxRadius) * 0.76);
          const intensity = proximity * proximity * decay;
          const radius = 1.15 + intensity * 2.1;

          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fillStyle = `rgba(153, 255, 232, ${0.22 + intensity * 0.78})`;
          context.shadowColor = `rgba(94, 255, 217, ${intensity * 0.7})`;
          context.shadowBlur = 7 * intensity;
          context.fill();
        }
      }
      context.shadowBlur = 0;
      animationFrame = requestAnimationFrame(drawWave);
    };

    animationFrame = requestAnimationFrame(drawWave);

    const hide = () => {
      window.clearTimeout(timer);
      window.clearTimeout(safetyTimer);
      setVisible(false);
    };

    const scheduleInitialHide = () => {
      const remaining = Math.max(0, MIN_BOOT_DURATION - (performance.now() - startedAt));
      timer = window.setTimeout(hide, remaining);
    };

    try {
      safetyTimer = window.setTimeout(hide, MAX_BOOT_DURATION);
      if (document.readyState === 'complete') {
        requestAnimationFrame(scheduleInitialHide);
      } else {
        loadHandler = scheduleInitialHide;
        window.addEventListener('load', loadHandler, { once: true });
      }
    } catch {
      requestAnimationFrame(hide);
    }

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(safetyTimer);
      if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
      if (loadHandler) window.removeEventListener('load', loadHandler);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading SynapsAi">
      <canvas className="page-loader-grid" ref={gridRef} aria-hidden="true" />
      <div className="page-loader-core">
        <Image
          src="/media/brand/synapsai-logo.svg"
          alt="SynapsAi"
          width={135}
          height={31}
          priority
        />
        <div className="page-loader-signal" aria-hidden="true">
          <span />
        </div>
        <span className="page-loader-label">SYSTEMS / CONNECTED</span>
      </div>
    </div>
  );
}
