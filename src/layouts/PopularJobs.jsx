import { Icon } from "@iconify/react";
import { useRef } from "react";
import Card from "../components/Card";

function PopularJobs() {
  const scroller = useRef(null);

  function handlerScroll(dir){
    const positionScroller = scroller.current.scrollLeft;
    if(dir){
      scroller.current.scroll({top:0,left:positionScroller+150,behavior:"smooth"})
    }else{
      scroller.current.scroll({top:0,left:positionScroller-150,behavior:"smooth"})
    }
  }
  return (
    <section className="bg-[#F9FAFB]">
      <div className="relative h-full max-w-screen-2xl mx-auto">
        <div className="container">
          <div className="py-20 flex flex-col gap-10">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl text-black font-bold">
                Most very <span className="text-primary">popular jobs</span>
              </h2>
              <div className="flex gap-3">
                <button
                  className="py-1 px-2 aspect-square rounded-full text-grey-50 transition-all bg-white-50 hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/40"
                  onClick={() => handlerScroll()}
                >
                  <Icon icon="heroicons:arrow-long-left-solid" width="45" />
                </button>
                <button
                  className="py-1 px-2 aspect-square rounded-full text-grey-50 transition-all bg-white-50 hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/40"
                  onClick={() => handlerScroll(1)}
                >
                  <Icon icon="heroicons:arrow-long-right-solid" width="45" />
                </button>
              </div>
            </div>
            <div
              ref={scroller}
              className="scroller flex flex-nowrap gap-5 overflow-x-auto snap-mandatory snap-x"
            >
              <Card
                datas={{
                  svg: "spotify",
                  company: "spotify",
                  jobs: 28,
                  category: ["Remote", "Full Time", "WFH"],
                  desk: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, earum!",
                }}
              />
              <Card
                datas={{
                  svg: "google",
                  company: "google inc",
                  jobs: 15,
                  category: ["Remote", "Full Time"],
                  desk: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, earum!",
                }}
              />
              <Card
                datas={{
                  svg: "meta",
                  company: "meta inc",
                  jobs: 28,
                  category: ["Remote", "Full Time", "WFH"],
                  desk: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, earum!",
                }}
              />
              <Card
                datas={{
                  svg: "tesla",
                  company: "tesla",
                  jobs: 25,
                  category: ["Remote", "Full Time", "WFH"],
                  desk: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, earum!",
                }}
              />
              <Card
                datas={{
                  svg: "agola",
                  company: "agola",
                  jobs: 31,
                  category: ["Remote", "WFH"],
                  desk: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, earum!",
                }}
              />
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0 h-60 "
          src="/background/lines.svg"
          alt="lines"
        />
      </div>
    </section>
  );
}

export default PopularJobs;
