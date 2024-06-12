import Logo from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full px-12 py-6 bg-background z-50 dark:bg-gray-950">
      <Logo small />
      <div className="w-full justify-end flex items-center gap-x-2 text-muted-foreground">
        <a
          href="https://yogeshbisht.com"
          className="text-neutral-950 dark:text-neutral-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yogesh Bisht
        </a>
        © {new Date().getFullYear()}{" "}
      </div>
    </div>
  );
};
