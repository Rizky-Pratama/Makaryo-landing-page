import Cta from "./components/Cta";
import Features from "./components/Features";
import FeaturedJobs from "./components/FeaturedJobs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularJobs from "./components/PopularJobs";

function App() {
  return (
    <>
      <Navbar />
      <main className="-mt-[76px]">
        <Hero />
        <Features />
        <PopularJobs />
        <Cta />
        <FeaturedJobs/>
      </main>
    </>
  );
}

export default App;
