"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { PROJECT_CATEGORIES, PROJECTS, type ProjectCategory } from "@/lib/content";

type Filter = "All" | ProjectCategory;

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-3 mb-12">
        {(["All", ...PROJECT_CATEGORIES] as Filter[]).map((category) => {
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                active
                  ? "bg-[#00BFFF] text-black border-[#00BFFF] font-semibold"
                  : "border-gray-700 text-gray-300 hover:border-[#00BFFF] hover:text-[#00BFFF]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
        {visible.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 4) * 0.08}
            className="flex flex-col p-6 bg-[#0B1120] rounded-xl border border-gray-800 hover:border-[#00BFFF] hover:-translate-y-1 transition duration-300"
          >
            <span className="self-start text-xs font-medium text-[#00BFFF] bg-[#00BFFF]/10 rounded-full px-3 py-1">
              {project.category}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-400 leading-6">{project.desc}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}
