import ImgHero from "./ImgHero";
import InputHero from "./InputHero";
import Pin from "./Pin";

function Hero() {
  return (
    <section className="hero relative pb-10">
      <div className="h-max container grid grid-cols-2">
        <div className="mt-32 relative flex flex-col gap-10 justify-center">
          <h1 className="inline-flex flex-col gap-3 text-6xl font-bold text-black">
            <span className="flex items-center">
              FIND&nbsp;
              <Pin />
              &nbsp;THE JOB
            </span>
            <span className="flex items-center">
              <Pin type="2" />
              &nbsp;AND ACHIEVE
            </span>
            <span>YOUR DREAMS</span>
            <span>
              WITH{" "}
              <span className="inline-flex flex-col text-primary">
                MAKARYO!{" "}
                <svg
                  width="315"
                  height="33"
                  viewBox="0 0 315 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.96416 13.8681C128.435 -1.86004 182.679 0.524793 311.662 15.1395C180.909 11.8562 127.345 12.903 7.03289 22.8325C88.3345 21.6443 145.645 21.9017 204.96 24.0048C238.305 25.187 271.941 26.6483 311.663 29.5073"
                    stroke="#2554FF"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </span>
          </h1>
          <InputHero />
          <div className="flex flex-col gap-5">
            <p className="text-lg text-black font-semibold">
              More thab 400.321 jobs is listed in
            </p>
            <div className="flex gap-5">
              <div className="w-12 grid place-items-center aspect-square rounded-lg shadow-xl bg-[#fff]">
                <img
                  className="object-contain "
                  src="/src/assets/logo/meta.svg"
                  alt="Meta Logo"
                />
              </div>
              <div className="w-12 grid place-items-center aspect-square rounded-lg shadow-xl bg-[#fff]">
                <img
                  className="object-contain "
                  src="/src/assets/logo/dribble.svg"
                  alt="Dribble Logo"
                />
              </div>
              <div className="w-12 grid place-items-center aspect-square rounded-lg shadow-xl bg-[#fff]">
                <img
                  className="object-contain "
                  src="/src/assets/logo/agola.svg"
                  alt="Agola Logo"
                />
              </div>
              <div className="w-12 grid place-items-center aspect-square rounded-lg shadow-xl bg-[#fff]">
                <img
                  className="object-contain "
                  src="/src/assets/logo/tesla.svg"
                  alt="Tesla Logo"
                />
              </div>
            </div>
          </div>
          <img
            className="absolute -bottom-5 -right-36"
            src="/src/assets/Component-Member.png"
            alt="Member"
          />
        </div>
        <div className="absolute max-w-4xl inset-0 left-1/2  bg-[url('/src/assets/Photo-Background.png')] bg-cover -z-50">
          <ImgHero />
        </div>
      </div>
      <img
        className="absolute bottom-0 h-3/4 -z-50"
        src="/src/assets/background/lines.svg"
        alt="lines"
      />
    </section>
  );
}

export default Hero;
