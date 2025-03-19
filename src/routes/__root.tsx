import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "../components//header/header";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="container flex-1 py-10">
          <Outlet />
        </main>
      </div>

      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
