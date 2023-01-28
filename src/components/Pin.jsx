import ArrowHero from "./ArrowHero";
import Dot from "./Dot";
import SunHero from "./SunHero";

function Pin({ type = 1 }) {
  if (type == 1) {
    return (
      <span className="px-3 h-10 lg:h-16 inline-flex items-center gap-2 lg:gap-3 rounded-full bg-primary">
        <Dot />
        <ArrowHero />
        <Dot />
      </span>
    );
  } else {
    return (
      <span className="px-5 h-10 lg:h-16 inline-flex items-center gap-2 lg:gap-3 rounded-full bg-[#F88060]">
        <Dot />
        <SunHero />
        <Dot />
      </span>
    );
  }
}

export default Pin;
