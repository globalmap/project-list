const CornerTicks: React.FC<{ color?: string }> = ({ color = "border-draft/40" }) => (
	<>
		<span className={`pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t ${color}`} />
		<span className={`pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t ${color}`} />
		<span className={`pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l ${color}`} />
		<span className={`pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r ${color}`} />
	</>
);

export default CornerTicks;