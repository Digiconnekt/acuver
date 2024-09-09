import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import LINKS from "@/constants/navigationLinks";

const DesktopNav = () => {
  return (
    <>
      <nav className="hidden lg:block relative">
        <ul className="flex items-center gap-5">
          {LINKS.map((link, i) => (
            <li key={i} className="group relative">
              <Link
                to={link?.href}
                className="flex items-center gap-1 text-secondary group-hover:text-primary text-md font-semibold transition-all ease-in-out duration-300"
              >
                {link?.name}
                {link?.subLinks && (
                  <ChevronDown
                    size={18}
                    className="text-secondary group-hover:text-primary transition-all ease-in-out duration-300"
                  />
                )}
              </Link>

              {link?.subLinks && (
                <ul className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-8 right-0 bg-white shadow-[0_0px_15px_0_rgba(0,0,0,0.1)] rounded-sm w-72 transition-all duration-300 ease-in-out">
                  {link?.subLinks.map((subLink, j) => (
                    <li key={j}>
                      <Link
                        to={subLink?.href}
                        className="flex items-center gap-2 text-secondary hover:text-white hover:bg-primary text-md font-semibold px-4 py-2 rounded-sm transition-all ease-in-out duration-300"
                      >
                        <span className="flex-1">{subLink?.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
