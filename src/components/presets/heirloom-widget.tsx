import { CogEl, type Preset } from './_shared';

const Heirloom: Preset = {
  cog: 8,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-paper"
    >
      <div className="bg-burgundy rounded-[40%] p-8 shadow-inner relative">
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] text-burgundy">
          Acme &amp; Co. · Heirloom Series
        </span>
        <CogEl cog={8} className="text-silver" durationMs={3000} />
      </div>
    </div>
  ),
};

export default Heirloom;
