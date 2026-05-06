import { Link, useLoaderData, useRouteError } from 'react-router';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import type { Widget } from '../lib/widgets';
import { fetchWidgets } from '../lib/widgets';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export async function pricingLoader(): Promise<Widget[]> {
  return fetchWidgets();
}

export function PricingHydrateFallback() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <header>
        <h1 className="font-display font-black text-[44px] text-ink">
          Pricing
        </h1>
        <p className="font-sans text-[16px] text-ink-soft mt-2">
          Loading prices…
        </p>
      </header>
    </section>
  );
}

export function PricingRouteError() {
  const error = useRouteError();
  const isDev = import.meta.env.DEV;
  const detail = isDev && error instanceof Error ? error.message : null;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-display font-black text-[44px] text-ink">
        Pricing is temporarily unavailable
      </h1>
      <p className="font-sans text-[16px] text-ink-soft mt-4 max-w-prose">
        We couldn&rsquo;t load prices right now. Please try again in a few
        minutes.
      </p>
      {detail && (
        <pre className="mt-6 max-w-prose whitespace-pre-wrap rounded bg-ink/5 p-3 font-mono text-[12px] text-ink-soft">
          {detail}
        </pre>
      )}
      <div className="mt-8">
        <Link
          to="/"
          className="bg-brass-600 hover:bg-brass-700 text-paper font-sans font-semibold text-[16px] px-6 py-3 rounded-full shadow-md transition"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default function Pricing() {
  useDocumentTitle('Pricing — Acme Widgets');

  const widgets = useLoaderData() as Widget[];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <header>
        <h1 className="font-display font-black text-[44px] text-ink">
          Pricing
        </h1>
        <p className="font-sans text-[16px] text-ink-soft mt-2 max-w-prose">
          Every widget in the catalog, with current list prices. Bulk and
          institutional discounts available — see{' '}
          <Link to="/orders" className="underline hover:text-ink">
            ordering
          </Link>
          .
        </p>
      </header>

      {widgets.length === 0 ? (
        <p className="mt-12 font-display text-[20px] text-ink-soft">
          No widgets available.
        </p>
      ) : (
        <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-paper">
          <table className="w-full">
            <thead className="bg-ink/[0.03] border-b border-ink/10">
              <tr>
                <th
                  scope="col"
                  className="text-left font-sans font-semibold text-[12px] uppercase tracking-wider text-ink-soft px-5 py-3"
                >
                  Widget
                </th>
                <th
                  scope="col"
                  className="hidden sm:table-cell text-left font-sans font-semibold text-[12px] uppercase tracking-wider text-ink-soft px-5 py-3"
                >
                  Categories
                </th>
                <th
                  scope="col"
                  className="text-right font-sans font-semibold text-[12px] uppercase tracking-wider text-ink-soft px-5 py-3"
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {widgets.map((w, i) => (
                <tr
                  key={w.type}
                  className={
                    i === widgets.length - 1
                      ? ''
                      : 'border-b border-ink/[0.07]'
                  }
                >
                  <td className="px-5 py-4 align-top">
                    <div className="font-display font-bold text-[16px] text-ink">
                      {w.type}
                    </div>
                    <div className="mt-1 font-sans text-[13px] text-ink-soft line-clamp-2">
                      {w.description}
                    </div>
                  </td>
                  <td className="hidden sm:table-cell px-5 py-4 align-top">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-ink-soft">
                      {w.categories.join(' · ')}
                    </span>
                  </td>
                  <td className="px-5 py-4 align-top text-right font-sans font-semibold text-[16px] text-ink tabular-nums whitespace-nowrap">
                    {currency.format(w.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
