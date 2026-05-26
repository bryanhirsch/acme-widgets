import { CogEl, type Preset } from './_shared';

const Copper: Preset = {
  cog: 6,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-parchment"
    >
      <span className="absolute inset-3 rounded-md border-2 border-copper/40" />
      <CogEl cog={6} className="text-copper" />
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-display uppercase text-[9px] tracking-wider text-copper">
        THE 1952 ACME CATALOG · NO. 0007
      </span>
    </div>
  ),
};

export default Copper;
