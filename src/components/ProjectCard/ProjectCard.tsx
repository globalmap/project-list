import { ExternalLink, Github, Users, Calendar, Clock, Tag } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import type { Project, ProjectStatus } from "../../utils/projects";
import CornerTicks from "../CornerTicks/CornerTicks";

interface ProjectCardProps {
	project: Project;
	index: number;
	total: number;
	onOpen: (project: Project) => void;
}

const statusMeta: Record<ProjectStatus, { label: string; dot: string; ring: string }> = {
	archived: { label: "ARCHIVED", dot: "bg-paper-dim", ring: "border-paper-dim/40" },
	inProgress: { label: "IN PROGRESS", dot: "bg-accent", ring: "border-accent/50" },
	active: { label: "LIVE", dot: "bg-draft", ring: "border-draft/50" },
	complete: { label: "COMPLETE", dot: "bg-complete", ring: "border-complete/50" },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total, onOpen }) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const sweepRef = useRef<HTMLDivElement>(null);
	const meta = statusMeta[project.status];
	const serial = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

	const prefersReducedMotion = () =>
		typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	const handleEnter = () => {
		if (prefersReducedMotion() || !cardRef.current) return;
		gsap.to(cardRef.current, { y: -6, duration: 0.35, ease: "power2.out" });
		if (sweepRef.current) {
			gsap.fromTo(sweepRef.current, { xPercent: -130 }, { xPercent: 130, duration: 0.9, ease: "power2.out" });
		}
	};

	const handleLeave = () => {
		if (!cardRef.current) return;
		gsap.to(cardRef.current, { y: 0, duration: 0.35, ease: "power2.out" });
	};

	return (
		<div
			ref={cardRef}
			data-card
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
			onClick={() => onOpen(project)}
			className="group relative cursor-pointer overflow-hidden border border-line/15 bg-bp-900"
		>
			<CornerTicks />

			{/* Header strip: serial + status stamp */}
			<div className="flex items-center justify-between border-b border-line/15 px-4 py-2">
				<span className="font-mono-tight text-[11px] text-paper-dim">NO. {serial}</span>
				<span className={`flex items-center gap-1.5 border px-2 py-0.5 font-mono-tight text-[10px] ${meta.ring}`}>
					<span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
					{meta.label}
				</span>
			</div>

			{project.isFeatured && (
				<div className="absolute right-3 top-10 z-10 -rotate-6 border border-accent px-2 py-0.5 font-mono-tight text-[10px] text-accent">
					FEATURED
				</div>
			)}

			{/* Image */}
			<div className="relative h-52 overflow-hidden bg-bp-800">
				<img
					src={project.imgSrc}
					alt={project.title}
					className="h-full w-full object-cover opacity-90 grayscale-[35%] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
				/>
				<div
					ref={sweepRef}
					className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-draft/15 to-transparent"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-bp-950 via-transparent to-transparent opacity-60" />

				<div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					{project.link && (
						<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()}
						className="flex items-center gap-1 border border-paper/30 bg-bp-950/80 px-3 py-1.5 font-mono-tight text-[11px] text-paper hover:border-accent hover:text-accent"
					>
						<ExternalLink size={13} /> VIEW
					</a>
					)}
					{project.repo && (
						<a
							href={project.repo}
							target="_blank"
							rel="noopener noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="flex items-center gap-1 border border-paper/30 bg-bp-950/80 px-3 py-1.5 font-mono-tight text-[11px] text-paper hover:border-accent hover:text-accent"
						>
							<Github size={13} /> CODE
						</a>
					)}
				</div>
			</div>

			{/* Body */}
			<div className="p-5">
				<h3 className="text-lg font-bold text-paper transition-colors group-hover:text-draft">{project.title}</h3>
				<p className="mt-1 text-sm text-paper-dim">{project.descriptions}</p>

				<div className="mt-4 flex flex-wrap gap-1.5">
					{project.technologies.map((tech) => (
						<span key={tech} className="border border-draft/25 px-2 py-0.5 font-mono-tight text-[10px] text-draft">
							{tech}
						</span>
					))}
				</div>

				<div className="mt-4 grid grid-cols-2 gap-y-2 border-t border-line/15 pt-3 text-xs text-paper-dim">
					<span className="flex items-center gap-1.5">
						<Calendar size={12} /> {new Date(project.date).toLocaleDateString()}
					</span>
					<span className="flex items-center gap-1.5">
						<Users size={12} /> Team {project.teamSize}
					</span>
					{project.duration && (
						<span className="flex items-center gap-1.5">
							<Clock size={12} /> {project.duration}
						</span>
					)}
					<span className="flex items-center gap-1.5 truncate">
						<Tag size={12} /> {project.category}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;