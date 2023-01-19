function Features() {
  return (
    <section className="relative h-[59rem] bg-black text-white overflow-hidden">
      <div className="pt-20 pb-40 h-full flex flex-col gap-8 container">
        <h2 className="w-2/3 text-4xl italic font-semibold">
          Without the hassle of following these steps to get your dream job in
          Makaryo!
        </h2>
        <div className="h-full flex gap-5 text-black">
          <div className="relative px-10 pt-10 h-full w-2/5 rounded-3xl bg-orange overflow-hidden">
            <span className="text-2xl font-bold">01</span>
            <h3 className="my-2 text-2xl font-bold">
              Register to hire up or login
            </h3>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo
              neque vel temporibus eaque ipsa praesentium mollitia ipsum
              molestias aut illo, saepe voluptatum quasi ex, necessitatibus
              laboriosam modi
            </p>
            <img
              className="absolute right-[10%] -bottom-[63%] scale-90"
              src="/src/assets/mockup/register.png"
              alt="Rigister"
            />
          </div>
          <div className="h-full w-3/5 flex flex-col gap-5">
            <div className="relative pl-10 h-1/2 flex flex-col justify-center rounded-3xl bg-purple overflow-hidden">
              <span className="text-2xl font-bold">02</span>
              <h3 className="my-2 text-2xl font-bold">
                Upload your latest resume
              </h3>
              <p className="w-1/2 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                quo neque vel temporibus eaque ipsa praesentium mollitia ipsum
                molestias aut illo
              </p>
              <img
                className="absolute right-4 -bottom-[76%] scale-90"
                src="/src/assets/mockup/resume.png"
                alt="Resume"
              />
            </div>
            <div className="relative pl-10 h-1/2 flex flex-col justify-center rounded-3xl bg-primary-50 overflow-hidden">
              <span className="text-2xl font-bold">03</span>
              <h3 className="my-2 text-2xl font-bold">Find your dream job!</h3>
              <p className="w-1/2 text-sm font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam quis provident fuga optio minus deserunt odit cum
                asperiores praesentium eius?
              </p>
              <img
                className="absolute right-4 -bottom-[76%] scale-90"
                src="/src/assets/mockup/find-job.png"
                alt="Find Job"
              />
            </div>
          </div>
        </div>
      </div>

      <object
        className="absolute -top-[13rem] -left-[16rem]"
        data="/src/assets/background/circle-gradient.svg"
        type="image/svg+xml"
      ></object>
      <object
        className="absolute -top-[11rem] -right-[5rem] opacity-5 scale-75"
        data="/src/assets/background/italic-lines.svg"
        type="image/svg+xml"
      ></object>
      <object
        className="absolute -top-[16rem] -left-[5rem] opacity-5 -scale-x-[1] scale-75"
        data="/src/assets/background/italic-lines.svg"
        type="image/svg+xml"
      ></object>
      <object
        className="absolute -bottom-80 -left-[41rem] opacity-20 scale-75"
        data="/src/assets/background/spiral.svg"
        type="image/svg+xml"
      ></object>
    </section>
  );
}

export default Features;
