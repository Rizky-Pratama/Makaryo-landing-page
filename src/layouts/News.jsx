import InputMail from "../components/InputMail";

function News() {
  return (
    <section className="bg-[#F8F9FB] overflow-hidden">
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="relative container z-10">
          <div className="pt-32 pb-96 flex flex-col items-center gap-16">
            <h2 className="lg:w-[35rem] text-4xl font-bold text-center">
              Get the latest news and updates from
              <span className="text-primary"> our company</span>
            </h2>
            <InputMail />
          </div>
        </div>
        <img
          className="absolute h-96 lg:h-auto bottom-0 lg:left-20 lg:-bottom-32 object-cover z-10"
          src="/background/brands.png"
          alt="Brands"
        />
        <div className="absolute bottom-0 inset-x-0 h-[20rem] bg-gradient-to-t from-white to-white/20 z-10"></div>
        <object className="absolute -top-48 -left-56" data="/background/bg-news.svg" type="image/svg+xml"></object>
      </div>
    </section>
  );
}
export default News;
