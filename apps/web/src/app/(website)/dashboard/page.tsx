import type { Metadata } from "next";

import { Skeleton } from "@byteblitz/ui/skeleton";

import { DashboardCard } from "./_components/dashboard-card";

export const metadata: Metadata = {
  title: "Dashboard | ByteBlitz",
  description: "Your ByteBlitz dashboard and activity overview",
};

export default function DashboardPage() {
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to your dashboard
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Recent Challenges"
          description="View your recently attempted coding challenges"
          href="/challenges"
        />
        <DashboardCard
          title="Progress Stats"
          description="Track your learning progress and achievements"
          href="/stats"
        />
        <DashboardCard
          title="Community"
          description="Connect with other developers in the community"
          href="/community"
        />
      </div>
      <Skeleton className="mt-12 h-64 w-full" />
    </main>
  );
}
