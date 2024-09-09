/* eslint-disable react/prop-types */

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import LINKS from "@/constants/navigationLinks";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";

const MobNavLink = ({ link, setOpen }) => {
  const [showSubLinks, setShowSubLinks] = useState(false);

  return (
    <>
      <li>
        <div className="flex items-center justify-between">
          <Link
            to={link?.href}
            className="flex-1 text-secondary hover:text-primary text-md font-semibold transition-all ease-in-out duration-300"
            onClick={() => setOpen(false)}
          >
            {link?.name}
          </Link>

          {link?.subLinks && (
            <ChevronDown
              size={18}
              className="text-secondary hover:text-primary cursor-pointer transition-all ease-in-out duration-300"
              onClick={() => setShowSubLinks(!showSubLinks)}
            />
          )}
        </div>

        {showSubLinks && link?.subLinks && (
          <ul className="py-1 mt-2 bg-white shadow-[0_0px_15px_0_rgba(0,0,0,0.1)] rounded-sm transition-all duration-300 ease-in-out">
            {link?.subLinks.map((subLink, j) => (
              <li key={j}>
                <Link
                  to={subLink?.href}
                  className="flex items-center gap-2 text-secondary hover:text-white hover:bg-primary text-md font-semibold px-4 py-2 rounded-sm transition-all ease-in-out duration-300"
                  onClick={() => setOpen(false)}
                >
                  <span className="flex-1">{subLink?.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="max-w-40 mx-auto mt-2">
              <Logo />
            </div>
          </SheetHeader>

          <ul className="mt-5 flex flex-col gap-4">
            {LINKS.map((link, i) => (
              <MobNavLink key={i} link={link} setOpen={setOpen} />
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
