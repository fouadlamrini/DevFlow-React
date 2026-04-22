import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { getDashboardStats } from "@/services/fakeApi"

function DashboardPage() {
  const [stats, setStats] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    let isMounted = true

    async function loadStats() {
      try {
        const data = await getDashboardStats()
        if (isMounted) setStats(data)
      } catch {
        if (isMounted) setError("Failed to load dashboard stats.")
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadStats()
    return () => {
      isMounted = false
    }
  }, [])

  if (error) {
    return <section className="p-4 text-sm text-destructive">{error}</section>
  }

  if (isLoading) {
    return (
      <section className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-24 w-full rounded-lg bg-muted" />
        <Skeleton className="h-24 w-full rounded-lg bg-muted" />
        <Skeleton className="h-24 w-full rounded-lg bg-muted" />
      </section>
    )
  }

  return (
    <section className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">{stat.label}</p>
          <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
        </div>
      ))}
    </section>
  )
}

export default DashboardPage
