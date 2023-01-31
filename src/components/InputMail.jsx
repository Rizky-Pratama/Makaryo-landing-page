function InputMail() {
  return (
    <div className="px-2 py-2 max-w-[60rem] w-full flex justify-between border border-[#E9EBF2]/25 rounded-xl shadow-xl shadow-black/5 text-lg text-grey-50 bg-[#fff]">
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="w-full pl-2 text-black placeholder:text-grey-50 focus:outline-none"
          placeholder="Your Email"
        />
      </div>
      <button className="relative py-4 lg:py-5 px-7 text-sm text-white font-medium rounded-xl bg-primary shadow-lg shadow-primary/30 hover:ring">
        <object
          className="absolute top-0 left-0"
          data="/background/button-gradient.svg"
          type="image/svg+xml"
        ></object>
        Send Email
        <object
          className="absolute bottom-0 right-0"
          data="/background/button-gradient2.svg"
          type="image/svg+xml"
        ></object>
      </button>
    </div>
  );
}

export default InputMail;
