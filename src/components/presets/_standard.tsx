import { CogEl, type Preset } from './_shared';

const Standard: Preset = {
  cog: 6,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-paper"
    >
      <span className="absolute inline-block w-32 h-32 rounded-full border border-ink/15" />
      <CogEl cog={6} className="text-ink-soft" />
      <span className="absolute bottom-3 font-sans text-[10px] tracking-widest text-ink-soft">
        STANDARD ISSUE
      </span>
    </div>
  ),
};

export default Standard;
