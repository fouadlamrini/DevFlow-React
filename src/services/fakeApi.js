const dashboardStats = [
  { label: "Total Projects", value: 12 },
  { label: "Open Tasks", value: 38 },
  { label: "Completed Today", value: 9 },
]

const projects = [
  { id: 1, name: "Website Redesign", status: "In Progress", progress: "68%" },
  { id: 2, name: "Mobile App UI", status: "Planning", progress: "25%" },
  { id: 3, name: "Marketing Campaign", status: "Done", progress: "100%" },
  { id: 4, name: "CRM Migration", status: "In Progress", progress: "54%" },
]

function withDelay(data, delay = 700) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay)
  })
}

export function getDashboardStats() {
  return withDelay(dashboardStats)
}

export function getProjects() {
  return withDelay(projects)
}
