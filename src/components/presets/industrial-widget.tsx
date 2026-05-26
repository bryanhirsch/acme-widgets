import { CogEl, type Preset } from './_shared';

const Industrial: Preset = {
  cog: 8,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-gunmetal/5"
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, transparent 0 8px, rgba(46,52,59,0.06) 8px 9px)',
      }}
    >
      {[
        'top-3 left-3',
        'top-3 right-3',
        'bottom-3 left-3',
        'bottom-3 right-3',
      ].map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} w-2 h-2 rounded-full bg-gunmetal`}
        />
      ))}
      <CogEl cog={8} className="text-gunmetal" />
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest text-gunmetal">
        RATED · 24/7 · MIL-SPEC
      </span>
    </div>
  ),
};

export default Industrial;
