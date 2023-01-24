function CardTestimoni({profile,name,position,desk}) {
  return (
    <div className="p-6 pb-8 w-[23rem] flex flex-col gap-4 rounded-3xl bg-white text-black">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="w-12 h-12"
            src={`/profile/profile${profile}.png`}
            alt="Profile"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold">{name}</span>
            <p className="text-sm font-normal text-grey">
              {position}
            </p>
          </div>
        </div>
        <object data="/icons/starts.svg" type="image/svg+xml"></object>
      </div>
      <p>
        {desk}
      </p>
    </div>
  );
}

export default CardTestimoni;
