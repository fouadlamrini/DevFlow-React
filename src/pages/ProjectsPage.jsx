const projectRows = [
  { name: "Website Redesign", status: "In Progress", progress: "68%" },
  { name: "Mobile App UI", status: "Planning", progress: "25%" },
  { name: "Marketing Campaign", status: "Done", progress: "100%" },
]

function ProjectsPage() {
  return (
    <section className="space-y-4 p-4">
      <div className="rounded-lg border border-border bg-card p-4">
        <h2 className="text-lg font-semibold">Projects List</h2>
        <p className="text-sm text-muted-foreground">
          A quick view of your active project pipelines.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-card">
        <div className="grid grid-cols-3 border-b border-border px-4 py-3 text-sm font-medium text-muted-foreground">
          <p>Project</p>
          <p>Status</p>
          <p>Progress</p>
        </div>
        {projectRows.map((project) => (
          <div
            key={project.name}
            className="grid grid-cols-3 border-b border-border px-4 py-3 text-sm last:border-b-0"
          >
            <p className="font-medium">{project.name}</p>
            <p>{project.status}</p>
            <p>{project.progress}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
