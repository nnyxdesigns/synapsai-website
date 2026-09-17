'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, Copy, Share2, X } from 'lucide-react';
import './article-share.css';

export function ArticleShare({ title, url }: { title: string; url: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [manual, setManual] = useState(false);
  const [busy, setBusy] = useState(false);
  const [nativeAvailable, setNativeAvailable] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const id = useId();
  useEffect(() => {
    if (manual) {
      field.current?.focus();
      field.current?.select();
    }
  }, [manual]);

  async function copy() {
    setStatus('');
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      await Promise.race([
        navigator.clipboard.writeText(url),
        new Promise<never>((_, reject) => {
          timer = setTimeout(() => reject(new Error('Clipboard timeout')), 1500);
        }),
      ]);
      setManual(false);
      setStatus('Link copied.');
    } catch {
      const previousFocus = document.activeElement;
      const fallback = document.createElement('textarea');
      fallback.value = url;
      fallback.readOnly = true;
      fallback.style.cssText = 'position:fixed;left:0;top:0;opacity:0;pointer-events:none';
      document.body.appendChild(fallback);
      fallback.focus();
      fallback.select();
      let copied = false;
      try {
        copied = document.execCommand('copy');
      } catch {
        /* Manual selection remains available. */
      } finally {
        fallback.remove();
        if (previousFocus instanceof HTMLElement) previousFocus.focus();
      }
      setManual(!copied);
      setStatus(
        copied ? 'Link copied.' : 'Select the link below and press Ctrl+C (Windows) or ⌘C (Mac).',
      );
    } finally {
      clearTimeout(timer);
    }
  }
  async function share() {
    setNativeAvailable(typeof navigator.share === 'function');
    setOpen(!open);
  }
  async function nativeShare() {
    if (!navigator.share) return;
    setBusy(true);
    try {
      await navigator.share({ title, url });
    } catch (error) {
      if (!(error instanceof Error && error.name === 'AbortError'))
        setStatus('Use one of the sharing options below, or copy the link.');
    } finally {
      setBusy(false);
    }
  }
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  return (
    <div
      className="article-sharing"
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          e.preventDefault();
          close();
        }
      }}
    >
      <div className="article-share-actions" role="group" aria-label="Share this article">
        <button ref={trigger} type="button" onClick={share} aria-expanded={open} aria-controls={id}>
          <Share2 size={15} aria-hidden="true" />
          Share article
        </button>
        <button type="button" onClick={copy}>
          {status === 'Link copied.' ? (
            <Check size={15} aria-hidden="true" />
          ) : (
            <Copy size={15} aria-hidden="true" />
          )}
          {status === 'Link copied.' ? 'Link copied!' : 'Copy link'}
        </button>
      </div>
      <p className="article-share-status" role="status">
        {status}
      </p>
      {manual && (
        <label className="article-share-manual">
          Article link
          <input ref={field} readOnly value={url} onFocus={(e) => e.currentTarget.select()} />
        </label>
      )}
      <div id={id} hidden={!open} className="article-share-panel">
        <div className="article-share-panel-heading">
          <span>Share this article</span>
          <button type="button" onClick={close} aria-label="Close sharing options">
            <X size={16} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Article sharing options">
          {nativeAvailable && (
            <button type="button" onClick={nativeShare} disabled={busy}>
              More sharing options
            </button>
          )}
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            LinkedIn
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp (opens in a new tab)"
          >
            WhatsApp
          </a>
          <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}>
            Email
          </a>
        </nav>
      </div>
    </div>
  );
}
