const navs = [
  {
    head: "About Us",
    links: [
      { link: "company", href: "#" },
      { link: "social media", href: "#" },
      { link: "careers", href: "#" },
      { link: "jobs", href: "#" },
    ],
  },
  {
    head: "Find Jobs",
    links: [
      { link: "login", href: "#" },
      { link: "register", href: "#" },
      { link: "customer service", href: "#" },
      { link: "online chat", href: "#" },
    ],
  },
  {
    head: "FAQ",
    links: [
      { link: "account", href: "#" },
      { link: "register", href: "#" },
      { link: "apply jobs", href: "#" },
      { link: "download app", href: "#" },
    ],
  },
  {
    head: "Blog",
    links: [
      { link: "link 1", href: "#" },
      { link: "link 2", href: "#" },
      { link: "link 3", href: "#" },
      { link: "link 4", href: "#" },
    ],
  },
  {
    head: "Social Media",
    links: [
      { link: "instagram", href: "#" },
      { link: "twitter", href: "#" },
      { link: "facebook", href: "#" },
      { link: "linked", href: "#" },
      { link: "youtube", href: "#" },
    ],
  },
  {
    head: "Contact",
    links: [
      { link: "(021) 8989 6788", href: "#" },
      { link: "makaryo@gmail.com", href: "#" },
    ],
  },
];
function NavFooter() {
  return (
    <nav className="relative w-full flex justify-evenly flex-wrap gap-y-7 z-10">
      {navs?.map((nav,i) => (
        <ul key={i} className="flex-none basis-40 flex flex-col gap-5">
          <li>
            <span className="text-lg font-semibold">{nav.head}</span>
          </li>
          {nav.links.map((item,i) => (
            <li key={i}>
              <a
                className="text-sm font-normal capitalize hover:underline underline-offset-4 transition-all"
                href={item.href}
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}

export default NavFooter;
