import Download from "../components/Download"
import NavFooter from "../components/NavFooter"

function Footer() {
  return (
    <footer className="bg-black text-white">
        <div>
            <div className="container">
                <div className="pt-24 pb-10 flex flex-col">
                    <div className="flex flex-col items-center gap-24">
                        <Download/>
                        <NavFooter/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer