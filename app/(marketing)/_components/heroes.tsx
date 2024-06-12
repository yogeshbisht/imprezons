import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] md:hidden">
          <Image
            src="https://picsum.photos/300"
            fill
            className="object-contain"
            alt="Documents"
          />
        </div>
        <div className="relative h-[300px] w-[600px] hidden md:block">
          <Image
            src="https://picsum.photos/600/300"
            fill
            className="object-contain"
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
