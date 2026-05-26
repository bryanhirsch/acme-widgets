import { CogEl, type Preset } from './_shared';

const Sparkle: Preset = {
  cog: 6,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-paper overflow-hidden"
    >
      {[
        ['top-3', 'left-4', 'bg-sparkle-pink'],
        ['top-6', 'right-6', 'bg-brass-400'],
        ['top-12', 'left-12', 'bg-evergreen'],
        ['bottom-4', 'right-3', 'bg-sparkle-pink'],
        ['bottom-6', 'left-6', 'bg-gold'],
        ['bottom-10', 'right-12', 'bg-burgundy'],
        ['top-2', 'right-1/3', 'bg-blueprint'],
        ['bottom-2', 'left-1/3', 'bg-copper'],
        ['top-1/3', 'left-2', 'bg-gold'],
        ['top-1/2', 'right-2', 'bg-sparkle-pink'],
        ['top-1/4', 'right-1/4', 'bg-evergreen'],
        ['bottom-1/4', 'left-1/4', 'bg-brass-400'],
      ].map(([top, left, color], i) => (
        <span
          key={i}
          className={`absolute ${top} ${left} w-1.5 h-1.5 rounded-full ${color}`}
        />
      ))}
      <CogEl cog={6} className="text-sparkle-pink" durationMs={1000} />
    </div>
  ),
};

export default Sparkle;
