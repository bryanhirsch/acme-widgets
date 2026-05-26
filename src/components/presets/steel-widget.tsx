import { CogEl, type Preset } from './_shared';

const Steel: Preset = {
  cog: 8,
  hero: (
    <div
      aria-hidden="true"
      className="relative h-[180px] flex items-center justify-center bg-blueprint"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent 0 15px, rgba(122,168,216,0.4) 15px 16px), repeating-linear-gradient(90deg, transparent 0 15px, rgba(122,168,216,0.4) 15px 16px)',
      }}
    >
      <CogEl cog={8} className="text-gunmetal" />
      <span className="absolute top-2 right-2 font-mono text-[9px] text-blueprint-line">
        0.001mm
      </span>
      <span className="absolute bottom-2 left-2 font-mono text-[9px] text-blueprint-line">
        |·|·|·|
      </span>
    </div>
  ),
};

export default Steel;
