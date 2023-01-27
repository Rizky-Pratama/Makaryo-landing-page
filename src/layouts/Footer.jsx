import Download from "../components/Download"
import NavFooter from "../components/NavFooter"

function Footer() {
  return (
    <footer className="bg-black text-white">
        <div>
            <div className="container">
                <div className="pt-24 pb-10 flex flex-col divide-y-2">
                    <div className="pb-5 flex flex-col items-center gap-24">
                        <Download/>
                        <NavFooter/>
                    </div>
                    <div className="pt-5 px-16 flex items-center justify-between">
                        <span>Makaryo</span>
                        <span>Instagram Facebook</span>
                        <p className="text-sm font-normal">@2023 Makaryo. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer