import { Skeleton } from "@byteblitz/ui/skeleton";

export function DashboardCard(_props: {
  title: string;
  description: string;
  href: string;
}) {
  return <Skeleton className="h-24 w-full" />;
}
