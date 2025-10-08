import { ExternalLink, Github, Folder, Users, Clock, Calendar, Tag } from "lucide-react";
import { useState } from "react";
import type { Project, ProjectStatus } from "../../utils/projects";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const statusColors: Record<ProjectStatus, string> = {
		archived: 'bg-slate-500',
		inProgress: 'bg-emerald-500',
		active: 'bg-blue-500'
	};

	const statusLabels: Record<ProjectStatus, string> = {
		archived: 'Archived',
		inProgress: 'In Progress',
		active: 'Active'
	};

	return (
		<div
			className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{project.isFeatured && (
				<div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
					⭐ Featured
				</div>
			)}

			<div className="relative h-56 overflow-hidden bg-slate-700">
				<img
					src={project.imgSrc}
					alt={project.title}
					className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
				/>
				<div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

				<div className={`absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
					>
						<ExternalLink size={20} />
					</a>
					{project.repo && (
						<a
							href={project.repo}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
						>
							<Github size={20} />
						</a>
					)}
				</div>
			</div>

			<div className="p-6">
				<div className="flex items-start justify-between mb-3">
					<div>
						<h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
							{project.title}
						</h3>
						<p className="text-slate-400 text-sm">{project.descriptions}</p>
					</div>
					<span className={`${statusColors[project.status]} px-2 py-1 rounded-full text-xs text-white font-medium`}>
						{statusLabels[project.status]}
					</span>
				</div>

				<div className="flex flex-wrap gap-2 mb-4">
					{project.technologies.map((tech, idx) => (
						<span
							key={idx}
							className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30"
						>
							{tech}
						</span>
					))}
				</div>

				<div className="grid grid-cols-2 gap-3 text-xs text-slate-400 mb-4">
					<div className="flex items-center gap-2">
						<Folder size={14} className="text-cyan-400" />
						<span>{project.category}</span>
					</div>
					<div className="flex items-center gap-2">
						<Calendar size={14} className="text-cyan-400" />
						<span>{new Date(project.date).toLocaleDateString()}</span>
					</div>
					<div className="flex items-center gap-2">
						<Users size={14} className="text-cyan-400" />
						<span>Team: {project.teamSize}</span>
					</div>
					{project.duration && (
						<div className="flex items-center gap-2">
							<Clock size={14} className="text-cyan-400" />
							<span>{project.duration}</span>
						</div>
					)}
				</div>

				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag, idx) => (
						<span
							key={idx}
							className="flex items-center gap-1 bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
						>
							<Tag size={12} />
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;