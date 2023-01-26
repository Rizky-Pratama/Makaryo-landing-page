function NavFooter() {
  return (
    <nav className="grid gri">
        <ul className="flex flex-col gap-5">
            <li><span className="text-lg font-semibold">About Us</span></li>
            <li><a className="text-sm font-normal" href="#">Company</a></li>
            <li><a className="text-sm font-normal" href="#">Social Media</a></li>
            <li><a className="text-sm font-normal" href="#">Careers</a></li>
            <li><a className="text-sm font-normal" href="#">Jobs</a></li>
        </ul>
    </nav>
  )
}

export default NavFooter