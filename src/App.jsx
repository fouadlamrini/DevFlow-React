import './App.css'
import {
  Bell,
  CalendarCheck2,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  Search,
  Settings,
  Users2,
} from "lucide-react"
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

const navigationItems = [
  { title: "Dashboard", icon: LayoutDashboard, isActive: true },
  { title: "Projects", icon: FolderKanban },
  { title: "Tasks", icon: ListTodo },
  { title: "Team", icon: Users2 },
  { title: "Settings", icon: Settings },
]

function App() {
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
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.isActive} tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
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
              <p className="text-sm font-semibold">Workspace</p>
              <p className="text-xs text-muted-foreground">DevFlow Team Board</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search tasks..." className="w-56 pl-8" />
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
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default App
