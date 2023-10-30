"use client";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { LayoutDashboardIcon } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import Logo from "./logo";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-neutral-950 fixed top-0 flex items-center w-full px-12 h-28",
        scrolled && "border-b shadow-md"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        <ModeToggle />
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button variant="outline">Log In</Button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="outline" asChild>
              <Link href="/documents">
                <LayoutDashboardIcon className="mr-2" size={16} />
                Dashboard
              </Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </div>
  );
};
