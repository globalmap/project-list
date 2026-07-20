import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Crosshair } from "lucide-react";
import { ConfigProvider, Segmented, theme as antdTheme } from "antd";
import gsap from "gsap";
import { projects } from "./utils/projects";
import type { Project } from "./utils/projects";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectModal from "./components/ProjectModal/ProjectModal";

function App() {
	const [filter, setFilter] = useState<string>("all");
	const [activeProject, setActiveProject] = useState<Project | null>(null);
	const heroRef = useRef<HTMLDivElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);

	const categoryOptions = useMemo(() => {
		const counts = projects.reduce<Record<string, number>>((acc, p) => {
			acc[p.category] = (acc[p.category] || 0) + 1;
			return acc;
		}, {});
		return [
			{ label: `ALL · ${projects.length}`, value: "all" },
			...Object.keys(counts).map((cat) => ({ label: `${cat.toUpperCase()} · ${counts[cat]}`, value: cat })),
		];
	}, []);

	const filteredProjects: Project[] =
		filter === "all" ? projects : projects.filter((p) => p.category === filter);

	useLayoutEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const ctx = gsap.context(() => {
			gsap.from("[data-hero-line]", { scaleX: 0, transformOrigin: "left", duration: 1, ease: "power3.out" });
			gsap.from("[data-hero-fade]", {
				y: 16,
				opacity: 0,
				duration: 0.6,
				stagger: 0.08,
				ease: "power2.out",
				delay: 0.15,
			});
		}, heroRef);
		return () => ctx.revert();
	}, []);

	useLayoutEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				"[data-card]",
				{ opacity: 0, y: 24 },
				{ opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
			);
		}, gridRef);
		return () => ctx.revert();
	}, [filter]);

	return (
		<ConfigProvider
			theme={{
				algorithm: antdTheme.darkAlgorithm,
				token: {
					colorPrimary: "#ff5a2e",
					colorBgContainer: "#0f1b2e",
					colorBgElevated: "#0f1b2e",
					colorBorder: "rgba(150,180,220,0.18)",
					fontFamily: "Inter, sans-serif",
					borderRadius: 2,
				},
			}}
		>
			<div className="bp-grid min-h-screen bg-bp-950">
				<div ref={heroRef} className="mx-auto max-w-7xl px-4 pb-10 pt-20">
					<div data-hero-fade className="mb-6 flex items-center gap-2 text-draft">
						<Crosshair size={16} />
						<span className="font-mono-tight text-xs tracking-widest">FIELD ARCHIVE — WEB ENGINEERING</span>
					</div>

					<h1 data-hero-fade className="max-w-3xl font-mono-tight text-5xl font-bold text-paper sm:text-6xl">
						PROJECT INDEX
					</h1>

					<div data-hero-line className="mt-6 h-px w-full bg-line/25" />

					<div data-hero-fade className="mt-6 flex flex-wrap items-end justify-between gap-4">
						<p className="max-w-xl text-sm text-paper-dim">
							A catalogued record of shipped work — configurators, dashboards, and tools built across React,
							Three.js, and TypeScript. Click any entry for the full spec sheet.
						</p>
						<span className="font-mono-tight text-xs text-paper-dim">
							{String(projects.length).padStart(2, "0")} ENTRIES CATALOGUED
						</span>
					</div>
				</div>

				<div className="mx-auto max-w-7xl px-4 pb-8">
					<div className="bp-segmented-scroll">
						<Segmented
							className="bp-segmented"
							options={categoryOptions}
							value={filter}
							onChange={(val) => setFilter(val as string)}
						/>
					</div>
				</div>

				<div ref={gridRef} className="mx-auto max-w-7xl px-4 pb-24">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{filteredProjects.map((project, i) => (
							<ProjectCard
								key={project.id}
								project={project}
								index={i}
								total={filteredProjects.length}
								onOpen={setActiveProject}
							/>
						))}
					</div>

					{filteredProjects.length === 0 && (
						<div className="border border-dashed border-line/25 py-20 text-center">
							<p className="font-mono-tight text-sm text-paper-dim">NO MATCHING ENTRIES</p>
						</div>
					)}
				</div>

				<footer className="mx-auto max-w-7xl border-t border-line/15 px-4 py-6">
					<p className="font-mono-tight text-[11px] text-paper-dim/60">
						LAT 50.4501° N · LON 30.5234° E — END OF INDEX
					</p>
				</footer>
			</div>

			<ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
		</ConfigProvider>
	);
}

export default App;