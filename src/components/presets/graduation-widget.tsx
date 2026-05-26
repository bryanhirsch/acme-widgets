import { CogEl, type Preset } from './_shared';

const Graduation: Preset = {
  cog: 8,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex flex-col items-center justify-center bg-paper"
    >
      <div className="relative">
        <span className="absolute -top-3 -left-3 w-6 h-2 bg-ink rotate-12 origin-bottom-left" />
        <span className="absolute -top-1 -left-3 w-px h-4 bg-brass-600 rotate-[20deg] origin-top" />
        <CogEl cog={8} className="text-ink" />
      </div>
      <span className="mt-2 font-display italic text-[10px] text-ink-soft">
        CLASS OF ____
      </span>
    </div>
  ),
};

export default Graduation;
