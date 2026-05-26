import { CogEl, type Preset } from './_shared';

const Pocket: Preset = {
  cog: 6,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-paper"
    >
      <span className="absolute top-3 italic text-[10px] text-walnut">
        Travel-sized
      </span>
      <div className="rounded-2xl border-2 border-dashed border-walnut p-4">
        <CogEl cog={6} size="w-12 h-12" className="text-walnut" />
      </div>
    </div>
  ),
};

export default Pocket;
