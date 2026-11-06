import { SidebarUser } from "@/components/dashboard/SidebarUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Placeholder until users come from the database
const PLACEHOLDER_USER = {
  name: "[User name]",
  role: "Admin",
  initials: "JD",
};

export function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon" className="top-16! h-[calc(100svh-4rem)]!">
      <SidebarHeader className="flex-row items-center justify-between p-4 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
        <h2 className="text-sm font-medium text-muted-foreground group-data-[collapsible=icon]:hidden">
          Sidebar
        </h2>
        <SidebarTrigger variant="outline" size="icon" />
      </SidebarHeader>
      <SidebarContent />
      <SidebarFooter className="p-4 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:px-0">
        <SidebarUser {...PLACEHOLDER_USER} />
      </SidebarFooter>
    </Sidebar>
  );
}
