import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import Heroes from "./_components/heroes";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col pt-28 dark:bg-neutral-950">
      <div className="flex flex-col items-center text-center gap-y-8 flex-1 px-6 py-12">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
