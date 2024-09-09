import { Button } from "@/components/ui/button";
import WHY_CHOOSE_OFFERING_IMG from "@/assets/images/home/why-choose-offering.jpg";
import WHY_CHOOSE_OFFERING_BG_IMG from "@/assets/images/home/why-choose-offering-bg.jpg";
import { Play } from "lucide-react";

const WhyChooseOffering = () => {
  return (
    <>
      <section
        className="bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${WHY_CHOOSE_OFFERING_BG_IMG})` }}
      >
        <div className="py-20 bg-[rgba(0,0,0,0.7)]">
          <div className="container grid grid-cols-12 gap-y-10 lg:gap-10 lg:items-center">
            <div className="col-span-12 lg:col-span-6">
              <div className="max-w-xl mx-auto relative group cursor-pointer">
                <img
                  src={WHY_CHOOSE_OFFERING_IMG}
                  alt="Why Choose This Offering"
                  loading="lazy"
                  className="w-full rounded-3xl group-hover:opacity-80 transition-all duration-300 ease-in-out"
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 border-[5px] border-white w-16 h-16 flex items-center justify-center rounded-full cursor-pointer group-hover:bg-red-700 transition-all duration-300 ease-in-out">
                  <Play size={24} className="text-white" />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 z-40">
              <h2 className="text-5xl font-bold text-white leading-tight mb-2">
                Why Choose This Offering?
              </h2>
              <h3 className="text-4xl font-bold text-gray-300 leading-tight mb-5">
                IBM & Acuver: A Decade of Unmatched Success and Innovation!
              </h3>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 max-w-lg">
                <Button className="bg-white text-primary hover:text-white">
                  Partner Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseOffering;
