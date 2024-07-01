import { createBrowserRouter } from "react-router-dom";
import { Add } from "../pages/Add";
import Home from "../pages/Home";

import { Edit } from "./../pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);
export default router;
