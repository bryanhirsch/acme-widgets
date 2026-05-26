import { XMarkIcon } from '@heroicons/react/24/solid';
import { CogEl, type Preset } from './_shared';

const Evergreen: Preset = {
  cog: 8,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #1F4D3A 0%, #0F2E22 100%)',
      }}
    >
      <XMarkIcon className="absolute top-3 left-3 w-6 h-6 text-paper/40 rotate-45" />
      <XMarkIcon className="absolute bottom-3 right-3 w-6 h-6 text-paper/40 rotate-45" />
      <CogEl
        cog={8}
        className="text-evergreen drop-shadow-[0_0_3px_#D4AF37]"
      />
    </div>
  ),
};

export default Evergreen;
