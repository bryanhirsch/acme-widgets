import { Link } from 'react-router';

const links = [
  { to: '/orders', label: 'Contact Us' },
  { to: '/pricing-page', label: 'Pricing' },
  { to: '/feedback-form', label: 'Feedback' },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10 bg-paper/80">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <nav aria-label="Footer" className="flex items-center gap-4 sm:gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-sans font-medium text-[13px] sm:text-[15px] text-ink-soft hover:text-ink transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="font-sans text-[12px] sm:text-[13px] text-ink-soft">
          &copy; {new Date().getFullYear()} Acme Widgets
        </p>
      </div>
    </footer>
  );
}
