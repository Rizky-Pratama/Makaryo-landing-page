function Features() {
  return (
    <section className="relative lg:h-[59rem] bg-black text-white overflow-hidden">
      <div className="pt-20 pb-40 h-full flex flex-col gap-8 container">
        <h2 className="lg:w-2/3 text-4xl italic font-semibold">
          Without the hassle of following these steps to get your dream job in
          Makaryo!
        </h2>
        <div className="h-full flex flex-col lg:flex-row gap-5 text-black">
          <div className="relative p-10 h-[32rem] lg:h-full lg:w-2/5 rounded-3xl bg-orange overflow-hidden">
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
              className="relative self-center lg:absolute lg:right-[10%] lg:-bottom-[63%] scale-90"
              src="/mockup/register.png"
              alt="Rigister"
            />
          </div>
          <div className="h-full lg:w-3/5 flex flex-col gap-5">
            <div className="relative p-10 lg:py-0 h-[32rem] lg:h-1/2 flex flex-col lg:justify-center rounded-3xl bg-purple overflow-hidden">
              <span className="text-2xl font-bold">02</span>
              <h3 className="my-2 text-2xl font-bold">
                Upload your latest resume
              </h3>
              <p className="lg:w-1/2 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                quo neque vel temporibus eaque ipsa praesentium mollitia ipsum
                molestias aut illo
              </p>
              <img
                className="relative lg:absolute left-[4%] lg:left-auto lg:right-4 lg:-bottom-[76%] scale-90"
                src="/mockup/resume.png"
                alt="Resume"
              />
            </div>
            <div className="relative p-10 lg:py-0 h-[32rem] lg:h-1/2 flex flex-col lg:justify-center rounded-3xl bg-primary-50 overflow-hidden">
              <span className="text-2xl font-bold">03</span>
              <h3 className="my-2 text-2xl font-bold">Find your dream job!</h3>
              <p className="mb-8 lg:mb-0 lg:w-1/2 text-sm font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam quis provident fuga optio minus deserunt odit cum
                asperiores praesentium eius?
              </p>
              <img
                className="relative lg:absolute left-[2%] lg:left-auto lg:right-4 lg:-bottom-[76%] scale-90"
                src="/mockup/find-job.png"
                alt="Find Job"
              />
            </div>
          </div>
        </div>
      </div>

      <object
        className="absolute -top-[13rem] -left-[16rem]"
        data="/background/circle-gradient.svg"
        type="image/svg+xml"
      ></object>
      <object
        className="absolute -top-[11rem] -right-[5rem] opacity-5 scale-75"
        data="/background/italic-lines.svg"
        type="image/svg+xml"
      ></object>
      <object
        className="absolute -top-[16rem] -left-[5rem] opacity-5 -scale-x-[1] scale-75"
        data="/background/italic-lines.svg"
        type="image/svg+xml"
      ></object>
      <object
        className="absolute -bottom-80 -left-[41rem] opacity-20 scale-75"
        data="/background/spiral.svg"
        type="image/svg+xml"
      ></object>
    </section>
  );
}

export default Features;
