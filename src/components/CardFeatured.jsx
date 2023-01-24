function CardFeatured({ labels, svg, job, location, desk, hours, price }) {
  return (
    <div className="px-6 pt-8 pb-10 w-[361px] flex flex-col gap-5 border border-[#E2E3E8] rounded-3xl bg-white z-50">
      <div className="flex gap-2 text-white font-medium capitalize">
        {labels?.map((label) => (
          <span className="px-3 py-1 rounded-md bg-primary">{label}</span>
        ))}
      </div>
      <div>
        <div className="flex gap-3">
          <object
            className="w-14 aspect-square object-center p-3 bg-[#fff] rounded-2xl shadow-lg shadow-grey/20"
            data={`/logo/${svg}.svg`}
            type="image/svg+xml"
          ></object>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">{job}</h3>
            <div className="flex items-center gap-2">
              <object
                className="text-grey fill-grey"
                data="/icons/location.svg"
                type="image/svg+xml"
              ></object>
              <p className="text-grey-50 text-sm">{location}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-base text-grey-50">
        Register your personal identity on this platform to access features.
      </p>
      <div className="mt-6 flex flex-col gap-10">
        <div className="flex gap-4">
          <div className="flex gap-2">
            <object data="/icons/clock.svg" type="image/svg+xml"></object>
            <span>{hours} hours ago</span>
          </div>
          <div className="flex gap-2">
            <object data="/icons/money.svg" type="image/svg+xml"></object>
            <span>{price}</span>
          </div>
        </div>
        <button className="relative py-2 text-lg text-white font-medium rounded-xl bg-primary shadow-lg shadow-primary/30 hover:ring">
          <object
            className="absolute top-0 left-0"
            data="/background/button-gradient.svg"
            type="image/svg+xml"
          ></object>
          Apply Now
          <object
            className="absolute bottom-0 right-0"
            data="/background/button-gradient2.svg"
            type="image/svg+xml"
          ></object>
        </button>
      </div>
    </div>
  );
}

export default CardFeatured;
