import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export async function Navbar() {
  const { userId } = await auth();
  return (
    <nav className="flex w-full items-center justify-between px-6 py-3">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-medium">
          Byte<span className="font-bold text-blue-500">Blitz</span>
        </Link>
      </div>
      <div className="flex items-center justify-end">
        {userId ? <UserButton /> : <SignInButton />}
      </div>
    </nav>
  );
}
