import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";

import WithHeaderAndFooterLayout from "@/layouts/WithHeaderAndFooter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WithHeaderAndFooterLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
