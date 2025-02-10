import { Navbar } from "@/components/marketing/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-neutral-950">
      <Navbar />
      <main className="h-full">{children}</main>
    </div>
  );
};

export default MarketingLayout;
