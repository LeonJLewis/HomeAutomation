import { House } from "lucide-react";

export function TopBar() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b bg-sidebar px-6">
      <div className="flex size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <House className="size-5" aria-hidden="true" />
      </div>
      <h1 className="text-lg font-semibold">Home Automation</h1>
    </header>
  );
}
