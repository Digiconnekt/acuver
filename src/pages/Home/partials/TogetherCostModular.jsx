import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInLeft, fadeInRight } from "@/lib/framerMotionHelpers";
import IBM_STERLING_OMS_IMG from "@/assets/images/home/ibm-sterling-oms.jpg";

const TogetherCostModular = () => {
  return (
    <>
      <section className="container grid grid-cols-12 gap-y-10 lg:gap-10 lg:items-center">
        <motion.div
          className="col-span-12 lg:col-span-6 z-40"
          variants={fadeInLeft(1, 0)}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary md:leading-tight mb-2">
            Together The Cost Effective Modular Offering We Bring
          </h2>

          <p className="text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            debitis, nulla inventore sequi deleniti veritatis vitae quae, fuga
            accusamus cum distinctio ex cupiditate repellendus sunt maiores ut
            minus vel. Itaque, laudantium suscipit optio odit et, molestias enim
            ipsa blanditiis.
          </p>
          <p className="text-md mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            debitis, nulla inventore sequi deleniti veritatis vitae quae, fuga
            accusamus cum. laboriosam repellendus repellat nesciunt deleniti
            quo, impedit corrupti cumque adipisci.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 max-w-lg">
            <Button className="w-full sm:w-auto">Know More</Button>
          </div>
        </motion.div>
        <motion.div
          className="col-span-12 lg:col-span-6"
          variants={fadeInRight(1, 0)}
          initial="hidden"
          whileInView="visible"
        >
          <div className="max-w-lg lg:max-w-full w-full mx-auto">
            <img
              src={IBM_STERLING_OMS_IMG}
              alt="IBM Sterling OMS"
              loading="lazy"
              className="w-full"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default TogetherCostModular;
