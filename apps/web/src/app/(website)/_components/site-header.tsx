"use client";

import { UserButton } from "@clerk/nextjs";
import { SidebarIcon } from "lucide-react";

import { Button } from "@byteblitz/ui/button";
import { Separator } from "@byteblitz/ui/separator";
import { useSidebar } from "@byteblitz/ui/sidebar";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="fle sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon size={16} />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />

        <div className="ml-auto flex items-center">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
