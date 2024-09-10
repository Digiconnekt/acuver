import { motion } from "framer-motion";
import { fadeInBottom, fadeInLeft } from "@/lib/framerMotionHelpers";

const WhyChooseIbmSterling = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container h-full grid grid-cols-12 gap-y-10 sm:gap-10 lg:items-center py-20">
          <motion.div
            className="col-span-12 xl:col-span-3"
            variants={fadeInLeft(1, 0)}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-4xl text-white text-center xl:text-left font-bold leading-[1.4]">
              Why Choose IBM Sterling
            </h2>
          </motion.div>
          <motion.div
            className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
            variants={fadeInBottom(1, 0)}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-white text-3xl font-bold">3 Weeks</h3>
            <p className="mt-3 text-gray-200">
              3 weeks time-to-market deployment of ship-to-store.
            </p>
          </motion.div>
          <motion.div
            className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
            variants={fadeInBottom(1, 0.25)}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-white text-3xl font-bold">4.2 M</h3>
            <p className="mt-3 text-gray-200">
              USD 4.2 million in new profit from improved order management.
            </p>
          </motion.div>
          <motion.div
            className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
            variants={fadeInBottom(1, 0.5)}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-white text-3xl font-bold">170%</h3>
            <p className="mt-3 text-gray-200">
              170% ROI in three years by using technology to minimize costs.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseIbmSterling;
