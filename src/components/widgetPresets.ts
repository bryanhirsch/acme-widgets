import standardPreset from './presets/_standard';
import type { Preset } from './presets/_shared';

const modules = import.meta.glob<{ default: Preset }>(
  './presets/[a-z]*.tsx',
  { eager: true },
);

export const widgetPresets: Record<string, Preset> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const key = path.replace(/^\.\/presets\//, '').replace(/\.tsx$/, '');
    return [`${key}.svg`, mod.default];
  }),
);

export { standardPreset };
export type { Preset };
