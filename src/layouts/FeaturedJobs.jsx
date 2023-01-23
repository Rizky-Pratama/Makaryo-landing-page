import CardFeatured from "../components/CardFeatured";

function FeaturedJobs() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="py-16 flex flex-col gap-12 text-black">
          <div className="flex flex-col text-center gap-3">
            <h1 className="text-4xl text-black font-bold">
              Featured <span className="text-primary">jobs offer</span>
            </h1>
            <p className="text-sm text-grey">
              Some companies that are opening vacancies and are well-paid!
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-12 justify-center">
            <CardFeatured />
            <CardFeatured />
            <CardFeatured />
            <CardFeatured />
            <CardFeatured />
            <CardFeatured />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs