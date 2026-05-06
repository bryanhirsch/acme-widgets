import { useDocumentTitle } from '../hooks/useDocumentTitle';

const FORM_SRC =
  'https://docs.google.com/forms/d/e/1FAIpQLSddnFZB_b2EoUSNlQ2ZwL25-H-YKxzodjsU4GcfdDzfY-N8Lw/viewform?embedded=true';

export default function Feedback() {
  useDocumentTitle('Feedback — Acme Widgets');

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <header>
        <h1 className="font-display font-black text-[44px] text-ink">
          Feedback
        </h1>
        <p className="font-sans text-[16px] text-ink-soft mt-2 max-w-prose">
          Tell us what&rsquo;s working, what isn&rsquo;t, and which widget
          you&rsquo;d like to see next. We read every response.
        </p>
      </header>

      <div className="mt-8 rounded-2xl border border-ink/10 bg-paper overflow-hidden">
        <iframe
          src={FORM_SRC}
          title="Acme Widgets feedback form"
          width={640}
          height={552}
          className="block w-full max-w-full border-0"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}
