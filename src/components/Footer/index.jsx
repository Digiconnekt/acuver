/* eslint-disable react/prop-types */

import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { Copyright, Mail, Phone } from "lucide-react";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/constants/contactLinks";
import LINKS from "@/constants/navigationLinks";

const CONTACT_LINKS = [
  {
    icon: Phone,
    text: PHONE_NUMBER.text,
    href: PHONE_NUMBER.href,
  },
  {
    icon: Mail,
    text: EMAIL_ADDRESS.text,
    href: EMAIL_ADDRESS.href,
  },
];

const LinkBlock = ({ title, links }) => {
  return (
    <>
      <h2 className="text-primary text-xl font-semibold">{title}</h2>

      <ul className="mt-5 space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              to={link?.href}
              className="text-primary hover:opacity-70 transition-all duration-300 ease-in-out"
            >
              {link?.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="bg-[#d9d3ff] mt-32 -mb-[24px]">
        <div className="container pt-14">
          <div className="grid grid-cols-12 gap-y-10 md:gap-10">
            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
              <div className="w-40">
                <Logo />
              </div>
              <p className="text-secondary mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                esse rerum adipisci aliquam possimus perspiciatis animi aliquid
                officia, quas vitae, quia dignissimos quasi beatae? Itaque
                deserunt voluptatem voluptatum at inventore.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-center">
              <LinkBlock title="Quick Links" links={LINKS} />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <h2 className="text-primary text-xl font-semibold text-center">
                Contact Us
              </h2>

              <ul className="mt-5 space-y-2">
                {CONTACT_LINKS.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link?.href}
                      className="text-primary flex items-center justify-center gap-3 hover:opacity-70 transition-all duration-300 ease-in-out"
                    >
                      <link.icon size={18} className="text-primary" />

                      {link?.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-400 py-8 text-center">
            <p className="text-secondary flex items-center justify-center gap-1 text-sm">
              <Copyright size={14} className="text-secondary" />
              {new Date().getFullYear()} Acuver. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
