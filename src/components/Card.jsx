function Card({datas}) {
  const {svg,company,jobs,desk,category} = datas
  return (
    <div className="group p-6 w-72 flex-none flex flex-col gap-5 rounded-2xl border border-[#E2E3E8] bg-[#F9FAFB] hover:bg-primary transition-all z-10 snap-center">
      <div className="flex gap-2 justify-items-center group-hover:text-white">
        <div className="flex-0">
          <object
            className="w-14 aspect-square object-center p-2 bg-[#fff] rounded-2xl shadow-lg shadow-grey/20"
            data={`/logo/${svg}.svg`}
            type="image/svg+xml"
          ></object>
        </div>
        <div className="flex-auto group-hover:text-white">
          <h3 className="text-2xl font-bold capitalize">{company}</h3>
          <span className="text-sm font-normal text-grey-50 group-hover:text-white">
            {jobs} Avaliable job
          </span>
        </div>
      </div>
      <p className="text-sm font-normal text-grey-50 group-hover:text-white">
        {desk}
      </p>
      <div className="flex gap-1 text-sm font-semibold text-white">
        {category.map((data) => (
          <span className="px-3 py-1 rounded-md bg-primary group-hover:bg-secondary-50/40">
            {data}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
