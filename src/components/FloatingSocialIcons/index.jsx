import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FB, INSTA, TWITTER, WHATSAPP } from "@/constants/contactLinks";
import FB_ANIMATED_IMG from "@/assets/images/social-medias/fb-animated.gif";
import INSTA_ANIMATED_IMG from "@/assets/images/social-medias/insta-animated.gif";
import TWITTER_ANIMATED_IMG from "@/assets/images/social-medias/twitter-animated.gif";
import WHATSAPP_ANIMATED_IMG from "@/assets/images/social-medias/whatsapp-animated.gif";

const SOCIAL_MEDIA_LINKS = [
  {
    icon: FB_ANIMATED_IMG,
    href: FB.href,
    text: "Facebook",
  },
  {
    icon: INSTA_ANIMATED_IMG,
    href: INSTA.href,
    text: "Instagram",
  },
  {
    icon: TWITTER_ANIMATED_IMG,
    href: TWITTER.href,
    text: "Twitter",
  },
  {
    icon: WHATSAPP_ANIMATED_IMG,
    href: WHATSAPP.href,
    text: "Whatsapp",
  },
];

const FloatingSocialIcons = () => {
  const containerRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed bottom-10 right-10 transition-all duration-300 ease-in-out z-50"
      >
        {show && (
          <ul className="space-y-2">
            {SOCIAL_MEDIA_LINKS.map((link, i) => (
              <li
                key={i}
                className="w-14 h-14 flex items-center justify-center transition-all duration-300 ease-in-out"
              >
                <Link to={link.href} className="flex-1" target="_blank">
                  <img
                    src={link.icon}
                    alt={link.text}
                    className="w-full h-full rounded-full object-cover"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div
          className={cn([
            "w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-primary/90 transition-all duration-300 ease-in-out",
            show && "mt-5 rotate-45",
          ])}
          onClick={() => setShow(!show)}
        >
          <Plus size={24} />
        </div>
      </div>
    </>
  );
};

export default FloatingSocialIcons;
