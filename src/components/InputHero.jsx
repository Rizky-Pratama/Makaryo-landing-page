import { Icon } from "@iconify/react";

function InputHero() {
  return (
    <div className="px-2 py-2 w-[44rem] self-start flex justify-between border border-[#E9EBF2]/25 rounded-xl shadow-xl shadow-black/5 text-lg text-grey-50 bg-[#fff]">
      <div className="w-[20.6rem] flex items-center gap-2">
        <Icon icon="uil:search" width="32" />
        <input
          type="text"
          className="w-full focus:outline-none"
          placeholder="Job Category, Keyword, Company"
        />
      </div>
      <span className="h-2/3 w-0.5 self-center bg-grey-50"></span>
      <div className="flex items-center gap-1">
        <Icon icon="material-symbols:location-on-outline-rounded" width="32" />
        <input
          type="text"
          className="w-40 focus:outline-none"
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