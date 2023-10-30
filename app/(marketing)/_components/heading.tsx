"use client";

import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { LayoutDashboard } from "lucide-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-standard">
        Create, Organize, Achieve.
        <br />
        Welcome to <span className="underline">Imprezion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Versatile workspace where you can create,
        <br />
        organize, and achieve like never before.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            <LayoutDashboard className="mr-2" size={16} />
            Go to Dashboard
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>Get Free Imprezion</Button>
        </SignInButton>
      )}
    </div>
  );
};
