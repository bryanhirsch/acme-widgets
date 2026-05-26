import { CogEl, type Preset } from './_shared';

const Lab: Preset = {
  cog: 8,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-white"
    >
      <CogEl cog={8} className="text-blueprint" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-blueprint/40" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-blueprint/40" />
      <span className="absolute bottom-3 right-3 bg-paper border border-ink/20 px-2 py-1 font-mono text-[9px] text-ink">
        NIST-TRACEABLE · CERT #__
      </span>
    </div>
  ),
};

export default Lab;
