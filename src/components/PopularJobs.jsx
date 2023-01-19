import { Icon } from "@iconify/react";
import Card from "./Card";

function PopularJobs() {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="container">
        <div className="py-20 flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl text-black font-bold">
              Most very <span className="text-primary">popular jobs</span>
            </h2>
            <div className="flex gap-3">
              <button className="py-1 px-2 aspect-square rounded-full text-grey-50 transition-all bg-white-50 hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/40">
                <Icon icon="heroicons:arrow-long-left-solid" width="45" />
              </button>
              <button className="py-1 px-2 aspect-square rounded-full text-grey-50 transition-all bg-white-50 hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/40">
                <Icon icon="heroicons:arrow-long-right-solid" width="45" />
              </button>
            </div>
          </div>
          <div className="flex flex-nowrap gap-5 overflow-x-auto">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularJobs;
