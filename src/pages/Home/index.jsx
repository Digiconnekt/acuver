import Hero from "@/pages/Home/partials/Hero";
import Blogs from "@/pages/Home/partials/Blogs";
import GetInTouch from "@/pages/Home/partials/GetInTouch";
import IbmSterlingOms from "@/pages/Home/partials/IbmSterlingOms";
import WhyChooseOffering from "@/pages/Home/partials/WhyChooseOffering";
import WhatOurClientSays from "@/pages/Home/partials/WhatOurClientSays";
import TogetherCostModular from "@/pages/Home/partials/TogetherCostModular";
import WhyChooseIbmSterling from "@/pages/Home/partials/WhyChooseIbmSterling";

const Home = () => {
  return (
    <>
      <Hero />
      <IbmSterlingOms />
      <WhyChooseIbmSterling />
      <TogetherCostModular />
      <WhyChooseOffering />
      <WhatOurClientSays />
      <GetInTouch />
      <Blogs />
    </>
  );
};

export default Home;
