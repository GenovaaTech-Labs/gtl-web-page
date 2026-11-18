import {
  BrainCircuit,
  Code,
  Cpu,
  Gauge,
  GraduationCap,
  Handshake,
  Lightbulb,
  Presentation,
  Users,
  Wifi,
  Wrench,
  type LucideProps,
} from "lucide-react";

/** Icons referenced by name from lib/content.ts. Add new ones here to use them in content. */
export const ICONS = {
  brain: BrainCircuit,
  code: Code,
  cpu: Cpu,
  gauge: Gauge,
  graduation: GraduationCap,
  handshake: Handshake,
  lightbulb: Lightbulb,
  presentation: Presentation,
  users: Users,
  wifi: Wifi,
  wrench: Wrench,
};

export type IconName = keyof typeof ICONS;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = ICONS[name];
  return <Component aria-hidden="true" {...props} />;
}
