import Download from "../components/Download"
import NavFooter from "../components/NavFooter"

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div>
        <div className="container">
          <div className="pt-24 pb-10 flex flex-col divide-y-2">
            <div className="pb-5 flex flex-col items-center gap-24">
              <Download />
              <NavFooter />
            </div>
            <div className="pt-5 px-16 flex items-center justify-between">
              <div className="flex items-center text-white">
                <span className="text-2xl font-bold tracking-wide">
                  Makaryo
                </span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="-mt-3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.73405 0.394387C5.20947 0.141639 4.62127 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8C6.20914 8 8 6.20914 8 4C8 3.33522 7.83783 2.70832 7.55089 2.1567L5.73045 4.20765C5.26692 4.72987 4.46781 4.77745 3.94558 4.31392C3.42336 3.85039 3.37578 3.05128 3.83931 2.52905L5.73405 0.394387Z"
                    fill="#fff"
                  />
                  <circle cx="6" cy="2" r="1" fill="#2554FF" />
                </svg>
              </div>
              <div className="flex gap-2">
                <object
                  data="/icons/facebook.svg"
                  type="image/svg+xml"
                ></object>
                <object
                  data="/icons/linkedln.svg"
                  type="image/svg+xml"
                ></object>
                <object
                  data="/icons/instagram.svg"
                  type="image/svg+xml"
                ></object>
                <object data="/icons/youtube.svg" type="image/svg+xml"></object>
                <object data="/icons/twitter.svg" type="image/svg+xml"></object>
              </div>
              <p className="text-sm font-normal">
                @2023 Makaryo. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer