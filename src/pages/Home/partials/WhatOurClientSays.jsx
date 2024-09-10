/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import UserImg from "@/assets/images/user-profile.png";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeInBottom } from "@/lib/framerMotionHelpers";
import QuotesIcon from "@/assets/images/home/what-client-says/quotes.png";
import StarFullIcon from "@/assets/images/home/what-client-says/starFull.png";
import StarHalfIcon from "@/assets/images/home/what-client-says/starHalf.png";

const TESTIMONIAL_DATA = [
  {
    name: "Sara Smith",
    position: "Software Engineer",
    img: UserImg,
    stars: 4.5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur magnam temporibus debitis libero, accusantium provident eveniet maxime nesciunt commodi quo id possimus saepe nobis, dolores quas neque quaerat autem?",
  },
  {
    name: "John Smith",
    position: "Software Engineer",
    img: UserImg,
    stars: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur magnam temporibus debitis libero, accusantium provident eveniet maxime nesciunt commodi quo id possimus saepe nobis, dolores quas neque quaerat autem?",
  },
  {
    name: "Alex Smith",
    position: "Software Engineer",
    img: UserImg,
    stars: 4.5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur magnam temporibus debitis libero, accusantium provident eveniet maxime nesciunt commodi quo id possimus saepe nobis, dolores quas neque quaerat autem?",
  },
];

const Stars = ({ stars }) => {
  const wholeStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  return (
    <div className="flex items-center justify-center gap-1 mt-3">
      {Array.from({ length: wholeStars }).map((_, i) => (
        <img
          key={`full-${i}`}
          src={StarFullIcon}
          alt="Star"
          className="w-5 h-5"
        />
      ))}

      {hasHalfStar && (
        <img src={StarHalfIcon} alt="Half Star" className="w-5 h-5" />
      )}
    </div>
  );
};

const WhatOurClientSays = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (activeIndex < TESTIMONIAL_DATA.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  }, [activeIndex]);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(TESTIMONIAL_DATA.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <>
      <section className="container">
        <motion.h2
          className="text-primary text-4xl font-bold mb-3 text-center max-w-md mx-auto leading-tight"
          variants={fadeInBottom(1, 0)}
          initial="hidden"
          whileInView="visible"
        >
          Listen to What Our Clients Say About Us?
        </motion.h2>

        <div className="relative mt-10">
          <div className="relative w-28 h-28 mx-auto">
            <img
              src={TESTIMONIAL_DATA[activeIndex].img}
              alt={TESTIMONIAL_DATA[activeIndex].name}
              className="w-full h-full object-cover rounded-full z-20"
            />

            <div className="bg-primary w-12 h-12 flex items-center justify-center rounded-full absolute -left-3 -bottom-2 z-30">
              <img
                src={QuotesIcon}
                alt={""}
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>

          <h3 className="mt-5 text-center">
            <span className="text-secondary text-lg font-semibold">
              {TESTIMONIAL_DATA[activeIndex].name},
            </span>
            <span className="ml-1">
              {TESTIMONIAL_DATA[activeIndex].position}
            </span>
          </h3>

          <Stars stars={TESTIMONIAL_DATA[activeIndex].stars} />

          <p className="max-w-2xl mx-auto text-center text-secondary text-lg mt-5 pb-20 md:pb-0">
            &ldquo;{TESTIMONIAL_DATA[activeIndex].text}&rdquo;
          </p>

          <div
            className="bg-white hover:bg-primary text-secondary hover:text-white w-14 h-14 flex items-center justify-center rounded-full absolute left-0 sm:left-1/3 md:left-0 bottom-0 md:top-1/2 md:-translate-y-1/2 border cursor-pointer transition-all duration-300 ease-in-out"
            onClick={handlePrev}
          >
            <ChevronLeft size={24} />
          </div>
          <div
            className="bg-white hover:bg-primary text-secondary hover:text-white w-14 h-14 flex items-center justify-center rounded-full absolute right-0 sm:right-1/3 md:right-0 bottom-0 md:top-1/2 md:-translate-y-1/2 border cursor-pointer transition-all duration-300 ease-in-out"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatOurClientSays;
