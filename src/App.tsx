import { memo } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Finish from "./pages/finish/Finish";

const App = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/finish",
          element: <Finish />,
        },
      ])}
    </>
  );
};

export default memo(App);
