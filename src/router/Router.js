import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Comments from "../pages/Comments";
import Homepage from "../pages/Homepage";
import Share from "../pages/Share";

function Router() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/comments/:id",
      element: <Comments />,
    },
    {
      path: "share",
      element: <Share />,
    },
    {
      path: "detail/:id",
      element: <Homepage />,
    },
  ]);

  return (
    <div className="flex justify-center overflow-x-hidden">
      <Sidebar />
      <div className="w-full max-w-md relative">
        <RouterProvider router={route} />
      </div>
    </div>
  );
}

export default Router;
