import Features from "./components/Features";
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
      </main>
    </>
  );
}

export default App;
