import { Suspense } from "react"
import {
  Bell,
  CalendarCheck2,
  FolderKanban,
  LayoutDashboard,
  LoaderCircle,
  Search,
} from "lucide-react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Skeleton } from "@/components/ui/skeleton"

const navigationItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "Projects", icon: FolderKanban, path: "/projects" },
]

const pageMeta = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Overview of your workspace activity",
  },
  "/projects": {
    title: "Projects",
    subtitle: "Track project status and progress",
  },
}

function ContentLoader() {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <LoaderCircle className="size-4 animate-spin" />
        <p>Loading page...</p>
      </div>
      <Skeleton className="h-12 w-full rounded-lg bg-muted" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-32 w-full rounded-lg bg-muted" />
        <Skeleton className="h-32 w-full rounded-lg bg-muted" />
        <Skeleton className="h-32 w-full rounded-lg bg-muted" />
      </div>
    </div>
  )
}

function DashboardLayout() {
  const location = useLocation()
  const currentPage = pageMeta[location.pathname] ?? pageMeta["/dashboard"]

  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar collapsible="icon" variant="inset">
          <SidebarHeader>
            <div className="flex items-center gap-2 rounded-md bg-sidebar-accent p-2">
              <div className="grid size-7 place-items-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <FolderKanban className="size-4" />
              </div>
              <div className="group-data-[collapsible=icon]:hidden">
                <p className="text-sm font-semibold">DevFlow</p>
                <p className="text-xs text-muted-foreground">Project Workspace</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarSeparator />

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => {
                    const isActive = location.pathname === item.path
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                          <NavLink to={item.path}>
                            <item.icon />
                            <span>{item.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="flex items-center gap-2 rounded-md border border-sidebar-border bg-sidebar-accent/40 p-2">
              <div className="grid size-8 place-items-center rounded-full bg-sidebar-primary text-xs font-semibold text-sidebar-primary-foreground">
                AY
              </div>
              <div className="group-data-[collapsible=icon]:hidden">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@devflow.app</p>
              </div>
            </div>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/70">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <div>
                <p className="text-sm font-semibold">{currentPage.title}</p>
                <p className="text-xs text-muted-foreground">{currentPage.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative hidden sm:block">
                <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search..." className="w-56 pl-8" />
              </div>
              <Button variant="ghost" size="icon-sm" aria-label="Notifications">
                <Bell />
              </Button>
              <Button variant="outline" size="sm">
                <CalendarCheck2 />
                Quick Plan
              </Button>
            </div>
          </header>

          <Suspense fallback={<ContentLoader />}>
            <Outlet />
          </Suspense>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default DashboardLayout
