import { describe, expect, it } from 'vitest';
import { standardPreset, widgetPresets } from './widgetPresets';

const EXPECTED_ICONS = [
  'brass-widget.svg',
  'bulk-widget.svg',
  'copper-widget.svg',
  'evergreen-widget.svg',
  'gold-widget.svg',
  'graduation-widget.svg',
  'heirloom-widget.svg',
  'industrial-widget.svg',
  'lab-widget.svg',
  'pocket-widget.svg',
  'rainbow-widget.svg',
  'sparkle-widget.svg',
  'standard-widget.svg',
  'steel-widget.svg',
  'walnut-widget.svg',
];

describe('widgetPresets auto-discovery', () => {
  it('every discovered entry has the Preset shape', () => {
    for (const [key, preset] of Object.entries(widgetPresets)) {
      expect(key, `${key} should end in .svg`).toMatch(/\.svg$/);
      expect([6, 8]).toContain(preset.cog);
      expect(preset.hero).toBeDefined();
    }
  });

  it('exposes an entry for every icon referenced by the catalog', () => {
    for (const icon of EXPECTED_ICONS) {
      expect(widgetPresets[icon], `${icon} missing from registry`).toBeDefined();
    }
  });

  it('does not leak underscore-prefixed internal modules into the registry', () => {
    expect(widgetPresets['_standard.svg']).toBeUndefined();
    expect(widgetPresets['_shared.svg']).toBeUndefined();
  });

  it('exports a standardPreset fallback', () => {
    expect(standardPreset.cog).toBe(6);
    expect(standardPreset.hero).toBeDefined();
  });
});
