import { House } from "lucide-react";

import { SidebarTrigger } from "@/components/ui/sidebar";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-3 border-b bg-sidebar px-4 md:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <House className="size-5" aria-hidden="true" />
      </div>
      <h1 className="text-lg font-semibold">Home Automation</h1>
    </header>
  );
}
