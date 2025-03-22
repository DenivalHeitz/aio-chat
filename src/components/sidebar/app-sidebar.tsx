import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { UserMenu } from "./user-menu";
import ModeToggle from "@/components/theme/theme-toggle";

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
