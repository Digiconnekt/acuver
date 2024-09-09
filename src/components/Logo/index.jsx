import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import LOGO_IMG from "@/assets/images/logos/logo-full-dark.png";

const Logo = () => {
  return (
    <>
      <Link to={"/"} className={cn(["max-w-36 w-full"])}>
        <img src={LOGO_IMG} alt="Acuver" className="w-full" loading="lazy" />
      </Link>
    </>
  );
};

export default Logo;
