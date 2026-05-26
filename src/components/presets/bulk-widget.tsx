import { Cog6Solid, type Preset } from './_shared';

const Bulk: Preset = {
  cog: 6,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-parchment"
    >
      <Cog6Solid
        aria-hidden="true"
        className="absolute w-20 h-20 text-walnut/40 -translate-x-4 -translate-y-2 -rotate-6"
      />
      <Cog6Solid
        aria-hidden="true"
        className="absolute w-20 h-20 text-walnut/70"
      />
      <Cog6Solid
        aria-hidden="true"
        className="absolute w-20 h-20 text-walnut translate-x-4 translate-y-2 rotate-6 transition-transform duration-[1600ms] ease-out group-hover:rotate-[366deg] motion-reduce:group-hover:rotate-6"
      />
      <span className="absolute top-2 right-2 font-display font-black text-[20px] text-burgundy">
        × 25
      </span>
    </div>
  ),
};

export default Bulk;
