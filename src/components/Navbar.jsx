function Navbar() {
  return (
    <header className="sticky mt-5 z-50">
      <div className="container">
        <nav className="h-14 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-primary">
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
                  fill="#F39D5A"
                />
                <circle cx="6" cy="2" r="1" fill="#2554FF" />
              </svg>
            </div>
            <div className="flex">
              <ul className="flex items-center gap-6 text-sm font-semibold text-grey">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Find Jobs</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center mr-3">
            <ul className="flex gap-4 items-center text-sm font-semibold">
              <li>
                <a href="#" className="text-white">
                  Login
                </a>
              </li>
              <li>
                <span className="text-3xl font-extralight text-[#CADFFF]">
                  |
                </span>
              </li>
              <li>
                <button className="block py-2 px-3 rounded-lg text-primary bg-white hover:bg-slate-100 transition duration-200"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
