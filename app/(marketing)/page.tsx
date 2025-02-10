import { Footer } from "../../components/marketing/footer";
import Hero from "@/components/marketing/hero";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col pt-28 dark:bg-neutral-950">
      <div className="flex flex-col items-center text-center gap-y-8 flex-1 px-6 py-12">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
