function CardFeatured() {
    return ( 
        <div className="flex flex-col gap-5">
            <div className="flex gap-2 text-white">
                <span className="px-3 py-1 rounded-md bg-primary group-hover:bg-secondary-50/40">remote</span>
                <span className="px-3 py-1 rounded-md bg-primary group-hover:bg-secondary-50/40">full time</span>
            </div>
            <div>
                <div className="flex gap-2">
                    <img src="/src/assets/logo/google.svg" alt="Logo" />
                    <div>
                        <h3 className="text-lg font-semibold">Junior Vidiographer</h3>
                        <div className="flex items-center gap-1">
                            <object className="text-grey fill-grey" data="/src/assets/icons/location.svg" type=""></object>
                            <p className="text-grey">Jakarta, Jl Condet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CardFeatured;