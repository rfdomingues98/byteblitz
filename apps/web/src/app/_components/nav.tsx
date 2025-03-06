import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export async function Nav() {
  const { userId } = await auth();
  return (
    <div className="flex items-center justify-between">
      {userId ? <UserButton /> : <SignInButton />}
    </div>
  );
}
