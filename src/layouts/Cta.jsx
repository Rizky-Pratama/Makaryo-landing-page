function Cta() {
  return (
    <section className="lg:p-10 bg-[#F9FAFB] bg-[url('/Frame.png')] bg-cover bg-center bg-no-repeat lg:bg-none">
      <div className="mx-auto lg:h-[50rem] max-w-screen-2xl lg:bg-[url('/Frame.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat  overflow-hidden">
        <div className="container">
          <div className="pt-10 lg:pt-0 flex flex-col lg:flex-row text-white lg:gap-5 items-center justify-center">
            <div className="lg:w-[32rem] flex flex-col gap-5">
              <h1 className="text-3xl lg:text-5xl font-semibold italic">
                Download Makaryo right now and achieve your dream job!
              </h1>
              <p className="w-3/4 lg:text-sm">
                Get all the information about all job vacancies from all over
                the world by applying for jobs hassle-free with one click using
                your gadget.
              </p>
              <div className="w-32 lg:w-36 flex gap-2">
                <img src="/app-store.png" alt="App Store" />
                <img src="/google-play.png" alt="Google Play" />
              </div>
            </div>
            <div>
              <img
                className="lg:w-[40rem] translate-y-[10%]"
                src="/mockup/cta.svg"
                alt="CTA"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta