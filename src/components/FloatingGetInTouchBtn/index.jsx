/* eslint-disable react/prop-types */

import { Button } from "@/components/ui/button";

const FloatingGetInTouchBtn = ({ open, setOpen }) => {
  return (
    <>
      <div className="fixed top-1/2 -translate-y-1/2 -right-10 md:-right-9 z-50">
        <Button
          className="transform -rotate-90 md:h-12"
          onClick={() => setOpen(!open)}
        >
          Get In Touch
        </Button>
      </div>
    </>
  );
};

export default FloatingGetInTouchBtn;
