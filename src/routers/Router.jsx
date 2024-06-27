import { Add } from "../pages/Add";
import Home from "../pages/Home";
import { createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <Add />,
    },
  ]);
  export default router;