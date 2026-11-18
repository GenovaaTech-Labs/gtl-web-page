import type { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Optional subtitle paragraph. */
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#00BFFF]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {children && <p className="mt-4 leading-7 text-gray-400">{children}</p>}
    </div>
  );
}
