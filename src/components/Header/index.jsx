import Logo from "@/components/Logo";
import MobileNav from "@/components/Header/partials/MobileNav";
import DesktopNav from "@/components/Header/partials/DesktopNav";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header
        className={cn([
          "h-20 sticky top-0 z-50 transition-all duration-300 ease-in-out",
          scrolled ? "shadow-sm bg-white" : "bg-transparent",
        ])}
      >
        <div className="container flex items-center justify-between h-full">
          <Logo />

          <DesktopNav />

          <MobileNav />
        </div>
      </header>
    </>
  );
};

export default Header;
