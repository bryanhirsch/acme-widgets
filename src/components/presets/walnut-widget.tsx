import { CogEl, type Preset } from './_shared';

const Walnut: Preset = {
  cog: 6,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-walnut/15 overflow-hidden"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(90,59,34,0.18) 0 6px, rgba(179,106,61,0.10) 6px 14px, rgba(90,59,34,0.16) 14px 22px)',
      }}
    >
      <CogEl cog={6} className="text-walnut" />
      <span className="absolute bottom-2 right-2 font-display italic text-[10px] text-walnut">
        № __ / Vermont
      </span>
    </div>
  ),
};

export default Walnut;
