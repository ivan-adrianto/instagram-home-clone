import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  ]);

  return (
    <div className="flex justify-center bg">
      <div className="w-full max-w-[470px] h-screen bg-white relative" >
        <RouterProvider router={route} />
      </div>
    </div>
  );
}

export default Router;
