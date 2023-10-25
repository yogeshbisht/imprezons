import Image from "next/image";
import React from "react";

type LogoProps = {
  small?: boolean;
};

const Logo: React.FC<LogoProps> = ({ small = false }) => {
  const width = small ? "40" : "200";
  const height = "40";

  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={small ? "/logo-small.svg" : "/logo.svg"}
        height={height}
        width={width}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src={small ? "/logo-small-dark.svg" : "/logo-dark.svg"}
        height={height}
        width={width}
        alt="Logo"
        className="hidden dark:block"
      />
    </div>
  );
};

export default Logo;
