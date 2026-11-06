import { SidebarInset } from "@/components/ui/sidebar";

export function MainContent() {
  return (
    <SidebarInset className="gap-6 p-6 md:p-10">
      <div>
        <h2 className="text-2xl font-semibold">All devices</h2>
        <p className="text-muted-foreground">Main content area</p>
      </div>
      <div className="flex min-h-64 flex-1 items-center justify-center rounded-xl border border-dashed">
        <p className="text-muted-foreground">Device grid goes here</p>
      </div>
    </SidebarInset>
  );
}
