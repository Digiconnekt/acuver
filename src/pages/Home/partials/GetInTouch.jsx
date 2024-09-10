import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GetInTouchForm from "@/components/GetInTouchForm";
import { fadeInLeft, fadeInRight } from "@/lib/framerMotionHelpers";

const GetInTouch = () => {
  const [openGetInTouchForm, setOpenGetInTouchForm] = useState(false);

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container">
          <motion.h2
            className="text-white text-4xl md:text-5xl font-bold text-center"
            variants={fadeInLeft(1, 0)}
            initial="hidden"
            whileInView="visible"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="text-center mt-5 md:mt-10"
            variants={fadeInRight(1, 0)}
            initial="hidden"
            whileInView="visible"
          >
            <Button
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => setOpenGetInTouchForm(true)}
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>

      <GetInTouchForm
        open={openGetInTouchForm}
        setOpen={setOpenGetInTouchForm}
      />
    </>
  );
};

export default GetInTouch;
