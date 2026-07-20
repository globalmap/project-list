import { Modal } from "antd";
import { ExternalLink, Github, Users, Calendar, Clock, Folder } from "lucide-react";
import type { Project } from "../../utils/projects";

interface ProjectModalProps {
	project: Project | null;
	onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
	return (
		<Modal
			open={!!project}
			onCancel={onClose}
			footer={null}
			width={640}
			className="bp-modal"
			destroyOnHidden
		>
			{project && (
				<div>
					<div className="relative h-56 overflow-hidden bg-bp-800">
						<img src={project.imgSrc} alt={project.title} className="h-full w-full object-cover" />
						<div className="absolute inset-0 bg-gradient-to-t from-bp-900 via-transparent to-transparent" />
					</div>

					<div className="p-6">
						<span className="font-mono-tight text-[11px] text-draft">{project.category.toUpperCase()}</span>
						<h2 className="mt-1 text-2xl font-bold text-paper">{project.title}</h2>
						<p className="mt-2 text-sm leading-relaxed text-paper-dim">{project.descriptions}</p>

						<div className="mt-5 grid grid-cols-2 gap-3 border-y border-line/15 py-4 text-xs text-paper-dim sm:grid-cols-4">
							<span className="flex items-center gap-1.5">
								<Calendar size={13} /> {new Date(project.date).toLocaleDateString()}
							</span>
							<span className="flex items-center gap-1.5">
								<Users size={13} /> Team {project.teamSize}
							</span>
							{project.duration && (
								<span className="flex items-center gap-1.5">
									<Clock size={13} /> {project.duration}
								</span>
							)}
							<span className="flex items-center gap-1.5">
								<Folder size={13} /> {project.client}
							</span>
						</div>

						<div className="mt-4 flex flex-wrap gap-1.5">
							{project.technologies.map((tech) => (
								<span key={tech} className="border border-draft/25 px-2 py-0.5 font-mono-tight text-[10px] text-draft">
									{tech}
								</span>
							))}
						</div>

						<div className="mt-3 flex flex-wrap gap-1.5">
							{project.tags.map((tag) => (
								<span key={tag} className="bg-bp-800 px-2 py-0.5 font-mono-tight text-[10px] text-paper-dim">
									#{tag}
								</span>
							))}
						</div>

						<div className="mt-6 flex gap-3">
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 border border-accent bg-accent px-4 py-2 font-mono-tight text-xs text-bp-950 hover:bg-accent-dim"
							>
								<ExternalLink size={14} /> VIEW PROJECT
							</a>
							{project.repo && (
								<a	
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 border border-paper/30 px-4 py-2 font-mono-tight text-xs text-paper hover:border-draft hover:text-draft"
								>
									<Github size={14} /> SOURCE
								</a>
							)}
						</div>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default ProjectModal;