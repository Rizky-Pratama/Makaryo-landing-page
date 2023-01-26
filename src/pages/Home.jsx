import Navbar from "../components/Navbar";
import Cta from "../layouts/Cta";
import Features from "../layouts/Features";
import FeaturedJobs from "../layouts/FeaturedJobs";
import Hero from "../layouts/Hero";
import PopularJobs from "../layouts/PopularJobs";
import Testimoni from "../layouts/Testimoni";
import News from "../layouts/News";

function Home() {
  return (
    <>
      <Navbar />
      <main className="-mt-[76px]">
        <Hero />
        <Features />
        <PopularJobs />
        <Cta />
        <FeaturedJobs />
        <Testimoni />
        <News/>
      </main>
    </>
  );
}

export default Home;
