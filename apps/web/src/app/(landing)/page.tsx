import Link from "next/link";

import { Button } from "@byteblitz/ui/button";

export default function LandingPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Button asChild>
        <Link href="/dashboard">Get Started</Link>
      </Button>
    </div>
  );
}
