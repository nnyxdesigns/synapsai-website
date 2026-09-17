'use client';
import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { Locale, solutions } from '@/lib/site';
export function ContactForm({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';
  const [draft, setDraft] = useState<{ href: string; body: string } | null>(null);
  const [copied, setCopied] = useState(false);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `[SynapsAi] ${form.get('need')} — ${form.get('organization') || form.get('name')}`;
    const body = `${fr ? 'Nom' : 'Name'}: ${form.get('name')}\nEmail: ${form.get('email')}\n${fr ? 'Organisation' : 'Organization'}: ${form.get('organization') || '—'}\n\n${form.get('message')}`;
    setDraft({
      href: `mailto:contact@synapsai.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      body: `${subject}\n\n${body}`,
    });
    setCopied(false);
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      onChange={() => {
        setDraft(null);
        setCopied(false);
      }}
    >
      <div className="form-row">
        <label>
          {fr ? 'Votre nom' : 'Your name'} <span>*</span>
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder={fr ? 'Prénom et nom' : 'First and last name'}
          />
        </label>
        <label>
          {fr ? 'E-mail professionnel' : 'Work email'} <span>*</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder={fr ? 'vous@entreprise.com' : 'you@company.com'}
          />
        </label>
      </div>
      <label>
        {fr ? 'Organisation' : 'Organization'} <small>({fr ? 'facultatif' : 'optional'})</small>
        <input
          name="organization"
          autoComplete="organization"
          maxLength={150}
          placeholder={fr ? 'Votre entreprise ou organisation' : 'Your company or organization'}
        />
      </label>
      <label>
        {fr ? 'Comment pouvons-nous vous aider ?' : 'What can we help you with?'} <span>*</span>
        <select name="need" required defaultValue="">
          <option value="" disabled>
            {fr ? 'Choisir un sujet' : 'Select a topic'}
          </option>
          {solutions[locale].map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>{fr ? 'Partenariat' : 'Partnership'}</option>
          <option>{fr ? 'Autre' : 'Other'}</option>
        </select>
      </label>
      <label>
        {fr ? 'Parlez-nous de votre projet' : 'Tell us about your project'} <span>*</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          placeholder={
            fr
              ? 'Que souhaitez-vous construire ou améliorer ?'
              : 'What would you like to build or improve?'
          }
        />
      </label>
      <p className="form-note">
        <Mail size={17} />
        {fr
          ? 'Préparez votre message, puis envoyez-le depuis votre messagerie. Aucune donnée de ce formulaire n’est enregistrée sur le site.'
          : 'Prepare your message, then send it from your email app. This form does not save your information on the website.'}
      </p>
      <button type="submit" className="button button-dark">
        {fr ? 'Préparer mon e-mail' : 'Prepare my email'}
        <ArrowUpRight size={17} />
      </button>
      {draft && (
        <div className="email-draft" role="status">
          <strong>{fr ? 'Votre message est prêt.' : 'Your message is ready.'}</strong>
          <p>
            {fr
              ? 'Il n’a pas encore été envoyé. Ouvrez votre messagerie pour l’envoyer à contact@synapsai.co.'
              : 'It has not been sent yet. Open your email app to send it to contact@synapsai.co.'}
          </p>
          <a href={draft.href} className="button button-dark">
            {fr ? 'Ouvrir ma messagerie' : 'Open my email app'}
            <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            className="text-link copy-button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(draft.body);
                setCopied(true);
              } catch {
                setCopied(false);
              }
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}{' '}
            {copied ? (fr ? 'Copié' : 'Copied') : fr ? 'Copier le message' : 'Copy message'}
          </button>
          <details>
            <summary>{fr ? 'Afficher le message' : 'View message'}</summary>
            <pre>{draft.body}</pre>
          </details>
        </div>
      )}
    </form>
  );
}
