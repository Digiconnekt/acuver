import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";
import HERO_ANI_IMG from "@/assets/images/home/hero-ani-img.json";
import { fadeInBottom, fadeInRight } from "@/lib/framerMotionHelpers";

const Hero = () => {
  return (
    <>
      <section className="lg:h-screen bg-gradient-to-br from-[#d9d3ff] via-[#ffffff] to-[#ab9efe]">
        <div className="container h-full grid grid-cols-12 gap-y-10 lg:gap-10 lg:items-center pb-20 pt-32 lg:pt-20">
          <div className="col-span-12 lg:col-span-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary md:leading-tight mb-4"
              variants={fadeInBottom(1, 0)}
              initial="hidden"
              whileInView="visible"
            >
              Innovation Now Meets Affordability
            </motion.h1>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary md:leading-tight"
              variants={fadeInBottom(1, 0.5)}
              initial="hidden"
              whileInView="visible"
            >
              The World&apos;s Best OMS Platform, Now in Modular Solutions!
            </motion.h1>
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mt-5 md:mt-10 max-w-lg"
              variants={fadeInBottom(1, 1)}
              initial="hidden"
              whileInView="visible"
            >
              <Button className="w-full sm:w-auto h-12">
                Discover Our Packages
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-12">
                Book Meeting
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="col-span-12 lg:col-span-6"
            variants={fadeInRight()}
            initial="hidden"
            whileInView="visible"
          >
            <div className="max-w-lg lg:max-w-full w-full mx-auto">
              <Player autoplay loop src={HERO_ANI_IMG} />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
