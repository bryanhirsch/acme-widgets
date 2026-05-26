import { CogEl, type Preset } from './_shared';

const Brass: Preset = {
  cog: 6,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-[radial-gradient(ellipse_at_center,#FBF7EF_0%,#FBF1D8_100%)]"
    >
      <span className="absolute top-3 left-1/2 -translate-x-1/2 font-display italic text-[8px] tracking-widest text-brass-700/70">
        ACME · EST. 1952 · BRASS
      </span>
      <CogEl
        cog={6}
        className="text-brass-600 drop-shadow-[0_2px_0_rgba(255,255,255,0.4)]"
      />
    </div>
  ),
};

export default Brass;
