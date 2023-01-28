import { Icon } from "@iconify/react";

function InputHero() {
  return (
    <div className="md:px-2 py-2 w-full md:w-[44rem] self-start hidden lg:flex lg:flex-wrap justify-between border border-[#E9EBF2]/25 rounded-xl shadow-xl shadow-black/5 text-xs lg:text-lg text-grey-50 bg-[#fff]">
      <div className="lg:w-[20.6rem] flex items-center lg:gap-2">
        <Icon className="w-6 lg:w-13" icon="uil:search" />
        <input
          type="text"
          className="w-auto lg:w-full focus:outline-none"
          placeholder="Job Category, Keyword, Company"
        />
      </div>
      <span className="h-2/3 w-0.5 self-center bg-grey-50"></span>
      <div className="flex items-center lg:gap-1">
        <Icon
          className="w-6 lg:w-13"
          icon="material-symbols:location-on-outline-rounded"
        />
        <input
          type="text"
          className="w-auto lg:w-40 focus:outline-none"
          placeholder="Jakarta, Indonesia"
        />
      </div>
      <button className="py-2 px-4 rounded-lg text-white bg-primary">
        Search
      </button>
    </div>
  );
}
;

export default InputHero