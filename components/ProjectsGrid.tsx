"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { badge, card, outlineButton } from "@/components/ui";
import { PROJECT_CATEGORIES, PROJECTS, type ProjectCategory } from "@/lib/content";

type Filter = "All" | ProjectCategory;

/** How many projects to show under "All" before "Show all projects". */
const INITIAL_COUNT = 6;

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const collapsed = filter === "All" && !showAll && filtered.length > INITIAL_COUNT;
  const visible = collapsed ? filtered.slice(0, INITIAL_COUNT) : filtered;

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap justify-center gap-3">
        {(["All", ...PROJECT_CATEGORIES] as Filter[]).map((category) => {
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? "border-[#00BFFF] bg-[#00BFFF] font-semibold text-black"
                  : "border-gray-700 text-gray-300 hover:border-[#00BFFF] hover:text-[#00BFFF]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.08} className={card}>
            <span className={badge}>{project.category}</span>
            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">{project.desc}</p>
          </Reveal>
        ))}
      </div>

      {collapsed && (
        <div className="mt-10 text-center">
          <button type="button" onClick={() => setShowAll(true)} className={outlineButton}>
            Show all {filtered.length} projects
          </button>
        </div>
      )}
    </>
  );
}
