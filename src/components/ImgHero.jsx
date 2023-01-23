function ImgHero() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <img
        className="absolute -bottom-7 -right-16 z-10"
        src="/Photo.png"
        alt="Person"
      />
      <img
        className="p-3 w-16 absolute top-60 left-48 aspect-square object-contain rounded-full bg-white"
        src="/logo/meta.svg"
        alt="Agola Logo"
      />
      <img
        className="p-2 w-14 absolute top-[20.5rem] left-[10rem] aspect-square object-contain rounded-full bg-white"
        src="/logo/tesla.svg"
        alt="Agola Logo"
      />
      <img
        className="p-2 w-14 absolute top-[26.2rem] left-[14rem] aspect-square object-contain rounded-full bg-white"
        src="/logo/dribble.svg"
        alt="Agola Logo"
      />
      <img
        className="p-2 w-14 absolute top-[15rem] right-[3rem] aspect-square object-contain rounded-full bg-white"
        src="/logo/aws.svg"
        alt="Agola Logo"
      />
      <img
        className="p-2 w-10 absolute top-[20rem] right-[2rem] aspect-square object-contain rounded-full bg-white"
        src="/logo/whatsapp.svg"
        alt="Agola Logo"
      />
      <img
        className="p-3 w-14 absolute top-[25rem] right-[3rem] aspect-square object-contain rounded-full bg-white"
        src="/logo/google.svg"
        alt="Agola Logo"
      />
    </div>
  );
}

export default ImgHero;
