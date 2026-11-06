import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { MainContent } from "@/components/dashboard/MainContent";
import { TopBar } from "@/components/dashboard/TopBar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider className="flex-col">
      <TopBar />
      <div className="flex flex-1">
        <DashboardSidebar />
        <MainContent />
      </div>
    </SidebarProvider>
  );
}
