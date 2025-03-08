import { SidebarInset, SidebarProvider } from "@byteblitz/ui/sidebar";

import { HydrateClient } from "~/trpc/server";
import { AppSidebar } from "./_components/app-sidebar";
import { SiteHeader } from "./_components/site-header";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HydrateClient>
      <div className="[--header-height:calc(theme(spacing.14))]">
        <SidebarProvider className="flex flex-col">
          <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
              <SiteHeader />
              {children}
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </HydrateClient>
  );
}
