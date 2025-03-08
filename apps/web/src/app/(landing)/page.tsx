import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@byteblitz/ui/button";

export const metadata: Metadata = {
  title: "ByteBlitz - Home",
  description: "Welcome to ByteBlitz - Your coding challenge platform",
};

export default function LandingPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-6 text-5xl font-extrabold tracking-tight">
        Byte<span className="text-blue-600">Blitz</span>
      </h1>
      <p className="mb-8 text-center text-lg text-muted-foreground">
        Master coding challenges and improve your skills
      </p>
      <Button asChild>
        <Link href="/dashboard">Get Started</Link>
      </Button>
    </div>
  );
}
