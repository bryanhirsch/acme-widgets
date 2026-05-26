import { CogEl, type Preset } from './_shared';

const Gold: Preset = {
  cog: 8,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-end justify-center"
      style={{
        background: 'linear-gradient(180deg, #FBF7EF 0%, #EFEDE6 100%)',
      }}
    >
      <CogEl
        cog={8}
        className="text-gold drop-shadow-[0_2px_3px_rgba(212,175,55,0.5)] mb-6"
      />
      <span className="absolute bottom-3 w-32 h-3 rounded-full bg-marble shadow-md" />
    </div>
  ),
};

export default Gold;
