import {
  Cog6ToothIcon as Cog6Solid,
  Cog8ToothIcon as Cog8Solid,
} from '@heroicons/react/24/solid';
import type { ReactNode } from 'react';

export type Cog = 6 | 8;

export type Preset = {
  cog: Cog;
  hero: ReactNode;
};

export const cogClass =
  'transition-transform ease-out group-hover:rotate-[360deg] motion-reduce:transition-none motion-reduce:group-hover:rotate-0 duration-[1600ms]';

export function CogEl({
  cog,
  className,
  durationMs,
  size = 'w-24 h-24',
}: {
  cog: Cog;
  className?: string;
  durationMs?: number;
  size?: string;
}) {
  const Icon = cog === 6 ? Cog6Solid : Cog8Solid;
  const style = durationMs ? { transitionDuration: `${durationMs}ms` } : undefined;
  return (
    <Icon
      aria-hidden="true"
      className={`${size} ${cogClass} ${className ?? ''}`}
      style={style}
    />
  );
}

export { Cog6Solid, Cog8Solid };
