import Logo from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full px-12 py-6 bg-background z-50 dark:bg-gray-950">
      <Logo small />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        Copyright © {new Date().getFullYear()}{" "}
        <a
          href="https://yogeshbisht.com"
          className="text-neutral-950 dark:text-neutral-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yogesh Bisht.
        </a>{" "}
        All rights reserved.
      </div>
    </div>
  );
};
