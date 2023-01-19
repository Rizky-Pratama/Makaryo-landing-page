function Card() {
  return (
    <div className="group p-6 w-72 flex-none flex flex-col gap-5 rounded-2xl border border-[#E2E3E8] hover:bg-primary transition-all">
      <div className="flex gap-2 justify-items-center group-hover:text-white">
        <div className="flex-0">
          <object
            className="w-14 p-2 bg-[#fff] rounded-2xl shadow-lg shadow-grey/20"
            data="/src/assets/logo/whatsapp.svg"
            type="image/svg+xml"
          ></object>
        </div>
        <div className="flex-auto group-hover:text-white">
          <h3 className="text-2xl font-bold">Spotify</h3>
          <span className="text-sm font-normal text-grey-50 group-hover:text-white">
            28 Avaliable job
          </span>
        </div>
      </div>
      <p className="text-sm font-normal text-grey-50 group-hover:text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, earum!
      </p>
      <div className="flex gap-1 text-sm font-semibold text-white">
        <span className="px-3 py-1 rounded-md bg-primary group-hover:bg-secondary-50/40">
          Remote
        </span>
        <span className="px-3 py-1 rounded-md bg-primary group-hover:bg-secondary-50/40">
          Full Time
        </span>
        <span className="px-3 py-1 rounded-md bg-primary group-hover:bg-secondary-50/40">
          WFH
        </span>
      </div>
    </div>
  );
}

export default Card;
