"use client";

import Image from "next/image";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

const Logo = ({ small = false }: { small?: boolean }) => {
  const smallScreen = useMediaQuery("(max-width: 399px)");
  const isMobile = useMediaQuery("(max-width: 639px)");

  if (smallScreen) {
    return null;
  }

  return (
    <div
      className={cn("flex items-center gap-x-2 relative h-10", {
        "w-10": small || isMobile,
        "w-40": !small && !isMobile,
      })}
    >
      <Image
        src={small || isMobile ? "/logo-small.svg" : "/logo.svg"}
        alt="Logo"
        fill
        className="block dark:hidden"
      />
      <Image
        src={small || isMobile ? "/logo-small-dark.svg" : "/logo-dark.svg"}
        alt="Logo"
        fill
        className="hidden dark:block"
      />
    </div>
  );
};

export default Logo;
