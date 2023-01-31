import CardFeatured from "../components/CardFeatured";

function FeaturedJobs() {
  return (
    <section className="bg-white">
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="container">
          <div className="py-16 flex flex-col gap-12 items-center text-black">
            <div className="flex flex-col text-center gap-3">
              <h1 className="text-4xl text-black font-bold">
                Featured <span className="text-primary">jobs offer</span>
              </h1>
              <p className="text-sm text-grey">
                Some companies that are opening vacancies and are well-paid!
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-12 justify-center">
              <CardFeatured
                labels={["remote", "full time"]}
                svg="google"
                job="Junior Videographer"
                location="Tebet, South Jakarta"
                hours="1"
                price="$10K - 110K"
              />
              <CardFeatured
                labels={["remote", "full time"]}
                svg="linkedln"
                job="Full Stack Dev"
                location="Toronto, USA"
                hours="2"
                price="$10K - 90K"
              />
              <CardFeatured
                labels={["remote", "full time"]}
                svg="doll"
                job="Jr. Product Designer"
                location="Bandung, West Java"
                hours="3"
                price="$10K - 110K"
              />
              <CardFeatured
                labels={["remote", "full time"]}
                svg="airbnb"
                job="Jr. UX Researcher"
                location="Semarang, Central Java"
                hours="4"
                price="$10K - 140K"
              />
              <CardFeatured
                labels={["remote", "full time"]}
                svg="dropbox"
                job="Sr. UX Designer"
                location="New York, USA"
                hours="5"
                price="$10K - 220K"
              />
              <CardFeatured
                labels={["remote", "freelance"]}
                svg="gitlab"
                job="Jr. Content Creator"
                location="Bandung, West Java"
                hours="6"
                price="$50K - 220K"
              />
            </div>
            <button className="relative w-[19rem] py-3 flex gap-3 justify-center items-center text-base font-semibold text-primary border-2 border-primary rounded-xl hover:ring z-10">
              <span>Find More Jobs</span>
              <object data="/icons/arrow-right-short.svg"></object>
            </button>
          </div>
        </div>
        <object
          className="absolute bottom-0 left-0"
          data="/background/lines.svg"
        ></object>
        <object
          className="absolute bottom-0 right-0 scale-x-[-1]"
          data="/background/lines.svg"
        ></object>
        <object
          className="absolute top-0 right-0"
          data="/background/start.svg"
        ></object>
      </div>
    </section>
  );
}

export default FeaturedJobs;
