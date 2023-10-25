"use client";

import { cn } from "@/lib/utils";

import Logo from "./logo";

export const Navbar = () => {
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-neutral-950 fixed top-0 flex items-center p-6",
        "w-full"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        User Button
      </div>
    </div>
  );
};
