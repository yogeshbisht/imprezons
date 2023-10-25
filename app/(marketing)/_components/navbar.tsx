"use client";

import { cn } from "@/lib/utils";
import Logo from "./logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
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
        User Button
      </div>
      <ModeToggle />
    </div>
  );
};
