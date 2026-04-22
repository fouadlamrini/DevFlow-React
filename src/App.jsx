import { lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import DashboardLayout from "@/layouts/DashboardLayout"

const DashboardPage = lazy(() => import("@/pages/DashboardPage"))
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"))

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App
