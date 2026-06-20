import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {companies.map(({ id, img, name, companyName }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                height={29}
                width={43}
                src={img}
                alt={`${name}'s logo`}
                className="w-5 md:w-10"
              />

             <h1 className="text-sm font-medium md:text-lg">{companyName}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
