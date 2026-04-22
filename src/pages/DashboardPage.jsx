function DashboardPage() {
  return (
    <section className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border border-border bg-card p-4">
        <p className="text-sm text-muted-foreground">Total Projects</p>
        <p className="mt-2 text-2xl font-semibold">12</p>
      </div>
      <div className="rounded-lg border border-border bg-card p-4">
        <p className="text-sm text-muted-foreground">Open Tasks</p>
        <p className="mt-2 text-2xl font-semibold">38</p>
      </div>
      <div className="rounded-lg border border-border bg-card p-4">
        <p className="text-sm text-muted-foreground">Completed Today</p>
        <p className="mt-2 text-2xl font-semibold">9</p>
      </div>
    </section>
  )
}

export default DashboardPage
