import { useState } from "react";
import { Button } from "@/components/ui/button";
import GetInTouchForm from "@/components/GetInTouchForm";

const GetInTouch = () => {
  const [openGetInTouchForm, setOpenGetInTouchForm] = useState(false);

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container">
          <h2 className="text-white text-5xl font-bold text-center">
            Get In Touch
          </h2>
          <div className="text-center mt-10">
            <Button
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => setOpenGetInTouchForm(true)}
            >
              Get In Touch
            </Button>
          </div>
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
