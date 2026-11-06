import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface SidebarUserProps {
  name: string;
  role: string;
  initials: string;
}

export function SidebarUser({ name, role, initials }: SidebarUserProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border bg-background p-2 group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:p-0">
      <Avatar>
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="min-w-0 group-data-[collapsible=icon]:hidden">
        <p className="truncate text-sm font-medium">{name}</p>
        <p className="truncate text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
