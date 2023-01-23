function Cta() {
  return (
    <section className="p-10 bg-[#F9FAFB]">
      <div className="mx-auto h-[50rem] max-w-screen-2xl bg-[url('/src/assets/Frame.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
        <div className="container">
          <div className="flex text-white gap-5 items-center justify-center">
            <div className="w-[32rem] flex flex-col gap-5">
              <h1 className="text-5xl font-semibold italic">
                Download Makaryo right now and achieve your dream job!
              </h1>
              <p className="w-3/4 text-sm">
                Get all the information about all job vacancies from all over
                the world by applying for jobs hassle-free with one click using
                your gadget.
              </p>
              <div className="w-36 flex gap-2">
                <img src="/src/assets/app-store.png" alt="App Store" />
                <img src="/src/assets/google-play.png" alt="Google Play" />
              </div>
            </div>
            <div className="">
              <img
                className="w-[40rem] translate-y-[10%]"
                src="/src/assets/mockup/cta.svg"
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