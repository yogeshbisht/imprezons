"use client";

import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { LayoutDashboard } from "lucide-react";
import { BRAND_NAME } from "@/app/constants";
import Image from "next/image";

const Hero = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <>
      <div className="max-w-3xl">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-standard">
            Welcome to <span className="font-bold">{BRAND_NAME}</span>
          </h1>
          <h3 className="md:text-lg font-extralight text-muted-foreground">
            Versatile workspace where you can create and share impressions.
          </h3>
        </div>
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
            <Button>Get Free {BRAND_NAME}</Button>
          </SignInButton>
        )}
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl overflow-hidden">
        <Image
          src="/hero-image.png"
          width={1000}
          height={1000}
          className="object-cover"
          alt="Documents"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
    </>
  );
};

export default Hero;
