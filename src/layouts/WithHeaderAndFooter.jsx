import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import GetInTouchForm from "@/components/GetInTouchForm";
import FloatingSocialIcons from "@/components/FloatingSocialIcons";
import FloatingGetInTouchBtn from "@/components/FloatingGetInTouchBtn";

const WithHeaderAndFooterLayout = () => {
  const [openGetInTouchForm, setOpenGetInTouchForm] = useState(false);

  return (
    <>
      <Header />

      <main className="-mt-[80px] space-y-24 md:space-y-32 overflow-x-hidden">
        <Outlet />
      </main>

      <Footer />

      <FloatingSocialIcons />
      <FloatingGetInTouchBtn
        open={openGetInTouchForm}
        setOpen={setOpenGetInTouchForm}
      />

      <GetInTouchForm
        open={openGetInTouchForm}
        setOpen={setOpenGetInTouchForm}
      />
    </>
  );
};

export default WithHeaderAndFooterLayout;
