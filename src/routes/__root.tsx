import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { ThemeProvider } from "@/components/theme/theme-provider";
// Header deps
import Header from "../components//header/header";

// sidebar deps
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />

            <main className="container flex-1 py-10">
              <Outlet />
            </main>
          </SidebarInset>
        </SidebarProvider>
      </div>

      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
