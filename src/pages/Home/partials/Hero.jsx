import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";
import HERO_ANI_IMG from "@/assets/images/home/hero-ani-img.json";

const Hero = () => {
  return (
    <>
      <section className="-mt-[80px] h-[calc(100vh)] bg-gradient-to-br from-[#d9d3ff] via-[#ffffff] to-[#ab9efe]">
        <div className="container h-full grid grid-cols-12 gap-y-10 lg:gap-10 lg:items-center py-20">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-6xl font-bold text-primary leading-tight mb-4">
              Innovation Now Meets Affordability
            </h1>
            <h1 className="text-5xl font-bold text-secondary leading-tight">
              The World&apos;s Best OMS Platform, Now in Modular Solutions!
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 max-w-lg">
              <Button className="w-full sm:w-auto h-12">
                Discover Our Packages
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-12">
                Book Meeting
              </Button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Player autoplay loop src={HERO_ANI_IMG} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
