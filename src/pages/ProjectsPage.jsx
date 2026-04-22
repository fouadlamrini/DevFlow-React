import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { getProjects } from "@/services/fakeApi"

function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    let isMounted = true

    async function loadProjects() {
      try {
        const data = await getProjects()
        if (isMounted) setProjects(data)
      } catch {
        if (isMounted) setError("Failed to load projects.")
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadProjects()
    return () => {
      isMounted = false
    }
  }, [])

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
        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="grid grid-cols-3 border-b border-border px-4 py-3 last:border-b-0"
            >
              <Skeleton className="h-5 w-32 bg-muted" />
              <Skeleton className="h-5 w-24 bg-muted" />
              <Skeleton className="h-5 w-16 bg-muted" />
            </div>
          ))}
        {!isLoading && error && <p className="p-4 text-sm text-destructive">{error}</p>}
        {!isLoading &&
          !error &&
          projects.map((project) => (
            <div
              key={project.id}
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
